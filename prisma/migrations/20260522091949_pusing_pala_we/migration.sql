-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "cloudinaryId" TEXT;
