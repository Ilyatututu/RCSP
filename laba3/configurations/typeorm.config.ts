import { DataSource } from 'typeorm';

const ormConfig: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'education',
  username: 'education',
  password: '12345678',
  entities: ['dist/catalogs/entities/catalog.entity'],
  logging: true,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: ['dist/src/migrations/*{.ts,.js}'],
});
export default ormConfig;
