'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Mail, Phone, User, MessageSquare } from "lucide-react"

const formSchema = z.object({
    firstName: z.string({ required_error: 'Field is required.' }),
    lastName: z.string({ required_error: 'Field is required.' }),
    phone: z.string({ required_error: 'Field is required.' }),
    email: z.string({ required_error: 'Field is required.' }).email({ message: 'Email format is wrong' }),
    message: z.string({ required_error: 'Field is required.' })
})

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const formSubmission = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <div className="col-span-2 grid gap-6 rounded-lg bg-white p-8 shadow-lg">
            <div className="space-y-2">
                <h3 className="font-montserrat text-2xl font-semibold text-primary">Contact us</h3>
                <h2 className="font-montserrat text-4xl font-bold">How can we help you?</h2>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            </div>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(formSubmission)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    First Name
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter first name" 
                                        {...field} 
                                        value={field.value ?? ''}
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Last Name
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter last name" 
                                        {...field} 
                                        value={field.value ?? ''}
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    Phone Number
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter your phone" 
                                        {...field} 
                                        value={field.value ?? ''}
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    Email Address
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter your email" 
                                        {...field} 
                                        value={field.value ?? ''}
                                        className="h-12"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel className="flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4" />
                                    Message
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message"
                                        className="min-h-[150px] resize-none"
                                        {...field}
                                        value={field.value ?? ''}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        variant={'secondary'} 
                        className="col-span-2 h-12 w-full text-lg font-semibold transition-all duration-300 hover:scale-105 sm:w-fit"
                    >
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>
    )
}