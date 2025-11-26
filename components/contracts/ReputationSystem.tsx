import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Star } from 'lucide-react';

export function ReputationSystem() {
    const [isLoading, setIsLoading] = useState(false);

    const handleEndorse = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Reputation System
                </CardTitle>
                <CardDescription className="text-secondary-400">View and endorse user reputation scores.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="targetUser" className="text-sm font-medium text-secondary-200">User Address</label>
                    <Input id="targetUser" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="score" className="text-sm font-medium text-secondary-200">Endorsement Score</label>
                    <Input id="score" type="number" placeholder="1-100" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleEndorse} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Endorse User'}
                </Button>
            </CardFooter>
        </Card>
    );
}
