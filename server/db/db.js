import pg from 'pg'
const { Pool } = pg;

const connectionString =
  "postgresql://unearthed_tu8p_user:1th6nZ5RGURa6bVQZ7EbGDiAl1WicdHx@dpg-d6kdpingi27c73bakcdg-a.oregon-postgres.render.com/unearthed_tu8p";

export const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  },
});

export default pool;
