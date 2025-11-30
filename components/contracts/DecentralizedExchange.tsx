import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, ArrowLeftRight } from 'lucide-react';

export function DecentralizedExchange() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSwap = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5" />
                    Decentralized Exchange
                </CardTitle>
                <CardDescription className="text-secondary-400">Swap tokens instantly with best rates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="fromToken" className="text-sm font-medium text-secondary-200">From Token</label>
                    <Input id="fromToken" placeholder="ETH" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="toToken" className="text-sm font-medium text-secondary-200">To Token</label>
                    <Input id="toToken" placeholder="USDC" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSwap} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Swap Tokens'}
                </Button>
            </CardFooter>
        </Card>
    );
}
