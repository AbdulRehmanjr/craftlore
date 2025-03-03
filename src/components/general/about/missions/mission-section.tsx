"use client";
import { useState } from "react";
import { MISSIONS } from "~/constants/data";
import { MissionCard } from "~/components/general/about/missions/misson-card";
import { useMissionStore } from "~/hooks/use-mission";
import { Container } from "~/components/common/container";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";

export const MissionSection = () => {
  const { mission, setMission } = useMissionStore();
  const [selectedMissionId, setSelectedMissionId] = useState<number>(MISSIONS[0]?.id ?? 0);

  const handleMissionSelect = (value: string) => {
    const numericValue = parseInt(value, 10);
    setSelectedMissionId(numericValue);
    const selectedMission = MISSIONS.find(m => m.id === numericValue);
    if (selectedMission) {
      setMission(selectedMission);
    }
  };

  return (
    <Container className="col-span-12 mt-12 gap-4">
      {/* Mobile: Only show dropdown */}
      <div className="md:hidden w-full max-w-md mx-auto mb-8">
        <h3 className="text-xl font-medium text-primary mb-2">Select a Mission</h3>
        <Select 
          value={selectedMissionId.toString()} 
          onValueChange={handleMissionSelect}
        >
          <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm border-primary">
            <SelectValue placeholder="Choose a mission" />
          </SelectTrigger>
          <SelectContent>
            {MISSIONS.map((missionItem) => (
              <SelectItem 
                key={missionItem.id} 
                value={missionItem.id.toString()}
              >
                {missionItem.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Original desktop layout - Hidden on mobile */}
      <Container className="relative -mt-36 hidden md:grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {MISSIONS.slice(0, 4).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </Container>
      
      {/* Mission display - Matching project section styles */}
      <Container className="my-32 grid gap-6">
        <h2 className="font-montserrat text-4xl text-primary lg:text-6xl">
          {mission.title}
        </h2>
        <p className="text-2xl">{mission.description}</p>
      </Container>
      
      {/* Original desktop layout - Hidden on mobile */}
      <Container className="relative -mb-36 hidden md:grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {MISSIONS.slice(4, 8).map((missionItem) => (
          <MissionCard
            className="col-span-1"
            title={missionItem.title}
            id={missionItem.id}
            description={missionItem.description}
            key={missionItem.id}
          />
        ))}
      </Container>
    </Container>
  );
};