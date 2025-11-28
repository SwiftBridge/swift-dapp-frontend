import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Building2 } from 'lucide-react';

export function RealEstateToken() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuyShares = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Real Estate Token
                </CardTitle>
                <CardDescription className="text-secondary-400">Invest in tokenized real estate properties.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="propertyId" className="text-sm font-medium text-secondary-200">Property ID</label>
                    <Input id="propertyId" placeholder="PROP-456" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="shares" className="text-sm font-medium text-secondary-200">Number of Shares</label>
                    <Input id="shares" placeholder="10" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBuyShares} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Buy Shares'}
                </Button>
            </CardFooter>
        </Card>
    );
}
