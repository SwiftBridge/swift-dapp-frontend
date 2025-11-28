import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Send } from 'lucide-react';

export function RemittanceService() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSendRemittance = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Remittance Service
                </CardTitle>
                <CardDescription className="text-secondary-400">Send cross-border payments with low fees.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="recipient" className="text-sm font-medium text-secondary-200">Recipient Phone</label>
                    <Input id="recipient" placeholder="+1234567890" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="amount" className="text-sm font-medium text-secondary-200">Amount (cUSD)</label>
                    <Input id="amount" placeholder="100.00" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSendRemittance} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Remittance'}
                </Button>
            </CardFooter>
        </Card>
    );
}
