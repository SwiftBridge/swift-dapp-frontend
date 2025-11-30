import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Scale } from 'lucide-react';

export function GovernanceToken() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelegate = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Governance Token
                </CardTitle>
                <CardDescription className="text-secondary-400">Delegate voting power and participate in governance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="delegateAddress" className="text-sm font-medium text-secondary-200">Delegate To</label>
                    <Input id="delegateAddress" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="votingPower" className="text-sm font-medium text-secondary-200">Voting Power</label>
                    <Input id="votingPower" placeholder="1000 tokens" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleDelegate} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Delegate Votes'}
                </Button>
            </CardFooter>
        </Card>
    );
}
