import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, ShieldCheck } from 'lucide-react';

export function SimpleEscrow() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDeposit = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    Simple Escrow
                </CardTitle>
                <CardDescription className="text-secondary-400">Secure transactions with trustless escrow.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="counterparty" className="text-sm font-medium text-secondary-200">Counterparty Address</label>
                    <Input id="counterparty" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="amount" className="text-sm font-medium text-secondary-200">Amount (ETH)</label>
                    <Input id="amount" placeholder="1.0" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleDeposit} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Deposit to Escrow'}
                </Button>
            </CardFooter>
        </Card>
    );
}
