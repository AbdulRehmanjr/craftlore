import { Award, MapPin, Briefcase, Star, Clock } from "lucide-react";
import { cn } from "~/lib/utils";

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
    <article
      className="group relative overflow-hidden rounded-xl border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Corner badge - Updated to match screenshot */}
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
            {artisan.user.fullName}
          </h2>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-2 h-4 w-4" />
            <p className="text-sm">{artisan.user.address}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center text-gray-700">
            <Briefcase className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Craft Specialty</p>
              <p className="text-sm">{artisan.craftSpecialty}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Star className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Skill Level</p>
              <p className="text-sm">{artisan.craftSkill}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Award className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Award</p>
              <p className="text-sm">{artisan.craftAward}</p>
            </div>
          </div>

          <div className="flex items-center text-gray-700">
            <Clock className="mr-3 h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-semibold">Experience</p>
              <p className="text-sm">{artisan.craftExperience} years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};
