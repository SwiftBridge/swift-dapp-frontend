import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { QueryClient } from '@tanstack/react-query'
import { mainnet, base } from 'wagmi/chains'

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID_HERE'
const baseRpcUrl = process.env.NEXT_PUBLIC_RPC_URL || 'https://mainnet.base.org'

// Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [base, mainnet],
  projectId,
})

// Create wagmi config from adapter
export const config = wagmiAdapter.wagmiConfig

// Create AppKit
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [base, mainnet],
  defaultNetwork: base,
  metadata: {
    name: 'Swift v2',
    description: 'Decentralized Social Messaging Platform',
    url: 'https://swift-v2.vercel.app',
    icons: ['https://swift-v2.vercel.app/icon.png'],
  },
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#3b82f6',
    '--w3m-color-mix-strength': 40,
  },
})

// Create query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

// Contract addresses
export const contractAddresses = {
  socialMessaging: process.env.NEXT_PUBLIC_SOCIAL_MESSAGING_ADDRESS || '',
  batchMessaging: process.env.NEXT_PUBLIC_BATCH_MESSAGING_ADDRESS || '',
  batchTransactions: process.env.NEXT_PUBLIC_BATCH_TRANSACTIONS_ADDRESS || '',
  userManagement: process.env.NEXT_PUBLIC_USER_MANAGEMENT_ADDRESS || '',
  messageStorage: process.env.NEXT_PUBLIC_MESSAGE_STORAGE_ADDRESS || '',
  notifications: process.env.NEXT_PUBLIC_NOTIFICATIONS_ADDRESS || '',
  governance: process.env.NEXT_PUBLIC_GOVERNANCE_ADDRESS || '',
  utilities: process.env.NEXT_PUBLIC_UTILITIES_ADDRESS || '',
}

// IPFS configuration
export const ipfsConfig = {
  gateway: process.env.NEXT_PUBLIC_IPFS_GATEWAY || 'https://gateway.pinata.cloud/ipfs/',
}

// Push Protocol configuration
export const pushConfig = {
  apiKey: process.env.NEXT_PUBLIC_PUSH_PROTOCOL_API_KEY || '',
}
