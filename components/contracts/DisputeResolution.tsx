import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, MessageSquare } from 'lucide-react';

export function DisputeResolution() {
    const [isLoading, setIsLoading] = useState(false);

    const handleFileDispute = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Dispute Resolution
                </CardTitle>
                <CardDescription className="text-secondary-400">Resolve conflicts through arbitration.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="caseId" className="text-sm font-medium text-secondary-200">Case ID</label>
                    <Input id="caseId" placeholder="CASE-789" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="stake" className="text-sm font-medium text-secondary-200">Stake Amount (ETH)</label>
                    <Input id="stake" placeholder="0.5" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleFileDispute} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'File Dispute'}
                </Button>
            </CardFooter>
        </Card>
    );
}
