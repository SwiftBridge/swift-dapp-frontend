'use client'

import { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { ConnectButton } from '@reown/appkit'
import { MessageCircle, Users, Send, Zap, Shield, Globe } from 'lucide-react'
import { Dashboard } from '@/components/Dashboard'
import { SocialMessaging } from '@/components/SocialMessaging'
import { BatchMessaging } from '@/components/BatchMessaging'
import { BatchTransactions } from '@/components/BatchTransactions'
import { UserProfile } from '@/components/UserProfile'

type TabType = 'dashboard' | 'social' | 'batch-messaging' | 'batch-transactions' | 'profile'

export default function Home() {
  const { isConnected } = useAccount()
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Globe },
    { id: 'social', label: 'Social', icon: MessageCircle },
    { id: 'batch-messaging', label: 'Batch Messaging', icon: Users },
    { id: 'batch-transactions', label: 'Batch Transactions', icon: Send },
    { id: 'profile', label: 'Profile', icon: Shield },
  ]

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-gradient mb-4">
                Swift v2
              </h1>
              <p className="text-xl text-secondary-300 mb-8">
                Decentralized Social Messaging Platform
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <MessageCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Social Messaging</h3>
                <p className="text-secondary-400">
                  Connect and message with other users in a decentralized way
                </p>
              </div>
              
              <div className="card text-center">
                <Users className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Batch Messaging</h3>
                <p className="text-secondary-400">
                  Send messages to multiple addresses simultaneously
                </p>
              </div>
              
              <div className="card text-center">
                <Zap className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Batch Transactions</h3>
                <p className="text-secondary-400">
                  Execute multiple transactions in one batch for efficiency
                </p>
              </div>
            </div>
            
            <div className="card max-w-md mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
              <p className="text-secondary-400 mb-6">
                Connect your wallet to start using Swift v2 on Base Mainnet
              </p>
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-900">
      <nav className="bg-secondary-800 border-b border-secondary-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gradient">Swift v2</h1>
              <div className="hidden md:flex space-x-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white'
                          : 'text-secondary-400 hover:text-secondary-100 hover:bg-secondary-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <ConnectButton />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'social' && <SocialMessaging />}
        {activeTab === 'batch-messaging' && <BatchMessaging />}
        {activeTab === 'batch-transactions' && <BatchTransactions />}
        {activeTab === 'profile' && <UserProfile />}
      </main>
    </div>
  )
}
