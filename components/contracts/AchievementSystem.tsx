import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Trophy } from 'lucide-react';

export function AchievementSystem() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClaim = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Achievement System
                </CardTitle>
                <CardDescription className="text-secondary-400">Track progress and claim rewards.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="achievement" className="text-sm font-medium text-secondary-200">Achievement ID</label>
                    <Input id="achievement" placeholder="ACH-001" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="p-4 bg-secondary-900/50 rounded-lg">
                    <p className="text-sm text-secondary-400">Status</p>
                    <p className="text-lg font-bold text-green-400">Completed</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleClaim} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Claim Reward'}
                </Button>
            </CardFooter>
        </Card>
    );
}
