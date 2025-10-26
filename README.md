# Swift v2 - dApp Frontend

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)](https://tailwindcss.com/)

Main frontend application for Swift v2 decentralized social messaging platform on Base Mainnet.

## Features

- 🔗 WalletConnect v2 Integration (Reown AppKit)
- 💬 Direct Messaging
- 📦 Batch Messaging
- ⚡ Batch Transactions
- 👥 User Profiles
- 🔔 Push Notifications
- 🏛️ DAO Governance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: Wagmi v2, Viem v2, Ethers v6
- **State**: Zustand
- **UI**: Framer Motion, Lucide Icons
- **Wallet**: Reown AppKit (WalletConnect v2)

## Installation

```bash
npm install
```

## Configuration

1. Copy environment example:
```bash
cp env.example .env.local
```

2. Update `.env.local` with deployed contract addresses:
```env
NEXT_PUBLIC_CHAIN_ID=8453
NEXT_PUBLIC_RPC_URL=https://mainnet.base.org

# Contract Addresses (update after deployment)
NEXT_PUBLIC_SOCIAL_MESSAGING_ADDRESS=0x...
NEXT_PUBLIC_BATCH_MESSAGING_ADDRESS=0x...
NEXT_PUBLIC_BATCH_TRANSACTIONS_ADDRESS=0x...
NEXT_PUBLIC_USER_MANAGEMENT_ADDRESS=0x...
NEXT_PUBLIC_MESSAGE_STORAGE_ADDRESS=0x...
NEXT_PUBLIC_NOTIFICATIONS_ADDRESS=0x...
NEXT_PUBLIC_GOVERNANCE_ADDRESS=0x...
NEXT_PUBLIC_UTILITIES_ADDRESS=0x...

# WalletConnect
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

## Project Structure

```
swift-dapp-frontend/
├── app/              # Next.js app router pages
├── components/       # React components
├── lib/             # Utilities and helpers
├── public/          # Static assets
└── package.json
```

## License

MIT
