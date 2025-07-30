// cucumber.ts
export default {
  default: [
    '--require-module ts-node/register',
    '--import tests/step-definitions/**/*.ts',
    'features/**/*.feature'
  ].join(' ')
};