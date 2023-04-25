import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST as string,
    port: parseInt(process.env.POSTGRES_PORT as string, 10) as number,
    username: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    database: process.env.POSTGRES_DATABASE as string,
    synchronize: false,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    migrationsRun: true
};

export = config;