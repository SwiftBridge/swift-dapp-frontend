import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, BarChart2 } from 'lucide-react';

export function Leaderboard() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRefresh = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5" />
                    Leaderboard
                </CardTitle>
                <CardDescription className="text-secondary-400">View top performers and rankings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="period" className="text-sm font-medium text-secondary-200">Time Period</label>
                    <select id="period" className="w-full px-3 py-2 bg-secondary-900 border border-secondary-600 rounded-lg text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>All Time</option>
                    </select>
                </div>
                <div className="p-4 bg-secondary-900/50 rounded-lg">
                    <p className="text-sm text-secondary-400">Your Rank</p>
                    <p className="text-2xl font-bold text-primary-400">#42</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRefresh} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Refresh Rankings'}
                </Button>
            </CardFooter>
        </Card>
    );
}
