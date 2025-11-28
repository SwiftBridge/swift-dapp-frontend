import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Music } from 'lucide-react';

export function MusicRoyalty() {
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
                    Music Royalty
                </CardTitle>
                <CardDescription className="text-secondary-400">Distribute music royalties to artists.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="trackId" className="text-sm font-medium text-secondary-200">Track ID</label>
                    <Input id="trackId" placeholder="TRK-001" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="royaltyAmount" className="text-sm font-medium text-secondary-200">Royalty Amount (ETH)</label>
                    <Input id="royaltyAmount" placeholder="0.1" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
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
