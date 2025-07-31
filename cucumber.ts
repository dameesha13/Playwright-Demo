export default {
  default: [
    '--import-module ts-node/register',
    '--import tests/support/world.ts', 
    '--import tests/step-definitions/**/*.ts',
    'features/**/*.feature'
  ].join(' ')
};
