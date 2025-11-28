import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Clock } from 'lucide-react';

export function TimeLock() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLock = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Time Lock
                </CardTitle>
                <CardDescription className="text-secondary-400">Lock tokens for a specified time period.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="lockAmount" className="text-sm font-medium text-secondary-200">Amount to Lock</label>
                    <Input id="lockAmount" placeholder="1000" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lockDuration" className="text-sm font-medium text-secondary-200">Lock Duration (days)</label>
                    <Input id="lockDuration" placeholder="30" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleLock} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Lock Tokens'}
                </Button>
            </CardFooter>
        </Card>
    );
}
