'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { User, Edit, Save, X, Camera, Settings, Shield, Bell, Globe } from 'lucide-react'
import toast from 'react-hot-toast'

interface UserProfile {
  address: string
  name: string
  bio: string
  avatar: string
  socialLinks: {
    twitter?: string
    github?: string
    website?: string
  }
  preferences: {
    notifications: boolean
    privacy: 'public' | 'friends' | 'private'
    theme: 'light' | 'dark' | 'auto'
  }
  stats: {
    messagesSent: number
    messagesReceived: number
    batchMessagesSent: number
    batchTransactionsExecuted: number
  }
}

export function UserProfile() {
  const { address } = useAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    address: address || '',
    name: 'Anonymous User',
    bio: 'Welcome to Swift v2!',
    avatar: '',
    socialLinks: {
      twitter: '',
      github: '',
      website: ''
    },
    preferences: {
      notifications: true,
      privacy: 'public',
      theme: 'dark'
    },
    stats: {
      messagesSent: 156,
      messagesReceived: 89,
      batchMessagesSent: 23,
      batchTransactionsExecuted: 12
    }
  })

  const [editProfile, setEditProfile] = useState(profile)

  const handleSave = () => {
    setProfile(editProfile)
    setIsEditing(false)
    toast.success('Profile updated successfully')
  }

  const handleCancel = () => {
    setEditProfile(profile)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditProfile(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSocialLinkChange = (platform: string, value: string) => {
    setEditProfile(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }))
  }

  const handlePreferenceChange = (field: string, value: any) => {
    setEditProfile(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">User Profile</h2>
        <p className="text-secondary-400">
          Manage your profile and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Information
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-outline flex items-center space-x-2"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>
                  {isEditing && (
                    <button className="absolute -bottom-1 -right-1 p-2 bg-secondary-700 rounded-full border-2 border-secondary-600 hover:bg-secondary-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{profile.name}</h4>
                  <p className="text-sm text-secondary-400">{profile.address}</p>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-secondary-300 mb-1">
                  Display Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editProfile.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input-field"
                  />
                ) : (
                  <p className="text-lg">{profile.name}</p>
                )}
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-secondary-300 mb-1">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={editProfile.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                    className="input-field resize-none"
                  />
                ) : (
                  <p className="text-secondary-300">{profile.bio}</p>
                )}
              </div>

              {/* Social Links */}
              <div>
                <label className="block text-sm font-medium text-secondary-300 mb-3">
                  Social Links
                </label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-secondary-400 mb-1">Twitter</label>
                    {isEditing ? (
                      <input
                        type="text"
                        placeholder="https://twitter.com/username"
                        value={editProfile.socialLinks.twitter}
                        onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-sm">{profile.socialLinks.twitter || 'Not provided'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-secondary-400 mb-1">GitHub</label>
                    {isEditing ? (
                      <input
                        type="text"
                        placeholder="https://github.com/username"
                        value={editProfile.socialLinks.github}
                        onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-sm">{profile.socialLinks.github || 'Not provided'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-secondary-400 mb-1">Website</label>
                    {isEditing ? (
                      <input
                        type="text"
                        placeholder="https://yourwebsite.com"
                        value={editProfile.socialLinks.website}
                        onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                        className="input-field"
                      />
                    ) : (
                      <p className="text-sm">{profile.socialLinks.website || 'Not provided'}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Preferences
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Notifications</label>
                  <p className="text-xs text-secondary-400">Receive push notifications</p>
                </div>
                {isEditing ? (
                  <input
                    type="checkbox"
                    checked={editProfile.preferences.notifications}
                    onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                    className="w-4 h-4 text-primary-600 bg-secondary-700 border-secondary-600 rounded focus:ring-primary-500"
                  />
                ) : (
                  <div className={`w-4 h-4 rounded ${profile.preferences.notifications ? 'bg-primary-600' : 'bg-secondary-600'}`}></div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-300 mb-1">
                  Privacy Level
                </label>
                {isEditing ? (
                  <select
                    value={editProfile.preferences.privacy}
                    onChange={(e) => handlePreferenceChange('privacy', e.target.value)}
                    className="input-field"
                  >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                  </select>
                ) : (
                  <p className="text-sm capitalize">{profile.preferences.privacy}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-300 mb-1">
                  Theme
                </label>
                {isEditing ? (
                  <select
                    value={editProfile.preferences.theme}
                    onChange={(e) => handlePreferenceChange('theme', e.target.value)}
                    className="input-field"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                ) : (
                  <p className="text-sm capitalize">{profile.preferences.theme}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Statistics
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary-400">Messages Sent</span>
                <span className="font-semibold">{profile.stats.messagesSent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary-400">Messages Received</span>
                <span className="font-semibold">{profile.stats.messagesReceived}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary-400">Batch Messages</span>
                <span className="font-semibold">{profile.stats.batchMessagesSent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-secondary-400">Batch Transactions</span>
                <span className="font-semibold">{profile.stats.batchTransactionsExecuted}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Network Info
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary-400">Network</span>
                <span className="text-primary-400">Base Mainnet</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-400">Address</span>
                <span className="font-mono text-xs">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-400">Status</span>
                <span className="text-green-400">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
