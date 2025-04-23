import { SectionContainer } from "~/components/common/section-container";
import { GenderComponentList } from "~/components/general/gender/compoment-list";
import { GenderStakHolder } from "~/components/general/gender/stakholder";
import { GenderVisionList } from "~/components/general/gender/vision-list";

export default function EmploymentPage() {
  return (
    <SectionContainer className="my-8 sm:my-16 md:my-24 lg:my-32 grid gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary">
        Kashmir Handicraft Gender Economic Study Center
      </h1>
      <p className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-[31px]">
        The Kashmir Handicraft Gender Economic Study Center is dedicated to
        addressing and analyzing gender-based economic dynamics within the
        Kashmiri handicraft sector. This pioneering initiative seeks to promote
        gender equality by focusing on the specific challenges women artisans
        face, as well as their contributions to the craft industry. By providing
        real-time data and comprehensive insights, the center empowers women
        artisans, businesses, and policymakers to make informed decisions that
        enhance gender inclusivity and economic opportunities in the sector.
      </p>
      
      <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-secondary mt-2 sm:mt-4">
        Purpose and Vision
      </h2>
      <p className="font-opensans text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-[31px]">
        The mission of the Kashmir Handicraft Gender Economic Study Center is to
        promote gender equality and economic empowerment in the handicraft
        sector. Its core aims include:
      </p>
      
      <GenderVisionList />
      
      <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary mt-2 sm:mt-4">
        Key Components
      </h2>
      
      <GenderComponentList />
      
      <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary mt-2 sm:mt-4">
        Impact on Stakeholders
      </h2>
      
      <GenderStakHolder />
      
      <div className="grid gap-3 sm:gap-4 rounded-lg bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 lg:py-12 shadow-md">
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-secondary">
          Future Vision
        </h2>
        <p className="font-opensans text-base sm:text-lg md:text-xl">
          The <b>Craftlore Kashmir Handicrafts Economics Monitoring Center</b>
          aims to be a global leader in promoting gender equality within the
          handicraft industry. As it grows, the center will expand its analysis
          to include the role of women artisans in leadership positions and
          their impact on global trade. By providing valuable insights into
          gender dynamics, the center aspires to create a more inclusive and
          equitable economic landscape where women artisans receive the
          recognition and opportunities they deserve.
        </p>
        <p className="font-opensans text-base sm:text-lg md:text-xl">
          Through its work, the center will help transform the Kashmiri
          handicraft sector into a gender-balanced, sustainable industry where
          all artisans can thrive.
        </p>
      </div>
    </SectionContainer>
  );
}