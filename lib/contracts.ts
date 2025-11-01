// Deployed Contract Addresses on Base Mainnet
export const CONTRACTS = {
  Utilities: '0x563189169363AC89654d68576b2aD1a3198245aB',
  MessageStorage: '0xc9Ac621eF1c1a86bdf97cEF8152c15bf94b4b74c',
  NotificationSystem: '0xd2FC8FD022EEC157bCe8cd06C24b5E7329ae82bC',
  BatchTransactions: '0x9C87d2170a542870FbC02Fa1ddf5C92De43cC9b7',
  UserManagement: '0xBa86EB88dDBFA259422edBc4F9338A6ad99B28B3',
  SocialMessaging: '0xb0CbEc09efa8d6aD61Eb1adc107C64c4ec710fe6',
} as const;

export const NETWORK_CONFIG = {
  chainId: 8453,
  name: 'Base Mainnet',
  rpcUrl: 'https://mainnet.base.org',
  blockExplorer: 'https://basescan.org',
} as const;

export const FEES = {
  message: '0.000003',
  registration: '0.000003',
  verification: '0.000003',
  storage: '0.000003',
  notification: '0.000003',
  batchExecution: '0.000003',
} as const;
