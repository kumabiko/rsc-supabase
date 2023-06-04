/** @type {import('prettier').Config} */
module.exports = {
  //prettier
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  //@ianvs/prettier-plugin-sort-imports
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '«THIRD_PARTY _MODULES>',
    '^types$',
    '^@/components/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.1.0',
};
