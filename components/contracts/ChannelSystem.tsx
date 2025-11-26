import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Hash } from 'lucide-react';

export function ChannelSystem() {
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateChannel = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Hash className="w-5 h-5" />
                    Channel System
                </CardTitle>
                <CardDescription className="text-secondary-400">Create and manage public communication channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="channelName" className="text-sm font-medium text-secondary-200">Channel Name</label>
                    <Input id="channelName" placeholder="#general" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="topic" className="text-sm font-medium text-secondary-200">Topic</label>
                    <Input id="topic" placeholder="Discussion about..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleCreateChannel} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Channel'}
                </Button>
            </CardFooter>
        </Card>
    );
}
