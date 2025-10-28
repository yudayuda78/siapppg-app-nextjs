-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "img" TEXT,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "linkDaftar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datasertifikat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "instansi" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "kegiatan" TEXT NOT NULL,

    CONSTRAINT "datasertifikat_pkey" PRIMARY KEY ("id")
);
