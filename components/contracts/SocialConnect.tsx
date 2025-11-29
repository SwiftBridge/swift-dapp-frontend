import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, UserCheck } from 'lucide-react';

export function SocialConnect() {
    const [isLoading, setIsLoading] = useState(false);

    const handleLinkPhone = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <UserCheck className="w-5 h-5" />
                    SocialConnect
                </CardTitle>
                <CardDescription className="text-secondary-400">Link your phone number to your wallet address.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="text-sm font-medium text-secondary-200">Phone Number</label>
                    <Input id="phoneNumber" placeholder="+1234567890" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="verificationCode" className="text-sm font-medium text-secondary-200">Verification Code</label>
                    <Input id="verificationCode" placeholder="123456" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleLinkPhone} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Link Phone Number'}
                </Button>
            </CardFooter>
        </Card>
    );
}
