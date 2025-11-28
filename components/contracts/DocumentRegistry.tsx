import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, FileText } from 'lucide-react';

export function DocumentRegistry() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRegisterDoc = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Document Registry
                </CardTitle>
                <CardDescription className="text-secondary-400">Register and verify documents on-chain.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="docHash" className="text-sm font-medium text-secondary-200">Document Hash</label>
                    <Input id="docHash" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="docName" className="text-sm font-medium text-secondary-200">Document Name</label>
                    <Input id="docName" placeholder="Contract-2024.pdf" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRegisterDoc} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register Document'}
                </Button>
            </CardFooter>
        </Card>
    );
}
