import { DataSourceOptions, DataSource } from 'typeorm';

export const pgDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'password1234',
  database: 'nestpresso',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/pgMigrations/*.js'],
};

const pgDataSource = new DataSource(pgDataSourceOptions);

export default pgDataSource;
