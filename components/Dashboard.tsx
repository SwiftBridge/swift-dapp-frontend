'use client'

import { useAccount, useBalance } from 'wagmi'
import { MessageCircle, Users, Send, Zap, TrendingUp, Clock } from 'lucide-react'
import { formatEther } from 'viem'

export function Dashboard() {
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  const stats = [
    {
      title: 'Total Messages',
      value: '1,234',
      change: '+12%',
      icon: MessageCircle,
      color: 'text-blue-400',
    },
    {
      title: 'Batch Messages Sent',
      value: '89',
      change: '+8%',
      icon: Users,
      color: 'text-green-400',
    },
    {
      title: 'Batch Transactions',
      value: '45',
      change: '+23%',
      icon: Send,
      color: 'text-purple-400',
    },
    {
      title: 'Gas Saved',
      value: '2.4 ETH',
      change: '+15%',
      icon: Zap,
      color: 'text-yellow-400',
    },
  ]

  const recentActivity = [
    {
      type: 'message',
      description: 'Sent batch message to 5 recipients',
      time: '2 minutes ago',
      icon: MessageCircle,
    },
    {
      type: 'transaction',
      description: 'Executed batch transaction with 3 operations',
      time: '15 minutes ago',
      icon: Send,
    },
    {
      type: 'message',
      description: 'Received message from 0x1234...5678',
      time: '1 hour ago',
      icon: MessageCircle,
    },
    {
      type: 'transaction',
      description: 'Gas optimization saved 0.05 ETH',
      time: '2 hours ago',
      icon: Zap,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="text-sm text-secondary-400">
          Welcome back, {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
      </div>

      {/* Balance Card */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
            <p className="text-3xl font-bold text-gradient">
              {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ETH` : '0.0000 ETH'}
            </p>
            <p className="text-sm text-secondary-400 mt-1">Base Mainnet</p>
          </div>
          <TrendingUp className="w-12 h-12 text-primary-400" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-sm text-green-400 font-medium">{stat.change}</span>
              </div>
              <h4 className="text-2xl font-bold mb-1">{stat.value}</h4>
              <p className="text-sm text-secondary-400">{stat.title}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div key={index} className="flex items-center space-x-4 p-4 bg-secondary-700 rounded-lg">
                <Icon className="w-5 h-5 text-primary-400" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.description}</p>
                  <p className="text-xs text-secondary-400">{activity.time}</p>
                </div>
                <Clock className="w-4 h-4 text-secondary-500" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary flex items-center justify-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>Send Message</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Batch Message</span>
          </button>
          <button className="btn-outline flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Batch Transaction</span>
          </button>
        </div>
      </div>
    </div>
  )
}
