import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, Award } from 'lucide-react';

export function LoyaltyProgram() {
    const [isLoading, setIsLoading] = useState(false);

    const handleRedeem = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    };

    return (
        <Card className="w-full h-full bg-secondary-800 border-secondary-700 flex flex-col">
            <CardHeader>
                <CardTitle className="text-primary-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Loyalty Program
                </CardTitle>
                <CardDescription className="text-secondary-400">Earn points and redeem exclusive rewards.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <div className="p-4 bg-secondary-900/50 rounded-lg mb-4">
                    <p className="text-sm text-secondary-400">Your Points</p>
                    <p className="text-2xl font-bold text-primary-400">2,450 PTS</p>
                </div>
                <div className="space-y-2">
                    <label htmlFor="reward" className="text-sm font-medium text-secondary-200">Reward ID</label>
                    <Input id="reward" placeholder="REW-500" className="bg-secondary-900 border-secondary-600 text-secondary-100" />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleRedeem} disabled={isLoading} className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Redeem Points'}
                </Button>
            </CardFooter>
        </Card>
    );
}
