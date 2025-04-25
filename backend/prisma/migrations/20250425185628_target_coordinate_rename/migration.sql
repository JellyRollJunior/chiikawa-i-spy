/*
  Warnings:

  - You are about to drop the column `positionX` on the `Target` table. All the data in the column will be lost.
  - You are about to drop the column `positionY` on the `Target` table. All the data in the column will be lost.
  - Added the required column `x` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Target" DROP COLUMN "positionX",
DROP COLUMN "positionY",
ADD COLUMN     "x" INTEGER NOT NULL,
ADD COLUMN     "y" INTEGER NOT NULL;
