/*
  Warnings:

  - You are about to drop the column `available` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `cloudinaryId` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "cloudinaryId" TEXT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "available",
DROP COLUMN "cloudinaryId";
