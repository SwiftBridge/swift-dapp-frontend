import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Zap } from 'lucide-react';

export function ChainlinkAutomation() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Chainlink Automation
                </CardTitle>
                <CardDescription className="text-secondary-400">Decentralized keeper network for automated tasks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="taskName" className="text-sm font-medium text-secondary-200">Task Name</label>
                    <Input id="taskName" placeholder="Daily Rebalance" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="interval" className="text-sm font-medium text-secondary-200">Interval</label>
                    <Input id="interval" placeholder="Every 24h" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRegister} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register Task'}
                </Button>
            </CardFooter>
        </Card>
    );
}
