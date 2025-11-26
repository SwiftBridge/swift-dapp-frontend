import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Vote } from 'lucide-react';

export function DAOVoting() {
    const [isLoading, setIsLoading] = useState(false);

    const handleVote = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Vote className="w-5 h-5" />
                    DAO Voting
                </CardTitle>
                <CardDescription className="text-secondary-400">Participate in governance and decision making.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="proposal" className="text-sm font-medium text-secondary-200">Proposal ID</label>
                    <Input id="proposal" placeholder="#PROP-123" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary-200">Your Vote</label>
                    <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 border-green-600 text-green-400 hover:bg-green-600 hover:text-white">For</Button>
                        <Button variant="outline" className="flex-1 border-red-600 text-red-400 hover:bg-red-600 hover:text-white">Against</Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleVote} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit Vote'}
                </Button>
            </CardFooter>
        </Card>
    );
}
