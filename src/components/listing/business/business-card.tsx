'use client'

import { motion } from "framer-motion";
import { MapPin, Briefcase, Building2, Mail, Users, Calendar } from "lucide-react";
import { useCallback } from "react";

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
        return "Large_Enterprice";
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
            {business.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <p className="text-sm">{business.user.address}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center text-gray-700">
            <Building2 className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Business Type</p>
              <p className="text-sm">{getBusiness(business.businessType)}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Briefcase className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Market</p>
              <p className="text-sm">{business.businessMarket}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Mail className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm">{business.businessEmail}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Users className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Employees</p>
              <p className="text-sm">{business.businessEmployee}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Years Active</p>
              <p className="text-sm">{business.yearOfOperation} years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
