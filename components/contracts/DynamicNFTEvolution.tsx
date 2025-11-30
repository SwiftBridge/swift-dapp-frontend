import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles } from 'lucide-react';

export function DynamicNFTEvolution() {
    const [isLoading, setIsLoading] = useState(false);

    const handleEvolve = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Dynamic NFT Evolution
                </CardTitle>
                <CardDescription className="text-secondary-400">NFTs that evolve based on on-chain activity and time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="nftId" className="text-sm font-medium text-secondary-200">NFT Token ID</label>
                    <Input id="nftId" placeholder="12345" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-secondary-200">Experience Points</label>
                    <Input id="experience" placeholder="500 XP" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleEvolve} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Evolve NFT'}
                </Button>
            </CardFooter>
        </Card>
    );
}
