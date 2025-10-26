'use client'

import { format } from 'date-fns'

interface Message {
  id: string
  sender: string
  recipient: string
  content: string
  timestamp: number
  type: 'text' | 'image' | 'file'
}

interface MessageBubbleProps {
  message: Message
  isOwn: boolean
}

export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md ${isOwn ? 'ml-12' : 'mr-12'}`}>
        <div
          className={`message-bubble ${
            isOwn ? 'message-sent' : 'message-received'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
        <p className={`text-xs text-secondary-500 mt-1 ${isOwn ? 'text-right' : 'text-left'}`}>
          {format(new Date(message.timestamp), 'HH:mm')}
        </p>
      </div>
    </div>
  )
}
