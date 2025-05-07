'use client'
import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form"
import { Search, BookOpen, AlertTriangle } from "lucide-react"

const formSchema = z.object({
    listingType: z.string().min(1, "Please select a listing type"),
    businessType: z.string().min(1, "Please select a business type"),
})

type FormValues = z.infer<typeof formSchema>

export const TraderRegistryInfo = () => {
    const router = useRouter();
    
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            listingType: "",
            businessType: "",
        },
    })

    const onSubmit = (data: FormValues) => {
        // Map business types to tab values
        const tabMap: Record<string, string> = {
            "Artisan": "artisans",
            "Business": "businesses",
            "Institution": "institutions"
        };

        const selectedTab = tabMap[data.businessType] ?? "registry";
        
        // Add the listing type as a query parameter
        const searchParams = new URLSearchParams();
        searchParams.set('tab', selectedTab);
        searchParams.set('type', data.listingType);
        
        router.push(`/listing?${searchParams.toString()}`);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-16 md:gap-24 lg:gap-32 mt-16 md:mt-24 lg:mt-32">
            {/* Help Section */}
            <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-center">
                <p className="text-3xl md:text-4xl font-montserrat">May I Help you?</p>
                
                {/* Form Section */}
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100"
                    >
                        <FormField
                            control={form.control}
                            name="listingType"
                            render={({ field }) => (
                                <FormItem>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-full sm:w-52 bg-white border-2 border-gray-200 focus:ring-2 ring-primary/20 h-11 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                                <div className="flex items-center">
                                                    {field.value === "find" && <Search className="mr-2 h-4 w-4 text-primary" />}
                                                    {field.value === "rankings" && <BookOpen className="mr-2 h-4 w-4 text-primary" />}
                                                    {field.value === "blacklisted" && <AlertTriangle className="mr-2 h-4 w-4 text-primary" />}
                                                    <SelectValue placeholder="Find a listing" />
                                                </div>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="border-2 border-gray-200">
                                            <SelectGroup>
                                                <SelectLabel className="text-primary font-medium">Listing</SelectLabel>
                                                <SelectItem value="find" className="flex items-center">
                                                    <div className="flex items-center">
                                                        <Search className="mr-2 h-4 w-4 text-primary" />
                                                        Find a listing
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="rankings" className="flex items-center">
                                                    <div className="flex items-center">
                                                        <BookOpen className="mr-2 h-4 w-4 text-primary" />
                                                        View Rankings
                                                    </div>
                                                </SelectItem>
                                                <SelectItem value="blacklisted" className="flex items-center">
                                                    <div className="flex items-center">
                                                        <AlertTriangle className="mr-2 h-4 w-4 text-primary" />
                                                        Check Blacklisted
                                                    </div>
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="businessType"
                            render={({ field }) => (
                                <FormItem>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-full sm:w-52 bg-white border-2 border-gray-200 focus:ring-2 ring-primary/20 h-11 rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                                                <SelectValue placeholder="Business" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="border-2 border-gray-200">
                                            <SelectGroup>
                                                <SelectLabel className="text-primary font-medium">Business</SelectLabel>
                                                <SelectItem value="Artisan">Artisan</SelectItem>
                                                <SelectItem value="Business">Business</SelectItem>
                                                <SelectItem value="Institution">Institution</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Button 
                            variant="secondary"
                            type="submit"
                            className="w-full sm:w-auto h-11 px-8 py-2 bg-secondary text-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 rounded-lg"
                            disabled={!form.formState.isValid}
                        >
                            <Search className="mr-2 h-4 w-4" />
                            Search
                        </Button>
                    </form>
                </Form>
            </div>
            
            {/* Content Section */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid gap-6 md:gap-8 p-6 md:p-8">
                    <h2 className="text-center text-3xl md:text-4xl font-montserrat text-primary">Kashmir Handicrafts Trade Registry</h2>
                    <p className="text-lg md:text-xl font-opensans">A Trade Registry is an organized system or database that records, verifies, and tracks the information of businesses, artisans, and institutions engaged in a specific industry or sector. It serves as a centralized platform for listing and categorizing participants, ensuring transparency, accountability, and authenticity in trade practices.</p>
                    <p className="text-lg md:text-xl font-opensans">
                        <b>LIST</b> : Reistered and documented artisans, businesses, and institutions participating in the Kashmiri handicraft industry.
                    </p>
                    <p className="text-lg md:text-xl font-opensans"><b>RANK</b> : Evaluated entities based on performance, craftsmanship quality, ethical standards, and market impact to ensure excellence and fairness.</p>
                    <p className="text-lg md:text-xl font-opensans"><b>BLACKLIST</b>: Identified and flagged entities engaged in unethical practices like counterfeiting or exploitation to protect the integrity of the Kashmiri craft ecosystem.</p>
                    <p className="text-lg md:text-xl font-opensans">
                        The Kashmir Handicrafts Trade Registry empowers all stakeholders by providing verified and reliable information, fostering trust, and driving sustainable growth. It strengthens the overall handicraft sector by enhancing transparency, promoting ethical trade, and elevating the global reputation of Kashmiri crafts.
                    </p>
                </div>
                <div className="grid gap-6 md:gap-8 bg-primary text-white rounded-lg p-6 md:p-8">
                    <h2 className="text-center text-3xl md:text-4xl font-montserrat text-secondary">CraftLore&apos;s Trade Registry Project</h2>
                    <p className="text-lg md:text-xl font-opensans">The Kashmiri handicraft sector has long been a symbol of cultural heritage, steeped in history and rich craftsmanship. However, it has faced significant challenges, including the rise of counterfeits, exploitation of artisans, lack of market access, and the inability to ensure ethical trade practices. The CraftLore Trade Registry Project is designed to address these challenges head-on by reshaping the way the sector operates. This initiative is more than just a directory, it is a transformative force that bridges the gap between traditional craftsmanship and modern business dynamics, positioning Kashmiri artisans and businesses to thrive in an increasingly competitive global economy.</p>
                    <p className="text-lg md:text-xl font-opensans">At the core of the CraftLore Trade Registry Project is a centralized digital hub for artisans, businesses, and institutions in the Kashmiri handicraft industry. It aims to:</p>
                    <p className="text-lg md:text-xl font-opensans">
                        <b>Unify Participants</b>: By connecting all stakeholders, it fosters collaboration, smoother communication, and a more integrated approach to craft production, trade, and governance.
                    </p>
                    <p className="text-lg md:text-xl font-opensans">
                        <b>Streamline Access</b>: The platform provides easy access to verified information, enhancing market visibility for artisans, ensuring transparency for buyers, and facilitating efficient oversight for governance institutions.
                    </p>
                </div>
            </div>
        </div>
    )
}