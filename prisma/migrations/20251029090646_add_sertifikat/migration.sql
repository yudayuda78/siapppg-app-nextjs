/*
  Warnings:

  - Added the required column `fasilitas` to the `datasertifikat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "datasertifikat" ADD COLUMN     "fasilitas" TEXT NOT NULL,
ADD COLUMN     "jenissertif" TEXT;

-- CreateTable
CREATE TABLE "sertifikat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "sertifikat_pkey" PRIMARY KEY ("id")
);
