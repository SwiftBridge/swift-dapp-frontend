import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Lock } from 'lucide-react';

export function VestingWallet() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRelease = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Vesting Wallet
                </CardTitle>
                <CardDescription className="text-secondary-400">Manage vested tokens and release schedules.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="beneficiary" className="text-sm font-medium text-secondary-200">Beneficiary Address</label>
                    <Input id="beneficiary" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="p-4 bg-secondary-900/50 rounded-lg">
                    <p className="text-sm text-secondary-400">Available to Release</p>
                    <p className="text-2xl font-bold text-primary-400">1,250 TKN</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRelease} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Release Tokens'}
                </Button>
            </CardFooter>
        </Card>
    );
}
