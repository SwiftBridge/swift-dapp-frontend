import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Network } from 'lucide-react';

export function CrossChainBridge() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBridge = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Network className="w-5 h-5" />
                    Cross-Chain Bridge
                </CardTitle>
                <CardDescription className="text-secondary-400">Transfer assets across blockchains.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="bridgeAmount" className="text-sm font-medium text-secondary-200">Amount to Bridge</label>
                    <Input id="bridgeAmount" placeholder="1.5" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="targetChain" className="text-sm font-medium text-secondary-200">Target Chain</label>
                    <Input id="targetChain" placeholder="Ethereum" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBridge} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Bridge Assets'}
                </Button>
            </CardFooter>
        </Card>
    );
}
