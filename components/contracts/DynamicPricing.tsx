import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, BarChart3 } from 'lucide-react';

export function DynamicPricing() {
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdatePrice = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Dynamic Pricing
                </CardTitle>
                <CardDescription className="text-secondary-400">Adjust prices based on market conditions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="productId" className="text-sm font-medium text-secondary-200">Product ID</label>
                    <Input id="productId" placeholder="PROD-789" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="newPrice" className="text-sm font-medium text-secondary-200">New Price (ETH)</label>
                    <Input id="newPrice" placeholder="0.25" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleUpdatePrice} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Update Price'}
                </Button>
            </CardFooter>
        </Card>
    );
}
