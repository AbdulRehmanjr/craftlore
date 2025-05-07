import { MapPin, Building2, Mail, User, Clock } from "lucide-react";
import { useCallback } from "react";
import { cn } from "~/lib/utils";

type User = {
  fullName: string;
  address: string;
};

type Institute = {
  user: User;
  instituteType: string;
  instituteEmail: string;
  instituteRep: string;
  instituteMission: string;
  repDes: string;
  yearOfOperation?: number;
};

type InstituteCardProps = {
  rankTitle: string;
  rankingColor: string;
  institute: Institute;
};

export const InstituteCard = ({
  rankTitle,
  rankingColor,
  institute,
}: InstituteCardProps) => {
  const getInstituteType = useCallback((level: string) => {
    switch (level) {
      case "None":
        return "None";
      case "Governance":
        return "Governance";
      case "NGO":
        return "NGO";
      case "Training_Body":
        return "Training Body";
      case "Educational_Body":
        return "Educational Body";
      default:
        return "Unknown";
    }
  }, []);

  return (
    <article
      className="group relative overflow-hidden rounded-xl border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Corner badge */}
      <div
        className={cn(
          "absolute right-0 top-0 rounded-bl-lg px-4 py-1 font-medium",
          rankingColor,
        )}
      >
        {rankTitle}
      </div>

      {/* Card content */}
      <div className="p-6 pt-8">
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-bold text-gray-800 transition-colors group-hover:text-primary">
            {institute.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            <p className="text-sm">{institute.user.address}</p>
          </div>
        </div>

        {/* Responsive two-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          <div className="flex items-center text-gray-700">
            <Building2 className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Institute Type</p>
              <p className="text-sm">
                {getInstituteType(institute.instituteType)}
              </p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Mail className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm">{institute.instituteEmail}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <User className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Representative</p>
              <p className="text-sm">
                {institute.instituteRep}{" "}
                <span className="text-gray-500">• {institute.repDes}</span>
              </p>
            </div>
          </div>

          {institute.yearOfOperation && (
            <div className="flex items-center text-gray-700">
              <Clock className="mr-3 h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-semibold">Years Active</p>
                <p className="text-sm">{institute.yearOfOperation} years</p>
              </div>
            </div>
          )}

          {/* Mission Field with Enhanced Icon - spans full width on all screen sizes */}
          <div className="flex items-start text-gray-700 col-span-1 sm:col-span-2">
            <div className="flex-shrink-0 mr-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
                <path d="M4 16l8-8 8 8"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold">Mission</p>
              <p className="text-sm">{institute.instituteMission}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};