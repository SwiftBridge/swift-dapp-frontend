import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, base } from 'wagmi/chains'
import { createConfig, http } from 'wagmi'

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!
const baseRpcUrl = process.env.NEXT_PUBLIC_BASE_RPC_URL || 'https://mainnet.base.org'

// Create wagmi config
export const config = createConfig({
  chains: [base, mainnet],
  transports: {
    [base.id]: http(baseRpcUrl),
    [mainnet.id]: http(),
  },
})

// Create AppKit
export const appKit = createAppKit({
  adapters: [config],
  projectId,
  defaultChain: base,
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
