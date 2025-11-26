import { DirectMessage } from './contracts/DirectMessage';
import { ChannelSystem } from './contracts/ChannelSystem';
import { ProfileManager } from './contracts/ProfileManager';
import { ReputationSystem } from './contracts/ReputationSystem';
import { StakingRewards } from './contracts/StakingRewards';
import { TokenSwap } from './contracts/TokenSwap';
import { NFTGallery } from './contracts/NFTGallery';
import { SubscriptionService } from './contracts/SubscriptionService';
import { Marketplace } from './contracts/Marketplace';
import { AuctionHouse } from './contracts/AuctionHouse';
import { Crowdfund } from './contracts/Crowdfund';
import { VestingWallet } from './contracts/VestingWallet';
import { ReferralSystem } from './contracts/ReferralSystem';
import { AchievementSystem } from './contracts/AchievementSystem';
import { Leaderboard } from './contracts/Leaderboard';
import { DAOVoting } from './contracts/DAOVoting';
import { SimpleEscrow } from './contracts/SimpleEscrow';
import { GiftCard } from './contracts/GiftCard';
import { LoyaltyProgram } from './contracts/LoyaltyProgram';
import { ContentRegistry } from './contracts/ContentRegistry';

export function ContractExplorer() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-white">Smart Contract Explorer</h2>
                <p className="text-secondary-400">Interact with the full suite of Swift v2 smart contracts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <DirectMessage />
                <ChannelSystem />
                <ProfileManager />
                <ReputationSystem />
                <StakingRewards />
                <TokenSwap />
                <NFTGallery />
                <SubscriptionService />
                <Marketplace />
                <AuctionHouse />
                <Crowdfund />
                <VestingWallet />
                <ReferralSystem />
                <AchievementSystem />
                <Leaderboard />
                <DAOVoting />
                <SimpleEscrow />
                <GiftCard />
                <LoyaltyProgram />
                <ContentRegistry />
            </div>
        </div>
    );
}
