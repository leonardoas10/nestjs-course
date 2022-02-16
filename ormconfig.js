let dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      // type: 'sqlite',
      // database: 'db.sqlite',
      type: 'mariadb',
      host: '',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: ['**/*.entity.js'],
      migrationsRun: false,
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      database:
        'postgres://vneprvubwpxdun:78c6f39a947b3634372af23768c3bfdcd5b126b900e071010957301dcdb4891a@ec2-3-228-222-169.compute-1.amazonaws.com:5432/d51liku6pg6ddc',
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;

  default:
    throw new Error('unknow enviroment');
}

module.exports = dbConfig;
