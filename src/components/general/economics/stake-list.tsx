import { STAKHOLDERS } from "~/constants/data"
import { 
    Users, 
    Building2, 
    Gavel, 
    ShoppingBag,
    type LucideIcon 
} from "lucide-react"

export const StakHolderList = () => {
    const icons: LucideIcon[] = [
        Users,        // Artisans
        Building2,    // Business Owners
        Gavel,        // Policymakers
        ShoppingBag   // Global Consumers
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                STAKHOLDERS.map((stake, index) => {
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
                                        {stake.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed pl-16 md:pl-0">
                                    {stake.desc}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
