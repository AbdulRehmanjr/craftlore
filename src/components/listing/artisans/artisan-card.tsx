'use client'
import { motion } from "framer-motion";
import { Award, MapPin, Briefcase, Star, Clock } from "lucide-react";

interface User {
  fullName: string;
  address: string;
}

interface Artisan {
  user: User;
  craftSpecialty: string;
  craftSkill: string;
  craftAward: string;
  craftExperience: number;
}

interface ArtisanCardProps {
  rankTitle: string;
  rankingColor: string;
  artisan: Artisan;
}

export const ArtisanCard: React.FC<ArtisanCardProps> = ({
  rankTitle,
  rankingColor,
  artisan,
}) => {
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
            {artisan.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <p className="text-sm">{artisan.user.address}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center text-gray-700">
            <Briefcase className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Craft Specialty</p>
              <p className="text-sm">{artisan.craftSpecialty}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Star className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Skill Level</p>
              <p className="text-sm">{artisan.craftSkill}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Award className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Award</p>
              <p className="text-sm">{artisan.craftAward}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-3 text-primary" />
            <div>
              <p className="text-sm font-semibold">Experience</p>
              <p className="text-sm">{artisan.craftExperience} years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
