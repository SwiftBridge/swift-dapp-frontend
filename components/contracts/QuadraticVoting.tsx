import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Vote } from 'lucide-react';

export function QuadraticVoting() {
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
                    Quadratic Voting
                </CardTitle>
                <CardDescription className="text-secondary-400">Vote using quadratic funding mechanism.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="proposalId" className="text-sm font-medium text-secondary-200">Proposal ID</label>
                    <Input id="proposalId" placeholder="PROP-123" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="votes" className="text-sm font-medium text-secondary-200">Vote Credits</label>
                    <Input id="votes" placeholder="25" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleVote} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Cast Vote'}
                </Button>
            </CardFooter>
        </Card>
    );
}
