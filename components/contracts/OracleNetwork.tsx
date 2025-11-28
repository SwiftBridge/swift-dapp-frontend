import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Radio } from 'lucide-react';

export function OracleNetwork() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRequestData = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Radio className="w-5 h-5" />
                    Oracle Network
                </CardTitle>
                <CardDescription className="text-secondary-400">Request real-world data feeds.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="dataType" className="text-sm font-medium text-secondary-200">Data Type</label>
                    <Input id="dataType" placeholder="ETH/USD Price" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="fee" className="text-sm font-medium text-secondary-200">Oracle Fee (ETH)</label>
                    <Input id="fee" placeholder="0.001" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRequestData} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Request Data'}
                </Button>
            </CardFooter>
        </Card>
    );
}
