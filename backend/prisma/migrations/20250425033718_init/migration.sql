-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "positionX" INTEGER NOT NULL,
    "positionY" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Winner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Winner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
