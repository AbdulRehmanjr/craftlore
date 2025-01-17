"use client";
import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  Link,
  Building,
  FileCheck,
  Download,
  Cpu,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { formatAmount } from "~/lib/utils";

const formSchema = z.object({
  productCode: z
    .string({ required_error: "Product code is required" })
    .refine((value) => value === "12345", {
      message: "The product code must be exactly 12345",
    }),
});
const entryCodes = [
  { title: "Raw Material", code: "RM-2024-001" },
  { title: "Artisan Registration", code: "AR-2024-001" },
  { title: "Certification Checkpoint", code: "CC-2024-001" },
  { title: "Manufacturing and Finishing", code: "MF-2024-001" },
  { title: "Distribution Tracking", code: "DT-2024-001" },
  { title: "Logistic Tracking", code: "LT-2024-001" },
  { title: "Carbon Footprint Tracking", code: "CF-2024-001" },
  { title: "Consumer Authentication", code: "CA-2024-001" },
];
export const BlockchainForm = () => {
  const [verificationResult, setVerificationResult] =
    useState<VerificationResultProps | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleVerification = () => {
    const result: VerificationResultProps = {
      authentic: true,
      authenticityScore: 100,
      blockchainDetails: {
        hash: "0x7f9e8d...3b2a1c",
        timestamp: "2025-01-15 14:30:25 GMT",
        network: "Ethereum Mainnet",
        smartContract: "0x1234...5678",
        verifications: 24,
        lastVerified: "2025-01-30 09:15:00 GMT",
      },
      materialVerification: {
        primaryMaterial: "Pashmina Wool",
        sourceLocation: "Ladakh Highlands",
        sourcingDate: "2025-01-01",
        batchNumber: "PSM-2025-001",
        qualityGrade: "Premium",
        testResults: {
          purity: "99.8%",
          micronCount: "12-14",
          testDate: "2025-01-02",
          labCertification: "WQTL-2025-789",
        },
        sustainabilityMetrics: {
          sourcingEthics: "Verified Fair Trade",
          environmentalImpact: "Low",
          carbonFootprint: "Minimal - Local Sourcing",
        },
      },
      journeyTracking: {
        currentStage: "Completed",
        lastUpdated: "2025-02-15 16:45:00 GMT",
        totalStages: 8,
        stagesCompleted: 8,
        locationHistory: [
          {
            stage: "Raw Material Collection",
            location: "Ladakh",
            timestamp: "2025-01-01 09:00:00 GMT",
            verifiedBy: "Mohammad Yaseen",
            gpsCoordinates: "34.1526° N, 77.5771° E",
          },
          {
            stage: "Material Testing",
            location: "Srinagar Lab",
            timestamp: "2025-01-02 11:30:00 GMT",
            verifiedBy: "Dr. Sarah Khan",
            gpsCoordinates: "34.0837° N, 74.7973° E",
          },
          {
            stage: "Craftmanship",
            location: "Craft Workshop",
            timestamp: "2025-01-05 08:00:00 GMT",
            verifiedBy: "Abdul Hamid",
            gpsCoordinates: "34.0845° N, 74.7985° E",
          },
        ],
      },
      paymentTracking: {
        craftsman: {
          totalDue: 15000,
          totalPaid: 10000,
          paymentStatus: "Fully Paid",
          transactions: [
            {
              amount: 5000,
              date: "2025-01-01",
              type: "Advance",
              transactionId: "TXN-001",
              status: "Completed",
              verifiedBy: "Payment System",
            },
            {
              amount: 5000,
              date: "2025-01-15",
              type: "Milestone",
              transactionId: "TXN-002",
              status: "Completed",
              verifiedBy: "Payment System",
            },
            {
              amount: 5000,
              date: "2025-01-30",
              type: "Final",
              transactionId: "TXN-003",
              status: "Completed",
              verifiedBy: "Payment System",
            },
          ],
          wageMetrics: {
            hourlyRate: 500,
            totalHours: 30,
            bonuses: 1500,
            marketRateComparison: "120%",
            lastWageReview: "2025-01-01",
          },
        },
        marketTransaction: {
          buyerId: "BUY-2025-456",
          sellerId: "ART-2025-123",
          productPrice: 25000,
          transactionStatus: "Completed",
          paymentFlow: [
            {
              stage: "Booking Amount",
              amount: 5000,
              status: "Completed",
              date: "2025-02-01",
            },
            {
              stage: "Material Cost",
              amount: 10000,
              status: "Completed",
              date: "2025-02-10",
            },
            {
              stage: "Final Payment",
              amount: 10000,
              status: "Completed",
              date: "2025-02-15",
            },
          ],
          escrowDetails: {
            enabled: true,
            releaseConditions: "Quality Verification",
            status: "Released",
          },
        },
      },
      giCertification: {
        number: "GI/KH/2025/789",
        issuanceDate: "2025-01-15",
        validUntil: "2025-01-14",
        category: "Kashmir Pashmina",
        verificationAuthority: "Geographical Indications Registry",
        specifications: [
          "100% Pure Pashmina",
          "Traditional Weaving Methods",
          "Authentic Kashmir Origin",
          "Natural Dyes Used",
          "Hand-Spun Yarn",
        ],
      },
      paymentDetails: {
        status: "Completed",
        lastPayment: "2025-01-30",
        totalAmount: 15000,
        method: "Direct Bank Transfer",
        transactionId: "TXN-2025-456",
        history: [
          { date: "2025-01-01", amount: 5000, type: "Advance" },
          { date: "2025-01-15", amount: 5000, type: "Milestone" },
          { date: "2025-01-30", amount: 5000, type: "Final" },
        ],
      },
      productionDetails: {
        startDate: "2025-01-01",
        completionDate: "2025-02-15",
        location: "Srinagar, Kashmir",
        gpsCoordinates: "34.0837° N, 74.7973° E",
        materials: {
          primary: "Pashmina Wool",
          source: "Ladakh Highlands",
          quality: "Premium Grade",
        },
        techniques: [
          "Traditional Hand Spinning",
          "Natural Dyeing",
          "Handloom Weaving",
        ],
      },
      craftsman: {
        name: "Mohammad Ashraf",
        id: "ART-2025-1234",
        experience: "25 years",
        certification: "Master Craftsman",
        wageCompliance: 100,
        paymentHistory: "Regular",
        ratings: 4.9,
      },
      exploitationPrevention: {
        wageMonitoring: {
          status: "Compliant",
          lastAudit: "2025-01-15",
          averageWage: "Above Industry Standard",
          timely: true,
        },
        compliance: {
          labor: "Full Compliance",
          safety: "Standards Met",
          benefits: "Provided",
        },
      },
      marketAccess: {
        directListing: true,
        platformVerified: true,
        buyerRating: 4.8,
        transactions: 156,
        averageResponse: "2 hours",
      },
      cost: {
        materialCost: {
          amount: 3000,
          percentage: 20,
        },
        craftsmanPayment: {
          amount: 4500,
          percentage: 60,
        },
        manufacturerProfit: {
          amount: 3000,
          percentage: 10,
        },
        retailerProfit: {
          amount: 4500,
          percentage: 10,
        },
      },
    };
    setVerificationResult(result);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-primary">
          Product Blockchain Verification
        </CardTitle>
        <CardDescription className="text-secondary">
          For the demo, use a placeholder product ID as 12345
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form
            className="flex items-center justify-between gap-2"
            onSubmit={form.handleSubmit(handleVerification)}
          >
            <FormField
              control={form.control}
              name="productCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="w-full text-gray-950"
                      placeholder="Enter product code"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button>Verify</Button>
          </form>
        </Form>

        {verificationResult && (
          <div className="space-y-6">
            {/* Authentication Status */}
            <Alert className="border-green-200 bg-green-50 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Authentic Product</AlertTitle>
              <AlertDescription>
                Blockchain Verified with {verificationResult.authenticityScore}%
                Confidence
              </AlertDescription>
            </Alert>

            {/* Blockchain Verification */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Link className="h-5 w-5" />
                  Product Blockchain Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Contract Address</p>
                    <p className="font-mono text-sm font-medium">
                      {verificationResult.blockchainDetails.smartContract}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Verifications</p>
                    <p className="font-medium">
                      {verificationResult.blockchainDetails.verifications}{" "}
                      confirmations
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary">Last Verified</p>
                  <p className="font-medium">
                    {verificationResult.blockchainDetails.lastVerified}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Material Verification */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FileCheck className="h-5 w-5" />
                  Product Material Source Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Material Type</p>
                    <p className="font-medium">
                      {verificationResult.materialVerification.primaryMaterial}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Source</p>
                    <p className="font-medium">
                      {verificationResult.materialVerification.sourceLocation}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary">Test Results</p>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-secondary">Purity: </span>
                        <span className="font-medium">
                          {
                            verificationResult.materialVerification.testResults
                              .purity
                          }
                        </span>
                      </div>
                      <div>
                        <span className="text-secondary">Micron: </span>
                        <span className="font-medium">
                          {
                            verificationResult.materialVerification.testResults
                              .micronCount
                          }
                        </span>
                      </div>
                      <div>
                        <span className="text-secondary">Lab Cert: </span>
                        <span className="font-medium">
                          {
                            verificationResult.materialVerification.testResults
                              .labCertification
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Journey Tracking */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  Product Journey Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-secondary">Progress</p>
                    <p className="font-medium">
                      {verificationResult.journeyTracking.stagesCompleted} of{" "}
                      {verificationResult.journeyTracking.totalStages} stages
                    </p>
                  </div>
                  <Badge variant="default">
                    {verificationResult.journeyTracking.currentStage}
                  </Badge>
                </div>
                <div className="space-y-4">
                  {verificationResult.journeyTracking.locationHistory.map(
                    (stage, index) => (
                      <div
                        key={index}
                        className="space-y-2 rounded-lg bg-gray-50 p-3"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{stage.stage}</span>
                          <Badge variant="outline">{stage.location}</Badge>
                        </div>
                        <div className="text-sm text-secondary">
                          <p>
                            Verified by:{" "}
                            <span className="text-gray-950">
                              {stage.verifiedBy}
                            </span>
                          </p>
                          <p>
                            Time:{" "}
                            <span className="text-gray-950">
                              {stage.timestamp}
                            </span>
                          </p>
                          <p className="font-mono text-xs">
                            GPS:{" "}
                            <span className="text-gray-950">
                              {stage.gpsCoordinates}
                            </span>
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* GI Certification */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FileCheck className="h-5 w-5" />
                  GI Certification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Certificate Number</p>
                    <p className="font-medium">
                      {verificationResult.giCertification.number}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary">Specifications</p>
                  <div className="flex flex-wrap gap-2">
                    {verificationResult.giCertification.specifications.map(
                      (spec, index) => (
                        <Badge key={index} variant="default">
                          {spec}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product detail */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  Production Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Location</p>
                    <p className="font-medium">
                      {verificationResult.productionDetails.location}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Duration</p>
                    <p className="font-medium">
                      {verificationResult.productionDetails.startDate} to{" "}
                      {verificationResult.productionDetails.completionDate}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary">Techniques Used</p>
                  <div className="flex flex-wrap gap-2">
                    {verificationResult.productionDetails.techniques.map(
                      (technique, index) => (
                        <Badge key={index} variant="outline">
                          {technique}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Craftsman Details */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  Craftsman Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Artisan</p>
                    <p className="font-medium">
                      {verificationResult.craftsman.name}
                    </p>
                    <p className="text-sm text-secondary">
                      {verificationResult.craftsman.experience} experience
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Certification</p>
                    <Badge>{verificationResult.craftsman.certification}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-secondary">Wage Compliance</p>
                  <Progress
                    value={verificationResult.craftsman.wageCompliance}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cost analysis */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <DollarSign className="h-5 w-5" />
                  Cost & Profit Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-blue-600">Material Cost</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {verificationResult.cost.materialCost.percentage}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="text-sm text-green-600">Craftsman Payment</p>
                    <p className="text-2xl font-bold text-green-700">
                      {verificationResult.cost.craftsmanPayment.percentage}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4">
                    <p className="text-sm text-purple-600">
                      Manufacturer Profit
                    </p>
                    <p className="text-2xl font-bold text-purple-700">
                      {verificationResult.cost.manufacturerProfit.percentage}%
                    </p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4">
                    <p className="text-sm text-amber-600">Retailer Profit</p>
                    <p className="text-2xl font-bold text-amber-700">
                      {verificationResult.cost.retailerProfit.percentage}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Payment  */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <DollarSign className="h-5 w-5" />
                  Product Payment Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">
                    Craftsman Payment Status
                  </h3>
                  <Alert
                    className={
                      verificationResult.paymentTracking.craftsman
                        .paymentStatus === "Fully Paid"
                        ? "border-green-200 bg-green-50"
                        : "border-yellow-200 bg-yellow-50"
                    }
                  >
                    <AlertTitle>
                      Payment Status:{" "}
                      {
                        verificationResult.paymentTracking.craftsman
                          .paymentStatus
                      }
                    </AlertTitle>
                    <AlertDescription>
                      Total Paid: ₹
                      {verificationResult.paymentTracking.craftsman.totalPaid}{" "}
                      of ₹
                      {verificationResult.paymentTracking.craftsman.totalDue}
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Payment History</p>
                    {verificationResult.paymentTracking.craftsman.transactions.map(
                      (tx, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 rounded bg-gray-50 p-2"
                        >
                          <span className="text-primary">{tx.type}</span>
                          <span className="font-medium">
                            ₹{formatAmount(tx.amount, "X")}
                          </span>
                          <span className="text-sm text-secondary">
                            {tx.date}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="mb-2 font-medium">Wage Metrics</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-secondary">Hourly Rate: </span>
                        <span className="font-medium">
                          ₹
                          {formatAmount(
                            verificationResult.paymentTracking.craftsman
                              .wageMetrics.hourlyRate,
                            "X",
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-primary">
                    Buyer-Seller Transaction
                  </h3>
                  <div className="flex justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-secondary">
                        Transaction Status
                      </p>
                      <Badge variant="default">
                        {
                          verificationResult.paymentTracking.marketTransaction
                            .transactionStatus
                        }
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-secondary">Total Amount</p>
                      <p className="font-medium">
                        ₹
                        {formatAmount(
                          verificationResult.paymentTracking.marketTransaction
                            .productPrice,
                          "X",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Payment Flow</p>
                    {verificationResult.paymentTracking.marketTransaction.paymentFlow.map(
                      (payment, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 gap-10 bg-gray-50 p-2"
                        >
                          <p className="text-primary">{payment.stage}</p>
                          <p className="font-medium">
                            ₹{formatAmount(payment.amount, "X")}
                          </p>
                          <Badge variant="outline" className="w-fit">
                            {payment.status}
                          </Badge>
                        </div>
                      ),
                    )}
                  </div>
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertTitle>Escrow Protection</AlertTitle>
                    <AlertDescription>
                      Status:{" "}
                      {
                        verificationResult.paymentTracking.marketTransaction
                          .escrowDetails.status
                      }
                      <br />
                      Release Condition:{" "}
                      {
                        verificationResult.paymentTracking.marketTransaction
                          .escrowDetails.releaseConditions
                      }
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Direct Market Access */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building className="h-5 w-5" />
                  Market Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Platform Status</p>
                    <Badge variant="default">Verified Seller</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">Transactions</p>
                    <p className="font-medium">
                      {verificationResult.marketAccess.transactions} completed
                    </p>
                  </div>
                </div>
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertTitle className="text-blue-600">
                    Direct Market Access Enabled
                  </AlertTitle>
                  <AlertDescription className="text-blue-600">
                    No middlemen involved. Direct buyer-artisan connection
                    available.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Cpu className="h-5 w-5" />
                  Kashmir Handicrafts Block Chain Entry Code 
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 ">
                  {entryCodes.map((entry, index) => (
                    <div
                      key={index}
                      className="rounded-lg border bg-gray-50 p-3"
                    >
                      <p className="text-sm text-gray-600">{entry.title}</p>
                      <p className="mt-1 font-mono font-medium">{entry.code}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {verificationResult && (
          <Button type="button" variant="secondary">
            <Download /> Your Blockchain Product Tracebility Report
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
