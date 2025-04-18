'use client'
import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form"

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
        <div className="mx-6 lg:container grid gap-32 mt-32">
            <div className="lg:container flex flex-col lg:flex-row justify-between gap-5">
                <p className="text-4xl font-montserrat">May I Help you ?</p>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-md"
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
                                            <SelectTrigger className="w-full sm:w-48 bg-white border-2 focus:ring-2 ring-primary/20">
                                                <SelectValue placeholder="Find a listing" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Listing</SelectLabel>
                                                <SelectItem value="find">Find a listing</SelectItem>
                                                <SelectItem value="rankings">View Rankings</SelectItem>
                                                <SelectItem value="blacklisted">Check Blacklisted</SelectItem>
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
                                            <SelectTrigger className="w-full sm:w-48 bg-white border-2 focus:ring-2 ring-primary/20">
                                                <SelectValue placeholder="Business" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Business</SelectLabel>
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
                            className="w-full sm:w-auto px-8 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                            disabled={!form.formState.isValid}
                        >
                            Search
                        </Button>
                    </form>
                </Form>
            </div>
            <div className="lg:container grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 grid gap-10 p-6 py-12">
                    <h2 className="text-center text-4xl font-montserrat text-primary">Kashmir Handicrafts Trade Registry</h2>
                    <p className="text-xl font-opensans">A Trade Registry is an organized system or database that records, verifies, and tracks the information of businesses, artisans, and institutions engaged in a specific industry or sector. It serves as a centralized platform for listing and categorizing participants, ensuring transparency, accountability, and authenticity in trade practices.</p>
                    <p className="text-xl font-opensans">
                        <b>LIST</b> : Reistered and documented artisans, businesses, and institutions participating in the Kashmiri handicraft industry.
                    </p>
                    <p className="text-xl font-opensans"><b>RANK</b> : Evaluated entities based on performance, craftsmanship quality, ethical standards, and market impact to ensure excellence and fairness.</p>
                    <p className="text-xl font-opensans"><b>BLACKLIST</b>: Identified and flagged entities engaged in unethical practices like counterfeiting or exploitation to protect the integrity of the Kashmiri craft ecosystem.</p>
                    <p className="text-xl font-opensans">
                        The Kashmir Handicrafts Trade Registry empowers all stakeholders by providing verified and reliable information, fostering trust, and driving sustainable growth. It strengthens the overall handicraft sector by enhancing transparency, promoting ethical trade, and elevating the global reputation of Kashmiri crafts.
                    </p>
                </div>
                <div className="col-span-2 lg:col-span-1 grid gap-10 bg-primary text-white rounded-lg p-6 py-12">
                    <h2 className="text-center text-4xl font-montserrat text-secondary">CraftLore&apos;s Trade Registry Project</h2>
                    <p className="text-xl font-opensans">The Kashmiri handicraft sector has long been a symbol of cultural heritage, steeped in history and rich craftsmanship. However, it has faced significant challenges, including the rise of counterfeits, exploitation of artisans, lack of market access, and the inability to ensure ethical trade practices. The CraftLore Trade Registry Project is designed to address these challenges head-on by reshaping the way the sector operates. This initiative is more than just a directory, it is a transformative force that bridges the gap between traditional craftsmanship and modern business dynamics, positioning Kashmiri artisans and businesses to thrive in an increasingly competitive global economy.</p>
                    <p className="text-xl font-opensans">At the core of the CraftLore Trade Registry Project is a centralized digital hub for artisans, businesses, and institutions in the Kashmiri handicraft industry. It aims to:</p>
                    <p className="text-xl font-opensans">
                        <b>Unify Participants</b>: By connecting all stakeholders, it fosters collaboration, smoother communication, and a more integrated approach to craft production, trade, and governance.
                    </p>
                    <p className="text-xl font-opensans">
                        <b>Streamline Access</b>: The platform provides easy access to verified information, enhancing market visibility for artisans, ensuring transparency for buyers, and facilitating efficient oversight for governance institutions.
                    </p>
                </div>
            </div>
        </div>
    )
}