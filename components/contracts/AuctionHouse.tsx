import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Gavel } from 'lucide-react';

export function AuctionHouse() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBid = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Gavel className="w-5 h-5" />
                    Auction House
                </CardTitle>
                <CardDescription className="text-secondary-400">Bid on exclusive items in real-time auctions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="auctionId" className="text-sm font-medium text-secondary-200">Auction ID</label>
                    <Input id="auctionId" placeholder="#1234" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="bid" className="text-sm font-medium text-secondary-200">Bid Amount (ETH)</label>
                    <Input id="bid" placeholder="0.5" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBid} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Place Bid'}
                </Button>
            </CardFooter>
        </Card>
    );
}
