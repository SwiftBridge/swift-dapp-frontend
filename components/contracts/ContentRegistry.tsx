import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, FileText } from 'lucide-react';

export function ContentRegistry() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Content Registry
                </CardTitle>
                <CardDescription className="text-secondary-400">Register and verify digital content ownership.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="hash" className="text-sm font-medium text-secondary-200">Content Hash (IPFS)</label>
                    <Input id="hash" placeholder="Qm..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium text-secondary-200">Content Title</label>
                    <Input id="title" placeholder="My Awesome Article" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRegister} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Register Content'}
                </Button>
            </CardFooter>
        </Card>
    );
}
