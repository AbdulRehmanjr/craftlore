import Image from "next/image";
import { BlockchainForm } from "~/components/craft-repository/blockchain/form";

export const BlockchainHome = () => {
  return (
    <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
      <article className="space-y-6 sm:space-y-8 md:space-y-10">
        <div className="relative aspect-square w-full max-w-[25rem] mx-auto">
          <Image 
            src="/images/BC.png" 
            alt="Blockchain technology illustration" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Welcome to Craftlore&apos;s Blockchain Traceability Registry & Verifier
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            Unveil the journey of authentic Kashmiri crafts with
            Craftlore&apos;s Blockchain Traceability Verifier. Designed to
            provide unmatched transparency, security, and trust, this tool
            tracks each step in the lifecycle of a craft, ensuring that
            artisans, buyers, and industry professionals can verify the origin
            and authenticity of Kashmiri products in real-time.
          </p>

          <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
            Craftlore Blockchain Traceability Verifier
          </h3>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            The CraftLore Kashmir Handicraft Blockchain Protocol utilizes Blockchain Technology to provide a decentralized, transparent ledger for secure transactions. Built on a robust Ethereum-based platform, it integrates smart contracts for fair trade, NFTs for authenticity verification, and IPFS for decentralized storage, ensuring seamless, traceable, and tamper-proof transactions in the Kashmir handicrafts industry.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
            The CraftLore Kashmir Handicraft Blockchain Protocol eliminates middlemen and reduces artisan exploitation by enabling direct transactions between artisans and buyers. Through smart contracts, artisans retain greater control over pricing, ensuring fair compensation and transparency, while blockchain guarantees authenticity and traceability of each handcrafted item.
          </p>
        </div>
      </article>

      <article className="flex flex-col gap-4 sm:gap-6 rounded-xl bg-primary p-4 sm:p-6 shadow-lg">
        <header className="space-y-3 text-center">
          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
            Kashmir Handicrafts Blockchain Traceability Portal
          </h2>
          <p className="font-montserrat text-base sm:text-lg md:text-xl text-white/90">
            Project Under Development: Demonstrating System Behavior
          </p>
        </header>
        
        <BlockchainForm />
      </article>
    </div>
  );
};
