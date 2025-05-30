/*
  Warnings:

  - You are about to drop the column `url` on the `Game` table. All the data in the column will be lost.
  - Added the required column `src` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "url",
ADD COLUMN     "src" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Target" ADD COLUMN     "src" TEXT NOT NULL;
