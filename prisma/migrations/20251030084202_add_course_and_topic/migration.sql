/*
  Warnings:

  - You are about to drop the `datasertifikat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sertifikat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."datasertifikat";

-- DropTable
DROP TABLE "public"."event";

-- DropTable
DROP TABLE "public"."sertifikat";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "img" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "linkDaftar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sertifikat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Sertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Datasertifikat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "instansi" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "kegiatan" TEXT NOT NULL,
    "fasilitas" TEXT NOT NULL,
    "jenissertif" TEXT,

    CONSTRAINT "Datasertifikat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "fasilitas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Sertifikat_slug_key" ON "Sertifikat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Datasertifikat_slug_key" ON "Datasertifikat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
