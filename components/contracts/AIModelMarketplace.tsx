import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Brain } from 'lucide-react';

export function AIModelMarketplace() {
    const [isLoading, setIsLoading] = useState(false);

    const handleListModel = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI Model Marketplace
                </CardTitle>
                <CardDescription className="text-secondary-400">Trade and monetize AI models with usage-based payment.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="modelName" className="text-sm font-medium text-secondary-200">Model Name</label>
                    <Input id="modelName" placeholder="GPT-Vision-v2" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="pricePerInference" className="text-sm font-medium text-secondary-200">Price per Inference</label>
                    <Input id="pricePerInference" placeholder="0.001 USDC" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleListModel} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'List Model'}
                </Button>
            </CardFooter>
        </Card>
    );
}
