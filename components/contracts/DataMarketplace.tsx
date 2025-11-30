import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Database } from 'lucide-react';

export function DataMarketplace() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSellData = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Marketplace
                </CardTitle>
                <CardDescription className="text-secondary-400">Monetize personal data with privacy-preserving tech.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="dataType" className="text-sm font-medium text-secondary-200">Data Type</label>
                    <Input id="dataType" placeholder="Health, Location, Browsing" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="pricePerAccess" className="text-sm font-medium text-secondary-200">Price per Access</label>
                    <Input id="pricePerAccess" placeholder="5 USDC" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSellData} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'List Data'}
                </Button>
            </CardFooter>
        </Card>
    );
}
