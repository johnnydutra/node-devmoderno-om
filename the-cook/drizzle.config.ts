import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

export default defineConfig({
  out: './src/db/drizzle/migrations',
  schema: './src/db/drizzle/schemas.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: resolve(process.cwd(), 'db.sqlite3'),
  },
});
