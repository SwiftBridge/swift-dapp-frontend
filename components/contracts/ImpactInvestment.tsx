import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Target } from 'lucide-react';

export function ImpactInvestment() {
    const [isLoading, setIsLoading] = useState(false);

    const handleInvest = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Impact Investment
                </CardTitle>
                <CardDescription className="text-secondary-400">Invest in social enterprises and track impact metrics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="enterpriseId" className="text-sm font-medium text-secondary-200">Enterprise ID</label>
                    <Input id="enterpriseId" placeholder="ENT-456" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="investmentAmount" className="text-sm font-medium text-secondary-200">Investment (cUSD)</label>
                    <Input id="investmentAmount" placeholder="1000.00" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleInvest} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Make Investment'}
                </Button>
            </CardFooter>
        </Card>
    );
}
