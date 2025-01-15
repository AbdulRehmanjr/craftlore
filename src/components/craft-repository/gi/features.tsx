import { GIBENEFITS, GIFEATURES } from "~/constants/data";

export const GIFeatures = () => {
  return (
    <div className="grid gap-10 pb-72 pt-10">
      <h2 className="font-montserrat text-4xl text-primary">
        Key Features : Technology Integrations with Geographical Indication
      </h2>
      <div className="grid gap-10">
        <p className="font-opensans text-xl">
          CraftLore’s Geographical Indication (GI) Promotion Program integrates
          cutting-edge technology to ensure authenticity, traceability, and
          protection of Kashmiri crafts. By leveraging blockchain, RFID, NFC,
          AI, DNA tagging, and IoT sensors, the program secures GI-certified
          products against counterfeiting while promoting sustainability.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {GIFEATURES.map((feature, index) => (
            <article
              key={index}
              className="col-span-2 space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white md:col-span-1"
            >
              <h3 className="font-montserrat text-xl">
                {index + 1}. {feature.title}
              </h3>
              <p className="font-opensans">{feature.des}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="grid gap-10">
        <h2 className="font-montserrat text-4xl text-primary">
          Benefits of Geographical Indication
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {GIBENEFITS.map((benefit, index) => (
            <article
              key={index}
              className="col-span-2 space-y-6 rounded-lg bg-white p-8 shadow-lg duration-300 hover:bg-primary hover:text-white md:col-span-1"
            >
              <h3 className="font-montserrat text-xl">{benefit.title}</h3>
              <>
                {benefit.sub.map((data,index) => (
                  <p className="font-opensans" key={index} ><strong>{data.title}: </strong>{data.des}</p>
                ))}
              </>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
