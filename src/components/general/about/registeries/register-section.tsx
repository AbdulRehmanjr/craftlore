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
import { Container } from "~/components/common/container";

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
    <Container className="col-span-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 gap-4">
      {/* Mobile: Only show dropdown */}
      <div className="md:hidden w-full max-w-md mx-auto mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-medium text-primary mb-2">Select a Registry</h3>
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
      <div className="relative -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-36 hidden md:grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {REGISTRIES.slice(0, 4).map((registerItem) => (
          <RegisterCard
            className="col-span-1"
            title={registerItem.title}
            id={registerItem.id}
            description={registerItem.description}
            key={registerItem.id}
          />
        ))}
      </div>
      
      {/* Registry display */}
      <div className="my-8 sm:my-12 md:my-20 lg:my-32 grid gap-4 sm:gap-5 md:gap-6">
        <h6 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight">
          {register.title}
        </h6>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">{register.description}</p>
      </div>
      
      {/* Original desktop layout - Hidden on mobile */}
      <div className="relative -mb-24 sm:-mb-28 md:-mb-32 lg:-mb-36 hidden md:grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {REGISTRIES.slice(4, 8).map((registerItem) => (
          <RegisterCard
            className="col-span-1"
            title={registerItem.title}
            id={registerItem.id}
            description={registerItem.description}
            key={registerItem.id}
          />
        ))}
      </div>
    </Container>
  );
};