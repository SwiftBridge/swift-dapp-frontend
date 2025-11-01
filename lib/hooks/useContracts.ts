import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { CONTRACTS, FEES } from '../contracts';
import UserManagementABI from '../abis/UserManagement-full.json';
import SocialMessagingABI from '../abis/SocialMessaging-full.json';
import MessageStorageABI from '../abis/MessageStorage-full.json';
import NotificationSystemABI from '../abis/NotificationSystem-full.json';

// Extract just the ABI array from the full JSON
const extractABI = (fullJSON: any) => fullJSON.abi || fullJSON;

// User Management Hooks
export function useRegisterUser() {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const register = (username: string, bio: string, avatar: string) => {
    writeContract({
      address: CONTRACTS.UserManagement as `0x${string}`,
      abi: extractABI(UserManagementABI),
      functionName: 'registerUser',
      args: [username, bio, avatar],
      value: parseEther(FEES.registration),
    });
  };

  return { register, isPending, hash };
}

export function useGetUserProfile(address: `0x${string}` | undefined) {
  return useReadContract({
    address: CONTRACTS.UserManagement as `0x${string}`,
    abi: extractABI(UserManagementABI),
    functionName: 'getUserProfile',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });
}

// Social Messaging Hooks
export function useSendMessage() {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const sendMessage = (recipient: `0x${string}`, content: string) => {
    writeContract({
      address: CONTRACTS.SocialMessaging as `0x${string}`,
      abi: extractABI(SocialMessagingABI),
      functionName: 'sendMessage',
      args: [recipient, content],
      value: parseEther(FEES.message),
    });
  };

  return { sendMessage, isPending, hash };
}

export function useGetUserMessages(address: `0x${string}` | undefined) {
  return useReadContract({
    address: CONTRACTS.SocialMessaging as `0x${string}`,
    abi: extractABI(SocialMessagingABI),
    functionName: 'getUserMessages',
    args: address ? [address, BigInt(0), BigInt(50)] : undefined, // Get last 50 messages
    query: {
      enabled: !!address,
    },
  });
}

// Message Storage Hooks
export function useStoreMessage() {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const storeMessage = (ipfsHash: string, recipient: `0x${string}`) => {
    writeContract({
      address: CONTRACTS.MessageStorage as `0x${string}`,
      abi: extractABI(MessageStorageABI),
      functionName: 'storeMessage',
      args: [ipfsHash, recipient],
      value: parseEther(FEES.storage),
    });
  };

  return { storeMessage, isPending, hash };
}

// Notification Hooks
export function useSendNotification() {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const sendNotification = (
    recipient: `0x${string}`,
    title: string,
    message: string,
    notificationType: number
  ) => {
    writeContract({
      address: CONTRACTS.NotificationSystem as `0x${string}`,
      abi: extractABI(NotificationSystemABI),
      functionName: 'sendNotification',
      args: [recipient, title, message, notificationType],
      value: parseEther(FEES.notification),
    });
  };

  return { sendNotification, isPending, hash };
}

export function useGetUserNotifications(address: `0x${string}` | undefined) {
  return useReadContract({
    address: CONTRACTS.NotificationSystem as `0x${string}`,
    abi: extractABI(NotificationSystemABI),
    functionName: 'getUserNotifications',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });
}
