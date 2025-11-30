import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Music } from 'lucide-react';

export function StreamingRoyalties() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDistribute = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Music className="w-5 h-5" />
                    Streaming Royalties
                </CardTitle>
                <CardDescription className="text-secondary-400">Real-time royalty distribution for content creators.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="contentId" className="text-sm font-medium text-secondary-200">Content ID</label>
                    <Input id="contentId" placeholder="track-12345" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="splitRatio" className="text-sm font-medium text-secondary-200">Split Ratio</label>
                    <Input id="splitRatio" placeholder="70/15/15" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleDistribute} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Distribute Royalties'}
                </Button>
            </CardFooter>
        </Card>
    );
}
