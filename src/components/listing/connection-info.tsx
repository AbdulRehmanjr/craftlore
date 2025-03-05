import Link from "next/link"
import { Button } from "~/components/ui/button"

export const ConnectionSection = () => {
  return (
    <div className="py-8 lg:py-12 text-center">
      <h2 className="font-mostread text-primary text-2xl lg:text-3xl mb-4">
        Looking to Connect with Verified Artisans, Businesses & Craft Institutions?
      </h2>
      <p className="font-mostread text-primary mb-6 max-w-3xl mx-auto">
        Partner with authentic Kashmiri artisans, businesses, and craft institutions. 
        Fill out this form, and we&apos;ll bridge the connection for you!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild variant="default">
          <Link href="/buyer">Buyer</Link>
        </Button>
        <Button asChild variant="default">
          <Link href="/corporate">Corporate</Link>
        </Button>
        <Button asChild variant="default">
          <Link href="/sponsorship">Sponsorship</Link>
        </Button>
      </div>
    </div>
  )
}