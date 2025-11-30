import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Shield } from 'lucide-react';

export function SocialRecoveryWallet() {
    const [isLoading, setIsLoading] = useState(false);

    const handleAddGuardian = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Social Recovery Wallet
                </CardTitle>
                <CardDescription className="text-secondary-400">Recover wallet access via trusted guardians.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="guardianAddress" className="text-sm font-medium text-secondary-200">Guardian Address</label>
                    <Input id="guardianAddress" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="threshold" className="text-sm font-medium text-secondary-200">Recovery Threshold</label>
                    <Input id="threshold" placeholder="3 of 5" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleAddGuardian} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Add Guardian'}
                </Button>
            </CardFooter>
        </Card>
    );
}
