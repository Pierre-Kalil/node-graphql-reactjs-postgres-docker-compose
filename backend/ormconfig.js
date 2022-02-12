const devEnv = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: "5432",
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  entities: ["./entities/**/*.ts"],
  migrations: ["./database/migrations/*.ts"],
  cli: {
    migrationsDir: "./database/migrations",
  },
  logging: true,
  synchronize: false,
};

module.exports = devEnv;
