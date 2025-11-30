import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, TrendingUp } from 'lucide-react';

export function AutomatedPortfolio() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRebalance = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Automated Portfolio
                </CardTitle>
                <CardDescription className="text-secondary-400">AI-powered automated portfolio rebalancing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="riskProfile" className="text-sm font-medium text-secondary-200">Risk Profile</label>
                    <Input id="riskProfile" placeholder="Conservative" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="targetAllocation" className="text-sm font-medium text-secondary-200">Target Allocation</label>
                    <Input id="targetAllocation" placeholder="60/30/10" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRebalance} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Rebalance Now'}
                </Button>
            </CardFooter>
        </Card>
    );
}
