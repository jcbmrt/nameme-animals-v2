import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(env: any) {
  if (!env?.DB) {
    throw new Error('Database binding not found');
  }
  return drizzle(env.DB, { schema });
}
