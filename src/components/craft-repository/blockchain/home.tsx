import Image from "next/image";
import { BlockchainForm } from "~/components/craft-repository/blockchain/form";

export const BlockchainHome = () => {
  return (
    <div className="my-20 grid grid-cols-2 gap-4">
      <div className="col-span-2 flex flex-col gap-6 p-4 lg:col-span-1">
        <div className="relative h-[25rem] w-[25rem]">
          <Image src="/images/BC.png" alt="co2 image" fill />
        </div>
        <div className="space-y-6 [&_h3]:font-montserrat [&_h3]:text-3xl [&_h3]:text-secondary [&_p]:font-opensans [&_p]:text-xl">
          <h2 className="font-montserrat text-4xl text-primary">
            Welcome to Craftlore&apos;s Blockchain Traceability Registry &
            Verifier
          </h2>
          <p>
            Unveil the journey of authentic Kashmiri crafts with
            Craftlore&apos;s Blockchain Traceability Verifier. Designed to
            provide unmatched transparency, security, and trust, this tool
            tracks each step in the lifecycle of a craft, ensuring that
            artisans, buyers, and industry professionals can verify the origin
            and authenticity of Kashmiri products in real-time.
          </p>
          <h3>Craftlore Blockchain Traceability Verifier</h3>
          <p>The CraftLore Kashmir Handicraft Blockchain Protocol utilizes Blockchain Technology to provide a decentralized, transparent ledger for secure transactions. Built on a robust Ethereum-based platform, it integrates smart contracts for fair trade, NFTs for authenticity verification, and IPFS for decentralized storage, ensuring seamless, traceable, and tamper-proof transactions in the Kashmir handicrafts industry.</p>
          <p>The CraftLore Kashmir Handicraft Blockchain Protocol eliminates middlemen and reduces artisan exploitation by enabling direct transactions between artisans and buyers. Through smart contracts, artisans retain greater control over pricing, ensuring fair compensation and transparency, while blockchain guarantees authenticity and traceability of each handcrafted item</p>         
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-6 rounded-lg bg-primary p-6 shadow-lg lg:col-span-1">
        <h2 className="p-6 text-center font-montserrat text-[40px] leading-[48px] text-secondary">
          Kashmir Handicrafts Blockchain Traceability Portal
        </h2>
        <p className="text-center font-montserrat text-xl text-white">
          Project Under Development: Demonstrating System Behavior
        </p>
        <BlockchainForm />
      </div>
    </div>
  );
};
