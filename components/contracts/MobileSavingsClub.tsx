import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, PiggyBank } from 'lucide-react';

export function MobileSavingsClub() {
    const [isLoading, setIsLoading] = useState(false);

    const handleJoinClub = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    Mobile Savings Club
                </CardTitle>
                <CardDescription className="text-secondary-400">Join rotating savings and credit groups.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="clubId" className="text-sm font-medium text-secondary-200">Club ID</label>
                    <Input id="clubId" placeholder="CLUB-123" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="monthlyContribution" className="text-sm font-medium text-secondary-200">Monthly Contribution (cUSD)</label>
                    <Input id="monthlyContribution" placeholder="10.00" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleJoinClub} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Join Savings Club'}
                </Button>
            </CardFooter>
        </Card>
    );
}
