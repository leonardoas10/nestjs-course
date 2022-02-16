const { MigrationInterface, QueryRunner, TableColumn } = require('typeorm');

module.exports = class UserAddingTest1645043163256 {
  async up(queryRunner) {
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'test',
        type: 'boolean',
      }),
    );
  }

  async down(queryRunner) {
    await queryRunner.dropColumn(
      'user',
      new TableColumn({
        name: 'test',
      }),
    );
  }
};
