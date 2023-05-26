-- CreateEnum
CREATE TYPE "METRIC_NAME" AS ENUM ('INVOCATION_COUNT', 'ERROR_COUNT', 'DEAD_LETTER_ERROR_COUNT', 'AVG_DURATION', 'THROTTLE_COUNT', 'CONCURRENT_EXECUTIONS_COUNT', 'UNRESERVED_CONCURRENT_EXECUTIONS_COUNT');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "google_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Metric" (
    "metric_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "metricName" "METRIC_NAME" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "period" INTEGER NOT NULL,
    "metricData" TEXT[],

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("metric_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
