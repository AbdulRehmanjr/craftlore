'use client'

import { motion } from "framer-motion";
import { MapPin, Building2, Mail, User } from "lucide-react";
import { useCallback } from "react";

interface User {
  fullName: string;
  address: string;
}

// This interface matches exactly what comes from RankSectionProps
interface Institute {
  user: User;
  instituteType: string;
  instituteEmail: string;
  instituteRep: string;
  repDes: string;
  yearOfOperation?: number;
}

interface InstituteCardProps {
  rankTitle: string;
  rankingColor: string;
  institute: Institute;
}

export const InstituteCard: React.FC<InstituteCardProps> = ({
  rankTitle,
  rankingColor,
  institute,
}) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group relative border-2 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300"
    >
      {/* Corner badge */}
      <div
        className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${rankingColor} shadow-sm`}
      >
        {rankTitle}
      </div>

      {/* Card content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
            {institute.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <p className="text-sm">{institute.user.address}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center text-gray-700">
            <Building2 className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Institute Type</p>
              <p className="text-sm">{getInstituteType(institute.instituteType)}</p>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Mail className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm">{institute.instituteEmail}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <User className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Representative</p>
              <p className="text-sm">
                {institute.instituteRep} <span className="text-gray-500">• {institute.repDes}</span>
              </p>
            </div>
          </div>
          
          {institute.yearOfOperation && (
            <div className="flex items-center text-gray-700">
              <User className="w-4 h-4 mr-3 text-primary" />
              <div>
                <p className="text-sm font-semibold">Years Active</p>
                <p className="text-sm">{institute.yearOfOperation} years</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};