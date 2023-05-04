/*
  Warnings:

  - You are about to drop the column `fecha` on the `orden` table. All the data in the column will be lost.
  - You are about to alter the column `total` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - Added the required column `date` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `fecha`,
    ADD COLUMN `date` VARCHAR(191) NOT NULL,
    MODIFY `total` DOUBLE NOT NULL;
