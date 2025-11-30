import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, TrendingUp } from 'lucide-react';

export function LiquidityMining() {
    const [isLoading, setIsLoading] = useState(false);

    const handleMine = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Liquidity Mining
                </CardTitle>
                <CardDescription className="text-secondary-400">Earn rewards by providing liquidity to pools.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="poolName" className="text-sm font-medium text-secondary-200">Pool Name</label>
                    <Input id="poolName" placeholder="USDC-ETH" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="depositAmount" className="text-sm font-medium text-secondary-200">LP Token Amount</label>
                    <Input id="depositAmount" placeholder="100" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleMine} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Start Mining'}
                </Button>
            </CardFooter>
        </Card>
    );
}
