import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, HandCoins } from 'lucide-react';

export function MicroLending() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRequestLoan = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <HandCoins className="w-5 h-5" />
                    Micro Lending
                </CardTitle>
                <CardDescription className="text-secondary-400">Access small loans for financial inclusion.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="loanAmount" className="text-sm font-medium text-secondary-200">Loan Amount (cUSD)</label>
                    <Input id="loanAmount" placeholder="50.00" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="repaymentPeriod" className="text-sm font-medium text-secondary-200">Repayment Period (days)</label>
                    <Input id="repaymentPeriod" placeholder="30" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRequestLoan} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Request Loan'}
                </Button>
            </CardFooter>
        </Card>
    );
}
