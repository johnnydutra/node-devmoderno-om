import { defineConfig } from 'drizzle-kit';
import { resolve } from 'path';

export default defineConfig({
  out: resolve(process.cwd(), 'src', 'db', 'drizzle', 'migrations'),
  schema: resolve(process.cwd(), 'src', 'db', 'drizzle', 'schemas.ts'),
  dialect: 'sqlite',
  dbCredentials: {
    url: resolve(process.cwd(), 'db.sqlite3'),
  },
});
