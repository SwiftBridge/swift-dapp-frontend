import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, UserCircle } from 'lucide-react';

export function ProfileManager() {
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateProfile = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <UserCircle className="w-5 h-5" />
                    Profile Manager
                </CardTitle>
                <CardDescription className="text-secondary-400">Manage your decentralized identity and profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="username" className="text-sm font-medium text-secondary-200">Username</label>
                    <Input id="username" placeholder="Enter username" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium text-secondary-200">Bio</label>
                    <Input id="bio" placeholder="Tell us about yourself" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleUpdateProfile} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Update Profile'}
                </Button>
            </CardFooter>
        </Card>
    );
}
