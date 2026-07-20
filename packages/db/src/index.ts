import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!);

export { eq } from 'drizzle-orm';

export * from './schema/users.js';
export * from './schema/products.js';
export * from './schema/inventory.js';

