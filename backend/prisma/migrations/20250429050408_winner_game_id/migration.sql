/*
  Warnings:

  - Added the required column `gameId` to the `Winner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Winner" ADD COLUMN     "gameId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Winner" ADD CONSTRAINT "Winner_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
