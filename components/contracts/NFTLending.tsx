import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Image } from 'lucide-react';

export function NFTLending() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBorrow = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Image className="w-5 h-5" />
                    NFT Lending
                </CardTitle>
                <CardDescription className="text-secondary-400">Borrow funds using NFTs as collateral.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="space-y-2">
                    <label htmlFor="nftContract" className="text-sm font-medium text-secondary-200">NFT Collection</label>
                    <Input id="nftContract" placeholder="0x..." className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="tokenId" className="text-sm font-medium text-secondary-200">Token ID</label>
                    <Input id="tokenId" placeholder="1234" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleBorrow} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Borrow Against NFT'}
                </Button>
            </CardFooter>
        </Card>
    );
}
