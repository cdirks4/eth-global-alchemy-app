-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tikTokOpenId" TEXT,
ADD COLUMN     "tikTokUserName" TEXT,
ALTER COLUMN "walletAddr" DROP NOT NULL;
