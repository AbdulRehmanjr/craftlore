import { GENDERSTAKHOLDERS } from "~/constants/data"
import { 
    UserRound, 
    Building2, 
    Scale, 
    Globe, 
    type LucideIcon 
} from "lucide-react"

export const GenderStakHolder = () => {
    const icons: LucideIcon[] = [UserRound, Building2, Scale, Globe]
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                GENDERSTAKHOLDERS.map((stakeholder, index) => {
                    const Icon = icons[index]
                    return (
                        <div 
                            className="group bg-white border-4 border-secondary rounded-xl hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden" 
                            key={index}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                        {Icon && <Icon className="h-6 w-6 text-secondary" />}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                                        {stakeholder.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-16 md:pl-0">
                                    {stakeholder.desc}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
