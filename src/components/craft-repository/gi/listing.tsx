"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Award,
  MapPin,
  Shield,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { GILISTING } from "~/constants/gi";

type ExpandedItemsProps = Record<number, boolean>;

export const GIListing = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsProps>({});
  const toggleExpand = (index: number): void => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8">
      {GILISTING.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-md transition-all duration-300"
        >
          {/* Header */}
          <div className="relative px-6 py-5">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h2 className="font-montserrat text-2xl font-bold text-primary">
                  {item.Name}
                </h2>
                <p className="font-opensans text-sm text-gray-950">
                  GI Registered in {item.Year_of_Registration} • GI Application #
                  {item.GI_Application_Number} • GI Certificate #
                  {item.GI_Certificate_Number}
                </p>
              </div>
            </div>
          </div>

          {/* Basic Info Section */}
          <div className="border-t border-gray-100 bg-white p-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-primary">
                    Registration Details
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 pl-4">
                  <div className="space-y-1">
                    <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                      Journal No
                    </p>
                    <p className="font-opensans text-sm font-medium text-gray-950">
                      {item.GI_Journal_Number}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                      Applicant
                    </p>
                    <p className="font-opensans text-sm font-medium text-gray-950">
                      {item.GI_Applicant}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                      Class
                    </p>
                    <p className="font-opensans text-sm font-medium text-gray-950">
                      {item.Class.join(", ")}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                      Certificate
                    </p>
                    <p className="font-opensans text-sm font-medium text-gray-950">
                      #{item.GI_Certificate_Number}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-primary">
                    Geographical Area
                  </h3>
                </div>

                <div className="pl-4">
                  {/* Static Country and Region */}
                  <div className="mb-4 space-y-3">
                    <div className="space-y-1">
                      <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                        Country
                      </p>
                      <p className="font-opensans text-sm text-gray-950">
                        India
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                        Region
                      </p>
                      <p className="font-opensans text-sm text-gray-950">
                        Jammu and Kashmir
                      </p>
                    </div>
                  </div>

                  {item.Jurisdictional_Area && (
                    <div className="space-y-3">
                      {item.Jurisdictional_Area.Crafting_Zone && (
                        <div className="space-y-1">
                          <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                            Crafting Zones
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(
                              item.Jurisdictional_Area.Crafting_Zone,
                            )
                              ? item.Jurisdictional_Area.Crafting_Zone.map(
                                  (zone, i) => (
                                    <span
                                      key={i}
                                      className="inline-block rounded bg-green-100 px-2 py-1 font-opensans text-xs text-green-800"
                                    >
                                      {zone}
                                    </span>
                                  ),
                                )
                              : item.Jurisdictional_Area.Crafting_Zone}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {item.Geographical_Area && (
                    <div className="space-y-3">
                      {typeof item.Geographical_Area === "object" &&
                        !Array.isArray(item.Geographical_Area) &&
                        item.Geographical_Area.Weaving_Area && (
                          <div className="space-y-1">
                            <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                              Weaving Areas
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {Array.isArray(
                                item.Geographical_Area.Weaving_Area,
                              )
                                ? item.Geographical_Area.Weaving_Area.map(
                                    (zone, i) => (
                                      <span
                                        key={i}
                                        className="inline-block rounded bg-green-100 px-2 py-1 font-opensans text-xs text-green-800"
                                      >
                                        {zone}
                                      </span>
                                    ),
                                  )
                                : item.Geographical_Area.Weaving_Area}
                            </div>
                          </div>
                        )}
                      {typeof item.Geographical_Area === "object" &&
                        !Array.isArray(item.Geographical_Area) &&
                        item.Geographical_Area.Material_Source && (
                          <div className="space-y-1">
                            <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                              Material Source
                            </p>
                            <p className="font-opensans text-sm text-gray-950">
                              {item.Geographical_Area.Material_Source}
                            </p>
                          </div>
                        )}
                      {Array.isArray(item.Geographical_Area) && (
                        <div className="space-y-1">
                          <p className="font-montserrat text-xs font-medium uppercase text-gray-500">
                            Craft Cluster - Sub Region
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.Geographical_Area.map((zone, i) => (
                              <span
                                key={i}
                                className="inline-block rounded bg-green-100 px-2 py-1 font-opensans text-xs text-green-800"
                              >
                                {zone}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Show More Button */}
            <button
              className="mt-6 flex w-full items-center justify-center rounded-md bg-gray-50 py-3 font-montserrat text-gray-700 transition-colors hover:bg-gray-100"
              onClick={() => toggleExpand(index)}
            >
              {expandedItems[index] ? (
                <>
                  <span className="font-medium">Show Less</span>
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="font-medium">Show More Details</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {/* Expanded Section */}
          {expandedItems[index] && (
            <div className="bg-white p-6 pt-0">
              <div className="mt-2 border-t border-gray-200 pt-6">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Technical Specifications */}
                  <div className="rounded-lg bg-gray-50 p-5">
                    <div className="mb-5 flex items-center space-x-3">
                      <div className="rounded-full bg-purple-100 p-2">
                        <Shield className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="font-montserrat font-semibold text-primary">
                        Technical Specifications
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {item.Technical_Specifications &&
                        Object.entries(item.Technical_Specifications).map(
                          ([category, details]) => (
                            <div
                              key={category}
                              className="rounded-lg bg-white p-4 shadow-sm"
                            >
                              <h4 className="mb-3 border-b border-gray-100 pb-2 font-montserrat font-medium text-primary">
                                {category.replace(/_/g, " ")}
                              </h4>

                              <div className="space-y-4">
                                {Object.entries(
                                  details as Record<string, unknown>,
                                ).map(([key, value]) => (
                                  <div key={key}>
                                    <p className="mb-1 font-montserrat text-sm font-medium text-gray-600">
                                      {key.replace(/_/g, " ")}:
                                    </p>
                                    {typeof value === "object" &&
                                    value !== null &&
                                    !Array.isArray(value) ? (
                                      <div className="space-y-2 pl-4">
                                        {Object.entries(
                                          value as Record<string, unknown>,
                                        ).map(([subKey, subValue]) => (
                                          <div key={subKey} className="flex">
                                            <span className="w-40 font-montserrat text-xs text-gray-500">
                                              {subKey.replace(/_/g, " ")}:
                                            </span>
                                            <span className="font-opensans text-sm text-gray-950">
                                              {Array.isArray(subValue)
                                                ? subValue.join(", ")
                                                : String(subValue)}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="pl-4 font-opensans text-sm text-gray-950">
                                        {Array.isArray(value) ? (
                                          <div className="flex flex-wrap gap-1">
                                            {value.map((item, i) => (
                                              <span
                                                key={i}
                                                className="inline-block rounded bg-gray-100 px-2 py-1 text-xs text-gray-800"
                                              >
                                                {item}
                                              </span>
                                            ))}
                                          </div>
                                        ) : (
                                          String(value)
                                        )}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ),
                        )}
                    </div>
                  </div>

                  {/* Authentication Guidelines */}
                  <div className="rounded-lg bg-gray-50 p-5">
                    <div className="mb-5 flex items-center space-x-3">
                      <div className="rounded-full bg-amber-100 p-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      </div>
                      <h3 className="font-montserrat font-semibold text-primary">
                        Authentication Guidelines
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {/* For items with Authenticity_Verification_Guide structure */}
                      {item.Authenticity_Verification_Guide &&
                        Object.entries(
                          item.Authenticity_Verification_Guide,
                        ).map(([category, items]) => (
                          <div
                            key={category}
                            className="rounded-lg bg-white p-4 shadow-sm"
                          >
                            <h4 className="mb-3 border-b border-gray-100 pb-2 font-montserrat font-medium text-primary">
                              {category.replace(/_/g, " ")}
                            </h4>
                            <ul className="space-y-2">
                              {Array.isArray(items) &&
                                items.map((point, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                                    <span className="font-opensans text-sm text-gray-950">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}

                      {/* For items with Authentication structure */}
                      {item.Authentication &&
                        Object.entries(item.Authentication).map(
                          ([category, items]) => (
                            <div
                              key={category}
                              className="rounded-lg bg-white p-4 shadow-sm"
                            >
                              <h4 className="mb-3 border-b border-gray-100 pb-2 font-montserrat font-medium text-primary">
                                {category.replace(/_/g, " ")}
                              </h4>
                              <ul className="space-y-2">
                                {Array.isArray(items) &&
                                  items.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                                      <span className="font-opensans text-sm text-gray-950">
                                        {point}
                                      </span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ),
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
