module.exports = {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^react",
    "^react-native",
    "^moment",
    "<THIRD_PARTY_MODULES>",
    "",
    "^[./]"
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderSortSpecifiers: true,
  importOrderMergeDuplicateImports: true
};