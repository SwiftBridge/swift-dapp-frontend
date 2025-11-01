'use client'

import { User } from 'lucide-react'

interface Contact {
  address: string
  name: string
  lastMessage?: string
  lastSeen: number
  unreadCount: number
  isOnline: boolean
}

interface ContactListProps {
  contacts: Contact[]
  selectedContact: Contact | null
  onSelectContact: (contact: Contact) => void
}

export function ContactList({ contacts, selectedContact, onSelectContact }: ContactListProps) {
  const formatAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <div className="space-y-1">
      {contacts.length === 0 ? (
        <div className="text-center py-8 text-secondary-400">
          <User className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No contacts yet</p>
        </div>
      ) : (
        contacts.map((contact) => (
          <button
            key={contact.address}
            onClick={() => onSelectContact(contact)}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedContact?.address === contact.address
                ? 'bg-primary-600/20 border border-primary-500'
                : 'hover:bg-secondary-700'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {contact.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                {contact.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-secondary-800" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm truncate">{contact.name}</h4>
                  {contact.lastSeen > 0 && (
                    <span className="text-xs text-secondary-400">
                      {formatTime(contact.lastSeen)}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-secondary-400 truncate">
                    {contact.lastMessage || formatAddress(contact.address)}
                  </p>
                  {contact.unreadCount > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-primary-500 text-white text-xs rounded-full">
                      {contact.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  )
}
