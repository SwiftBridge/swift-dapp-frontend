'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Plus, X, Send, Users, Clock, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

interface Recipient {
  address: string
  name?: string
}

export function BatchMessaging() {
  const { address } = useAccount()
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [message, setMessage] = useState('')
  const [newAddress, setNewAddress] = useState('')
  const [newName, setNewName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const addRecipient = () => {
    if (!newAddress.trim()) {
      toast.error('Please enter a valid address')
      return
    }

    // Basic address validation
    if (!/^0x[a-fA-F0-9]{40}$/.test(newAddress)) {
      toast.error('Please enter a valid Ethereum address')
      return
    }

    // Check for duplicates
    if (recipients.some(r => r.address.toLowerCase() === newAddress.toLowerCase())) {
      toast.error('Address already added')
      return
    }

    setRecipients(prev => [...prev, {
      address: newAddress,
      name: newName || `Address ${recipients.length + 1}`
    }])
    setNewAddress('')
    setNewName('')
    toast.success('Recipient added')
  }

  const removeRecipient = (index: number) => {
    setRecipients(prev => prev.filter((_, i) => i !== index))
    toast.success('Recipient removed')
  }

  const handleSendBatchMessage = async () => {
    if (!message.trim()) {
      toast.error('Please enter a message')
      return
    }

    if (recipients.length === 0) {
      toast.error('Please add at least one recipient')
      return
    }

    setIsLoading(true)
    
    try {
      // In real app, this would call the batch messaging smart contract
      console.log('Sending batch message:', {
        recipients: recipients.map(r => r.address),
        message,
        sender: address
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success(`Message sent to ${recipients.length} recipients`)
      setMessage('')
      setRecipients([])
    } catch (error) {
      toast.error('Failed to send batch message')
      console.error('Error sending batch message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addRecipient()
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Batch Messaging</h2>
        <p className="text-secondary-400">
          Send messages to multiple addresses simultaneously
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recipients Section */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Recipients ({recipients.length})
          </h3>

          {/* Add Recipient Form */}
          <div className="space-y-3 mb-6">
            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Ethereum Address
              </label>
              <input
                type="text"
                placeholder="0x..."
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                onKeyPress={handleKeyPress}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Recipient name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="input-field"
              />
            </div>
            <button
              onClick={addRecipient}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Recipient</span>
            </button>
          </div>

          {/* Recipients List */}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {recipients.map((recipient, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-secondary-700 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{recipient.name}</p>
                  <p className="text-xs text-secondary-400 truncate">{recipient.address}</p>
                </div>
                <button
                  onClick={() => removeRecipient(index)}
                  className="p-1 hover:bg-secondary-600 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-red-400" />
                </button>
              </div>
            ))}
          </div>

          {recipients.length === 0 && (
            <div className="text-center py-8 text-secondary-500">
              <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No recipients added yet</p>
            </div>
          )}
        </div>

        {/* Message Section */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Message</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-300 mb-1">
                Message Content
              </label>
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                className="input-field resize-none"
              />
            </div>

            <div className="text-sm text-secondary-400">
              <p>Characters: {message.length}</p>
              <p>Recipients: {recipients.length}</p>
            </div>

            <button
              onClick={handleSendBatchMessage}
              disabled={isLoading || !message.trim() || recipients.length === 0}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send to {recipients.length} Recipients</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Batch Message Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card text-center">
          <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <h4 className="font-semibold">Gas Efficient</h4>
          <p className="text-sm text-secondary-400">
            Save up to 70% on gas costs compared to individual messages
          </p>
        </div>
        <div className="card text-center">
          <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <h4 className="font-semibold">Fast Delivery</h4>
          <p className="text-sm text-secondary-400">
            All messages are sent in a single transaction
          </p>
        </div>
        <div className="card text-center">
          <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <h4 className="font-semibold">Unlimited Recipients</h4>
          <p className="text-sm text-secondary-400">
            Send to as many addresses as you need
          </p>
        </div>
      </div>
    </div>
  )
}
