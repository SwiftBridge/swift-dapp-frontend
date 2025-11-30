import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Fingerprint } from 'lucide-react';

export function DecentralizedIdentity() {
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateDID = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Fingerprint className="w-5 h-5" />
                    Decentralized Identity
                </CardTitle>
                <CardDescription className="text-secondary-400">Self-sovereign identity with verifiable credentials.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="didName" className="text-sm font-medium text-secondary-200">DID Name</label>
                    <Input id="didName" placeholder="alice.eth" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="credentialType" className="text-sm font-medium text-secondary-200">Credential Type</label>
                    <Input id="credentialType" placeholder="KYC, Education" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleCreateDID} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create DID'}
                </Button>
            </CardFooter>
        </Card>
    );
}
