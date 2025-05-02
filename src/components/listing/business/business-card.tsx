import {
  MapPin,
  Briefcase,
  Building2,
  Mail,
  Users,
  Calendar,
  Globe,
  Network,
  FileText
} from "lucide-react";
import { useCallback } from "react";
import { cn } from "~/lib/utils";

type BusinessCardProps = {
  rankingColor: string;
  rankTitle: string;
  business: {
    user: {
      fullName: string;
      address: string;
    };
    businessType: string;
    businessEmail: string;
    businessEmployee: number;
    businessMarket: string;
    businessStructure: string;
    businessWebsite: string;
    businessNetwork: string;
    yearOfOperation: number;
  };
};

export const BusinessCard: React.FC<BusinessCardProps> = ({
  rankingColor,
  rankTitle,
  business,
}) => {
  const getBusiness = useCallback((level: string) => {
    switch (level) {
      case "None":
        return "None";
      case "Large_Enterprice":
        return "Large Enterprice";
      case "Mid_sized_Business":
        return "Mid sized Business";
      case "Small_Business":
        return "Small Business";
      case "Startup":
        return "Startup";
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
          "absolute right-0 top-0 rounded-bl-lg px-4 py-1 font-medium text-gray-800",
          rankingColor,
        )}
      >
        {rankTitle}
      </div>

      {/* Card content */}
      <div className="space-y-4 p-6 pt-8">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800 transition-colors group-hover:text-primary">
            {business.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            <p className="text-sm">{business.user.address}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center text-gray-700">
            <Building2 className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Business Type</p>
              <p className="text-sm">{getBusiness(business.businessType)}</p>
            </div>
          </div>

          {/* Business Structure */}
          <div className="flex items-center text-gray-700">
            <FileText className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Legal Structure</p>
              <p className="text-sm">{business.businessStructure}</p>
            </div>
          </div>

          {/* Business Network */}
          <div className="flex items-center text-gray-700">
            <Network className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Network</p>
              <p className="text-sm">{business.businessNetwork}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Briefcase className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Market</p>
              <p className="text-sm">{business.businessMarket}</p>
            </div>
          </div>

          {/* Business Website with "Not available" fallback */}
          <div className="flex items-center text-gray-700">
            <Globe className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Website</p>
              {business.businessWebsite && business.businessWebsite !== "none" && business.businessWebsite !== "" ? (
                <p className="text-sm">
                  <a 
                    href={business.businessWebsite.startsWith("http") ? business.businessWebsite : `https://${business.businessWebsite}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {business.businessWebsite}
                  </a>
                </p>
              ) : (
                <p className="text-sm text-gray-500">Not available</p>
              )}
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Mail className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm">{business.businessEmail}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Users className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Employees</p>
              <p className="text-sm">{business.businessEmployee}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Calendar className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Years Active</p>
              <p className="text-sm">{business.yearOfOperation} years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};