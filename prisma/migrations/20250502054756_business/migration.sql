-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "businessNetwork" TEXT NOT NULL DEFAULT 'none',
ADD COLUMN     "businessStructure" TEXT NOT NULL DEFAULT 'none',
ADD COLUMN     "businessWebsite" TEXT NOT NULL DEFAULT 'none';
