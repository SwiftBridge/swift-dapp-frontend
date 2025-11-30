import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Waves } from 'lucide-react';

export function LiquidStaking() {
    const [isLoading, setIsLoading] = useState(false);

    const handleStake = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Waves className="w-5 h-5" />
                    Liquid Staking
                </CardTitle>
                <CardDescription className="text-secondary-400">Stake tokens and receive liquid derivatives.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="stakeAmount" className="text-sm font-medium text-secondary-200">Amount to Stake (ETH)</label>
                    <Input id="stakeAmount" placeholder="10.0" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="derivative" className="text-sm font-medium text-secondary-200">Receive</label>
                    <Input id="derivative" placeholder="stETH" disabled className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleStake} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Liquid Stake'}
                </Button>
            </CardFooter>
        </Card>
    );
}
