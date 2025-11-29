import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, LineChart } from 'lucide-react';

export function DerivativesTrading() {
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenPosition = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    Derivatives Trading
                </CardTitle>
                <CardDescription className="text-secondary-400">Trade perpetual futures and options contracts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="pair" className="text-sm font-medium text-secondary-200">Trading Pair</label>
                    <Input id="pair" placeholder="BTC-PERP" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="leverage" className="text-sm font-medium text-secondary-200">Leverage (x)</label>
                    <Input id="leverage" placeholder="10" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleOpenPosition} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Open Position'}
                </Button>
            </CardFooter>
        </Card>
    );
}
