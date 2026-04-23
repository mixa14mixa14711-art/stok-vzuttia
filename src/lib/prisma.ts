import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaBootstrapped?: boolean;
};

function createClient() {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Bootstrap schema on serverless cold start when DB file is ephemeral (e.g. /tmp on Vercel).
// No-op if tables already exist.
async function bootstrapSchema(client: PrismaClient) {
  await client.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT PRIMARY KEY NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT,
    "phone" TEXT,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);
  await client.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "Order" (
    "id" TEXT PRIMARY KEY NOT NULL,
    "userId" TEXT,
    "customerName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "city" TEXT NOT NULL,
    "np" TEXT NOT NULL,
    "payment" TEXT NOT NULL,
    "comment" TEXT,
    "total" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL
  )`);
  await client.$executeRawUnsafe(`CREATE TABLE IF NOT EXISTS "OrderItem" (
    "id" TEXT PRIMARY KEY NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "size" TEXT,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE
  )`);
}

let bootstrapPromise: Promise<void> | null = null;
export function ensureSchema(): Promise<void> {
  if (globalForPrisma.prismaBootstrapped) return Promise.resolve();
  if (!bootstrapPromise) {
    bootstrapPromise = bootstrapSchema(prisma)
      .then(() => {
        globalForPrisma.prismaBootstrapped = true;
      })
      .catch((e) => {
        bootstrapPromise = null;
        throw e;
      });
  }
  return bootstrapPromise;
}
