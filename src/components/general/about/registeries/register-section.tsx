"use client";
import { useState } from "react";
import { REGISTRIES } from "~/constants/data";
import { useRegister } from "~/hooks/use-register";
import { RegisterCard } from "~/components/general/about/registeries/register-card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";

export const RegisterSection = () => {
  const { register, setRegister } = useRegister();
  const [selectedRegisterId, setSelectedRegisterId] = useState<number>(REGISTRIES[0]?.id ?? 0);

  const handleRegisterSelect = (value: string) => {
    const numericValue = parseInt(value, 10);
    setSelectedRegisterId(numericValue);
    const selectedRegister = REGISTRIES.find(r => r.id === numericValue);
    if (selectedRegister) {
      setRegister(selectedRegister);
    }
  };

  return (
    <section className="col-span-12 mx-6 mt-12 gap-4 lg:container">
      {/* Mobile: Only show dropdown */}
      <div className="md:hidden w-full max-w-md mx-auto mb-8">
        <h3 className="text-xl font-medium text-primary mb-2">Select a Registry</h3>
        <Select 
          value={selectedRegisterId.toString()} 
          onValueChange={handleRegisterSelect}
        >
          <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm border-primary">
            <SelectValue placeholder="Choose a registry" />
          </SelectTrigger>
          <SelectContent>
            {REGISTRIES.map((registerItem) => (
              <SelectItem 
                key={registerItem.id} 
                value={registerItem.id.toString()}
              >
                {registerItem.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Original desktop layout - Hidden on mobile */}
      <div className="relative -mt-36 hidden md:grid grid-cols-4 gap-7">
        {REGISTRIES.slice(0, 4).map((registerItem) => (
          <RegisterCard
            className="col-span-2 lg:col-span-1"
            title={registerItem.title}
            id={registerItem.id}
            description={registerItem.description}
            key={registerItem.id}
          />
        ))}
      </div>
      
      {/* Registry display */}
      <div className="my-32 grid gap-6">
        <h6 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {register.title}
        </h6>
        <p className="text-2xl">{register.description}</p>
      </div>
      
      {/* Original desktop layout - Hidden on mobile */}
      <div className="relative -mb-36 hidden md:grid grid-cols-4 gap-7">
        {REGISTRIES.slice(4, 8).map((registerItem) => (
          <RegisterCard
            className="col-span-2 lg:col-span-1"
            title={registerItem.title}
            id={registerItem.id}
            description={registerItem.description}
            key={registerItem.id}
          />
        ))}
      </div>
    </section>
  );
};