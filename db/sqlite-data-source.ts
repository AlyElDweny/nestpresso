import { DataSourceOptions, DataSource } from 'typeorm';

export const sqliteDataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'db/db.sqlite',
  entities: ['dist/**/*.sqliteEntity.js'],
  migrations: ['dist/db/sqliteMigrations/*.js'],
};
const sqliteDataSource = new DataSource(sqliteDataSourceOptions);

export default sqliteDataSource;
