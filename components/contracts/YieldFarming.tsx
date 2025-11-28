import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Sprout } from 'lucide-react';

export function YieldFarming() {
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
                    <Sprout className="w-5 h-5" />
                    Yield Farming
                </CardTitle>
                <CardDescription className="text-secondary-400">Stake LP tokens and farm rewards.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="lpAmount" className="text-sm font-medium text-secondary-200">LP Token Amount</label>
                    <Input id="lpAmount" placeholder="50" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="pool" className="text-sm font-medium text-secondary-200">Pool Name</label>
                    <Input id="pool" placeholder="ETH-USDC" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleStake} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Stake LP Tokens'}
                </Button>
            </CardFooter>
        </Card>
    );
}
