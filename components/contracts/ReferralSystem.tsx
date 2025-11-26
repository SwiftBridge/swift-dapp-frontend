import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Share2 } from 'lucide-react';

export function ReferralSystem() {
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Referral System
                </CardTitle>
                <CardDescription className="text-secondary-400">Invite friends and earn rewards.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="code" className="text-sm font-medium text-secondary-200">Your Referral Code</label>
                    <div className="flex gap-2">
                        <Input id="code" value="REF-12345" readOnly className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                        <Button variant="outline" className="border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white">Copy</Button>
                    </div>
                </div>
                <div className="p-4 bg-secondary-900/50 rounded-lg">
                    <p className="text-sm text-secondary-400">Total Referrals</p>
                    <p className="text-2xl font-bold text-primary-400">12</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleGenerate} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Generate New Code'}
                </Button>
            </CardFooter>
        </Card>
    );
}
