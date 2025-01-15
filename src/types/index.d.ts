type InstitutionType = "None" | "Governance" | "NGO" | "Training_Body" | "Educational_Body";
type BusinessLevel = "None" | "Large_Enterprice" | "Mid_sized_Business" | "Small_Business" | "Startup";
type SkillLevel = "None" | "Expert" | "Advanced" | "Beginner"
type RegisterType = "None" | "Artisan" | "Business" | "Institution" | "BuyerMembership" | "CorpoMembership" | "SponsorMembership";
type MarketType = "None" | "Local" | "National" | "International";
type Status = "Pending" | "Actice";
type Ranks = "None" | "Gold" | "Silver" | "Bronze"

type AppliedJob = {
    jobId: string;
    fullName: string;
    email: string;
    job: string;
    jobCode: string;
    resume: string;
    coverLetter: string;
};

type Employ = {
    employId: string;
    fullName: string;
    skills: string;
    contribution: string;
};

type User = {
    userId: string;
    fullName: string;
    phone: string;
    email: string;
    address: string;
    password: string;
    registerType: RegisterType;
    status: Status;
    Artisan: Artisan[];
    Business: Business[];
    Institute: Institute[];
    BuyerMembership: BuyerMembership[];
    CorpoMembership: CorpoMembership[];
    SponsorMembership: SponsorMembership[];
};

type Artisan = {
    artisanId: string;
    craftSpecialty: string;
    craftSkill: SkillLevel;
    craftExperience: number;
    craftAward: string;
    market: MarketType;
    documents: string[];
    status: string;
    userId: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    user: User;
};

type ArtisanProps = {
    artisanId: string;
    craftSpecialty: string;
    craftSkill: SkillLevel;
    craftExperience: number;
    craftAward: string;
    market: MarketType;
    documents: string[];
    status: string;
    userId: string;
    listingCriteria: string;
    user: {
        fullName: string
        address: string
    };
    criteria: {
        listingRank: Ranks
    }
};

type InstituteProps = {
    instituteId: string;
    instituteName: string;
    instituteEmail: string;
    instituteType: InstitutionType;
    instituteAddress: string;
    instituteMission: string;
    instituteRep: string;
    repDes: string;
    documents: string[];
    status: string;
    listingCriteria: string;
    userId: string;
    criteria: {
        listingRank: Ranks
    }
};

type BusinessProps = {
    businessId: string;
    businessName: string;
    businessEmail: string;
    businessAddress: string;
    businessType: BusinessLevel;
    businessSold: string;
    businessEmployee: number;
    businessMarket: MarketType
    documents: string[];
    yearOfOperation: number
    status: string;
    listingCriteria: string;
    userId: string;
    criteria: {
        listingRank: Ranks
    }
};

type Business = {
    businessId: string;
    businessName: string;
    businessEmail: string;
    businessAddress: string;
    businessType: BusinessLevel;
    businessSold: string;
    businessEmployee: number;
    documents: string[];
    status: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    userId: string;
    user: User;
};



type Institute = {
    instituteId: string;
    instituteName: string;
    instituteEmail: string;
    instituteType: InstitutionType;
    instituteAddress: string;
    instituteMission: string;
    instituteRep: string;
    repDes: string;
    documents: string[];
    status: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    userId: string;
    user: User;
};



