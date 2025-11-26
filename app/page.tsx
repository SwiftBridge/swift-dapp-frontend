'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react'
import { MessageCircle, Users, Send, Zap, Shield, Globe, FileCode } from 'lucide-react'
import { Dashboard } from '@/components/Dashboard'
import { SocialMessaging } from '@/components/SocialMessaging'
import { BatchMessaging } from '@/components/BatchMessaging'
import { BatchTransactions } from '@/components/BatchTransactions'
import { UserProfile } from '@/components/UserProfile'
import { ContractExplorer } from '@/components/ContractExplorer'
import { Button } from '@/components/ui/button'

type TabType = 'dashboard' | 'social' | 'batch-messaging' | 'batch-transactions' | 'profile' | 'contracts'

export default function Home() {
  const { isConnected } = useAccount()
  const { open } = useAppKit()
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Globe },
    { id: 'social', label: 'Social', icon: MessageCircle },
    { id: 'batch-messaging', label: 'Batch Messaging', icon: Users },
    { id: 'batch-transactions', label: 'Batch Transactions', icon: Send },
    { id: 'contracts', label: 'Contracts', icon: FileCode },
    { id: 'profile', label: 'Profile', icon: Shield },
  ]

  if (!isConnected) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e40af 100%)',
        color: '#f1f5f9'
      }}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="mb-8">
              <h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem'
              }}>
                Swift v2
              </h1>
              <p style={{ fontSize: '1.5rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                Decentralized Social Messaging Platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid #334155',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <MessageCircle style={{ width: '3rem', height: '3rem', color: '#60a5fa', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f1f5f9' }}>
                  Social Messaging
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  Connect and message with other users in a decentralized way
                </p>
              </div>

              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid #334155',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <Users style={{ width: '3rem', height: '3rem', color: '#60a5fa', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f1f5f9' }}>
                  Batch Messaging
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  Send messages to multiple addresses simultaneously
                </p>
              </div>

              <div style={{
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid #334155',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <Zap style={{ width: '3rem', height: '3rem', color: '#60a5fa', margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f1f5f9' }}>
                  Batch Transactions
                </h3>
                <p style={{ color: '#94a3b8' }}>
                  Execute multiple transactions in one batch for efficiency
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '1rem',
              padding: '2rem',
              maxWidth: '28rem',
              margin: '0 auto'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#f1f5f9' }}>
                Connect Your Wallet
              </h2>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Connect your wallet to start using Swift v2 on Base Mainnet
              </p>
              <button
                onClick={() => open()}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      <nav style={{
        background: '#1e293b',
        borderBottom: '1px solid #334155'
      }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #60a5fa, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Swift v2
              </h1>
              <div className="hidden md:flex space-x-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        background: isActive ? '#3b82f6' : 'transparent',
                        color: isActive ? 'white' : '#94a3b8',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = '#334155'
                          e.currentTarget.style.color = '#f1f5f9'
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#94a3b8'
                        }
                      }}
                    >
                      <Icon style={{ width: '1rem', height: '1rem' }} />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <button
              onClick={() => open()}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                background: 'transparent',
                border: '1px solid #3b82f6',
                color: '#60a5fa',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#3b82f6'
                e.currentTarget.style.color = 'white'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#60a5fa'
              }}
            >
              Wallet
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'social' && <SocialMessaging />}
        {activeTab === 'batch-messaging' && <BatchMessaging />}
        {activeTab === 'batch-transactions' && <BatchTransactions />}
        {activeTab === 'contracts' && <ContractExplorer />}
        {activeTab === 'profile' && <UserProfile />}
      </main>
    </div>
  )
}
