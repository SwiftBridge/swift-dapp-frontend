import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Leaf } from 'lucide-react';

export function CarbonCredits() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuyCredits = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Carbon Credits
                </CardTitle>
                <CardDescription className="text-secondary-400">Trade verified carbon offset credits.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="creditAmount" className="text-sm font-medium text-secondary-200">Credits (tons CO2)</label>
                    <Input id="creditAmount" placeholder="10" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium text-secondary-200">Price per Credit (ETH)</label>
                    <Input id="price" placeholder="0.01" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBuyCredits} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Buy Credits'}
                </Button>
            </CardFooter>
        </Card>
    );
}
