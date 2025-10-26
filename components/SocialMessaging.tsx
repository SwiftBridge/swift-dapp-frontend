'use client'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { Send, Search, Plus, MoreVertical, Phone, Video } from 'lucide-react'
import { MessageBubble } from './MessageBubble'
import { ContactList } from './ContactList'

interface Message {
  id: string
  sender: string
  recipient: string
  content: string
  timestamp: number
  type: 'text' | 'image' | 'file'
}

interface Contact {
  address: string
  name: string
  lastMessage?: string
  lastSeen: number
  unreadCount: number
  isOnline: boolean
}

export function SocialMessaging() {
  const { address } = useAccount()
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - in real app, this would come from contracts
  useEffect(() => {
    const mockContacts: Contact[] = [
      {
        address: '0x1234567890123456789012345678901234567890',
        name: 'Alice Johnson',
        lastMessage: 'Hey, how are you?',
        lastSeen: Date.now() - 1000 * 60 * 5, // 5 minutes ago
        unreadCount: 2,
        isOnline: true,
      },
      {
        address: '0x2345678901234567890123456789012345678901',
        name: 'Bob Smith',
        lastMessage: 'Thanks for the help!',
        lastSeen: Date.now() - 1000 * 60 * 30, // 30 minutes ago
        unreadCount: 0,
        isOnline: false,
      },
      {
        address: '0x3456789012345678901234567890123456789012',
        name: 'Carol Davis',
        lastMessage: 'See you tomorrow',
        lastSeen: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
        unreadCount: 1,
        isOnline: true,
      },
    ]

    const mockMessages: Message[] = [
      {
        id: '1',
        sender: '0x1234567890123456789012345678901234567890',
        recipient: address || '',
        content: 'Hey, how are you?',
        timestamp: Date.now() - 1000 * 60 * 5,
        type: 'text',
      },
      {
        id: '2',
        sender: address || '',
        recipient: '0x1234567890123456789012345678901234567890',
        content: 'I\'m doing great! How about you?',
        timestamp: Date.now() - 1000 * 60 * 4,
        type: 'text',
      },
      {
        id: '3',
        sender: '0x1234567890123456789012345678901234567890',
        recipient: address || '',
        content: 'Pretty good! Working on some new projects.',
        timestamp: Date.now() - 1000 * 60 * 3,
        type: 'text',
      },
    ]

    setContacts(mockContacts)
    setMessages(mockMessages)
  }, [address])

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedContact) return

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: address || '',
      recipient: selectedContact.address,
      content: message,
      timestamp: Date.now(),
      type: 'text',
    }

    setMessages(prev => [...prev, newMessage])
    setMessage('')

    // In real app, this would call the smart contract
    console.log('Sending message:', newMessage)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-[calc(100vh-200px)] flex bg-secondary-800 rounded-xl overflow-hidden">
      {/* Contacts Sidebar */}
      <div className="w-80 bg-secondary-700 border-r border-secondary-600 flex flex-col">
        <div className="p-4 border-b border-secondary-600">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <div
              key={contact.address}
              onClick={() => setSelectedContact(contact)}
              className={`p-4 border-b border-secondary-600 cursor-pointer hover:bg-secondary-600 transition-colors ${
                selectedContact?.address === contact.address ? 'bg-secondary-600' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {contact.name.charAt(0)}
                  </div>
                  {contact.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-secondary-700"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm truncate">{contact.name}</h3>
                    <span className="text-xs text-secondary-400">
                      {new Date(contact.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm text-secondary-400 truncate">{contact.lastMessage}</p>
                  {contact.unreadCount > 0 && (
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-secondary-400">Unread</span>
                      <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                        {contact.unreadCount}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-secondary-600">
          <button className="btn-primary w-full flex items-center justify-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Message</span>
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-secondary-600 bg-secondary-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {selectedContact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedContact.name}</h3>
                    <p className="text-sm text-secondary-400">
                      {selectedContact.isOnline ? 'Online' : 'Last seen recently'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-secondary-600 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-secondary-400" />
                  </button>
                  <button className="p-2 hover:bg-secondary-600 rounded-lg transition-colors">
                    <Video className="w-5 h-5 text-secondary-400" />
                  </button>
                  <button className="p-2 hover:bg-secondary-600 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-secondary-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages
                .filter(msg => 
                  (msg.sender === address && msg.recipient === selectedContact.address) ||
                  (msg.sender === selectedContact.address && msg.recipient === address)
                )
                .map((msg) => (
                  <MessageBubble
                    key={msg.id}
                    message={msg}
                    isOwn={msg.sender === address}
                  />
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-secondary-600 bg-secondary-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="input-field flex-1"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="btn-primary p-3"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-400 mb-2">
                Select a conversation
              </h3>
              <p className="text-secondary-500">
                Choose a contact to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