type BuyerMembership = {
    buyerMemberId: string;
    buyerType: string;
    businessName: string;
    businessType: string;
    taxId: string;
    country: string;
    website: string;
    productInterest: string[];
    orderVolume: string;
    authentication: string;
    traceability: string;
    sustainability: string[];
    source: string;
    newsletter: boolean;
    specialRequirements: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type CorpoMembership = {
    corpoMemberId: string;
    institutionName: string;
    institutionType: string;
    industry: string;
    yearEstablished: number;
    taxId: string;
    primaryContact: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    headquartersAddress: string;
    additionalLocations: string;
    partnershipType: string;
    partnershipGoals: string;
    targetProducts: string[];
    csrInterest: string;
    csrInitiatives: string;
    sustainabilityPractices: string;
    businessLicense: string;
    proofOfTaxID: string;
    references: string;
    engagementChannels: string;
    customerDemographic: string;
    brandMission: string;
    specificRequirements: string;
    challenges: string;
    additionalComments: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type SponsorMembership = {
    sponsorshipId: string;
    sponsorName: string;
    contactPerson: string;
    email: string;
    phone: string;
    socialLinks: string;
    sponsorType: string;
    industry: string;
    sponsorshipGoal: string;
    objectives: string;
    focusArea: string;
    tier: string;
    budgetRange: string;
    sponsorshipChannel: string;
    eventInterest: string;
    productCustomization: string;
    csrInterest: string;
    pastCSREfforts: string;
    sustainabilityPractices: string;
    brandingOptions: string[];
    socialHandles: string;
    communicationChannel: string;
    impactMetrics: string[];
    reportFrequency: string;
    publicUse: string;
    specialRequirements: string;
    additionalComments: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type LisitingCritera = {
    criteraId: string;
    sourceOfMaterial: string;
    craftingProcess: string;
    sustainablePractices: boolean;
    sustainabledescription: string;
    fairWage: boolean;
    genderSuport: boolean;
    womenPercentage: number;
    workplaceuphold: boolean;
    workplaceDescription: string;
    childLabour: boolean;
    fairTrade: boolean;
    fairtradeDoc: string[];
    giHold: boolean;
    giNumber: string;
    blockChain: boolean;
    blockChainDoc: string[];
    ethics: boolean;
    qualityReview: boolean;
    profilePermission: boolean;
    complianceAcknowledgement: boolean;
    Artisan: Artisan[];
    Business: Business[];
    Institute: Institute[];
};

type ValueProps = {
    value: string
    name: string
}

type SubCategoryProps = {
    name: string
    RawMaterial: ValueProps[]
    Processing?: { name: string, values: ValueProps[] }[]
    ProductionMethod?: { name: string, values: ValueProps[] }[]
    Packaging: { name: string, values: ValueProps[] }[]
    Transportation: { name: string, values: ValueProps[] }[]
    Crafting?: { name: string, values: ValueProps[] }[]
    Installation?: { name: string, values: ValueProps[] }[]
    Finishing?: { name: string, values: ValueProps[] }[]
    Preparation?: { name: string, values: ValueProps[] }[]
    CookingProcess?: { name: string, values: ValueProps[] }[]
    PaintingAndLacquering?: { name: string, values: ValueProps[] }[]
    Embroidery?: { name: string, values: ValueProps[] }[]
}

type CarbonProps = {
    category: string
    subcategory: SubCategoryProps[]
}


type CategoryProps = {
    categoryId: string
    categoryName: string
}

type SubCategoryProps = {
    subcategoryId: string
    subcategoryName: string
    categoryId: string
}

type SectionProps = {
    sectionId: string
    sectionType: SectionTypeProps
    subcategoryId: string
}

type MaterialProps = {
    materialId: string
    materialName: string
    subcategoryId: string
}
type ValueProps = {
    valueId: string
    value: string
    valueName: string
    sectionId: string
    materialId: string
}

type SectionTypeProps =
    "None" |
    "MaterialType" |
    "Quality" |
    "ProductionProcess" |
    "ProductCertifications" |
    "PlyType" |
    "TypeOfWeaving" |
    "DesignPatternTypes" |
    "DyeTypes" |
    "FinishingTechniques" |
    "ProductLineSize" |
    "ColorShades" |
    "Embellishments" |
    "Certifications" |
    "MaterialGrading" |
    "ProductTypesSizes" |
    "KnotPerInch" |
    "Dimensions" |
    "CarvingTechniques" |
    "ScaleOfCarving" |
    "FinishOptions" |
    "PatternTypes" |
    "FabricAndMaterial" |
    "RawMaterial" |
    "Processing" |
    "Packaging" |
    "Transportation" |
    "Crafting" |
    "Installation" |
    "Finishing" |
    "Preparation" |
    "CookingProcess" |
    "PaintingAndLacquering" |
    "Embroidery" |
    "ProductionMethod"

type MenuItemProps = {
    title: string;
    href: string;
    submenu?: MenuItemProps[];
};

type SubMenuProps = {
    items: MenuItemProps[];
};

type VerificationResultProps = {
    authentic: boolean;
    authenticityScore: number;
    blockchainDetails: {
        hash: string;
        timestamp: string;
        network: string;
        smartContract: string;
        verifications: number;
        lastVerified: string;
    };
    materialVerification: {
        primaryMaterial: string;
        sourceLocation: string;
        sourcingDate: string;
        batchNumber: string;
        qualityGrade: string;
        testResults: {
            purity: string;
            micronCount: string;
            testDate: string;
            labCertification: string;
        };
        sustainabilityMetrics: {
            sourcingEthics: string;
            environmentalImpact: string;
            carbonFootprint: string;
        };
    };
    journeyTracking: {
        currentStage: string;
        lastUpdated: string;
        totalStages: number;
        stagesCompleted: number;
        locationHistory: {
            stage: string;
            location: string;
            timestamp: string;
            verifiedBy: string;
            gpsCoordinates: string;
        }[];
    };
    paymentTracking: {
        craftsman: {
            totalDue: number;
            totalPaid: number;
            paymentStatus: string;
            transactions: {
                amount: number;
                date: string;
                type: string;
                transactionId: string;
                status: string;
                verifiedBy: string;
            }[];
            wageMetrics: {
                hourlyRate: number;
                totalHours: number;
                bonuses: number;
                marketRateComparison: string;
                lastWageReview: string;
            };
        };
        marketTransaction: {
            buyerId: string;
            sellerId: string;
            productPrice: number;
            transactionStatus: string;
            paymentFlow: {
                stage: string;
                amount: number;
                status: string;
                date: string;
            }[];
            escrowDetails: {
                enabled: boolean;
                releaseConditions: string;
                status: string;
            };
        };
    };
    giCertification: {
        number: string;
        issuanceDate: string;
        validUntil: string;
        category: string;
        verificationAuthority: string;
        specifications: string[];
    };
    paymentDetails: {
        status: string;
        lastPayment: string;
        totalAmount: number;
        method: string;
        transactionId: string;
        history: {
            date: string;
            amount: number;
            type: string;
        }[];
    };
    productionDetails: {
        startDate: string;
        completionDate: string;
        location: string;
        gpsCoordinates: string;
        materials: {
            primary: string;
            source: string;
            quality: string;
        };
        techniques: string[];
    };
    craftsman: {
        name: string;
        id: string;
        experience: string;
        certification: string;
        wageCompliance: number;
        paymentHistory: string;
        ratings: number;
    };
    exploitationPrevention: {
        wageMonitoring: {
            status: string;
            lastAudit: string;
            averageWage: string;
            timely: boolean;
        };
        compliance: {
            labor: string;
            safety: string;
            benefits: string;
        };
    };
    marketAccess: {
        directListing: boolean;
        platformVerified: boolean;
        buyerRating: number;
        transactions: number;
        averageResponse: string;
    };
    cost: {
        materialCost: {
            amount: number,
            percentage: number,
        },
        craftsmanPayment: {
            amount: number,
            percentage: number,
        },
        manufacturerProfit: {
            amount: number,
            percentage: number,
        },
        retailerProfit: {
            amount: number,
            percentage: number,
        },
    },
} 