-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "walletAddr" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
