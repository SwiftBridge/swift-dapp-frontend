import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, TrendingUp } from 'lucide-react';

export function PredictionMarket() {
    const [isLoading, setIsLoading] = useState(false);

    const handlePlaceBet = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Prediction Market
                </CardTitle>
                <CardDescription className="text-secondary-400">Bet on future events and outcomes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="marketId" className="text-sm font-medium text-secondary-200">Market ID</label>
                    <Input id="marketId" placeholder="#5678" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="betAmount" className="text-sm font-medium text-secondary-200">Bet Amount (ETH)</label>
                    <Input id="betAmount" placeholder="0.1" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handlePlaceBet} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Place Bet'}
                </Button>
            </CardFooter>
        </Card>
    );
}
