import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Phone } from 'lucide-react';

export function PhoneNumberWallet() {
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateWallet = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Phone Number Wallet
                </CardTitle>
                <CardDescription className="text-secondary-400">Create a wallet using only your phone number.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm font-medium text-secondary-200">Phone Number</label>
                    <Input id="phoneNumber" placeholder="+1234567890" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="pin" className="text-sm font-medium text-secondary-200">Security PIN</label>
                    <Input id="pin" type="password" placeholder="****" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleCreateWallet} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Wallet'}
                </Button>
            </CardFooter>
        </Card>
    );
}
