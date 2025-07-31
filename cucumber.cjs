// cucumber.cjs
module.exports = {
  requireModule: ['ts-node/register'],
  import: [
    'tests/support/world.ts',
    'tests/step-definitions/**/*.ts'
  ],
  paths: ['tests/features/*.feature']
}