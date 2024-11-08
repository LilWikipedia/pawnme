import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, Calculator, Coins } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [itemValue, setItemValue] = useState("");
  const [pawnValue, setPawnValue] = useState<number | null>(null);
  const { toast } = useToast();

  const calculatePawnValue = () => {
    const value = parseFloat(itemValue);
    
    if (isNaN(value) || value <= 0) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid positive number",
        variant: "destructive",
      });
      return;
    }

    const calculatedValue = value * 0.2;
    setPawnValue(calculatedValue);
    
    toast({
      title: "Calculation complete!",
      description: "See your estimated pawn value below.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-start p-4 gap-6">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-2">
            <Coins className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            PawnMe Calculator
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Enter Item Value ($)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                type="number"
                placeholder="100"
                className="pl-10"
                value={itemValue}
                onChange={(e) => setItemValue(e.target.value)}
              />
            </div>
          </div>

          <Button 
            onClick={calculatePawnValue}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Pawn Value
          </Button>

          {pawnValue !== null && (
            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <p className="text-center text-gray-700">Estimated Pawn Value:</p>
              <p className="text-center text-3xl font-bold text-purple-600">
                ${pawnValue.toFixed(2)}
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          Pawn value is estimated at 20% of item value
        </CardFooter>
      </Card>

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl">
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            Use filters to query <span className="font-bold">Completed</span> and <span className="font-bold">Sold</span> listings, and use those prices.
          </p>
          <Button 
            className="w-full"
            onClick={() => window.open('https://www.ebay.com', '_blank')}
          >
            Open eBay in New Tab
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;