/*
  Warnings:

  - A unique constraint covering the columns `[userId,bookId]` on the table `UserReview` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserReview_userId_bookId_key" ON "UserReview"("userId", "bookId");
