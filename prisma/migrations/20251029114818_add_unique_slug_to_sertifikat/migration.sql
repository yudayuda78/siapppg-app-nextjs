/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `datasertifikat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `sertifikat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "datasertifikat_slug_key" ON "datasertifikat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "event_slug_key" ON "event"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "sertifikat_slug_key" ON "sertifikat"("slug");
