'use client'

import { WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { config, queryClient } from '@/lib/config'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WagmiAdapter>
          {children}
        </WagmiAdapter>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
