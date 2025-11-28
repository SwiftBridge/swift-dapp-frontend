import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Shield } from 'lucide-react';

export function InsurancePool() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuyPolicy = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Insurance Pool
                </CardTitle>
                <CardDescription className="text-secondary-400">Purchase decentralized insurance coverage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="coverage" className="text-sm font-medium text-secondary-200">Coverage Amount (ETH)</label>
                    <Input id="coverage" placeholder="5.0" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="premium" className="text-sm font-medium text-secondary-200">Premium (ETH)</label>
                    <Input id="premium" placeholder="0.2" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBuyPolicy} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Buy Policy'}
                </Button>
            </CardFooter>
        </Card>
    );
}
