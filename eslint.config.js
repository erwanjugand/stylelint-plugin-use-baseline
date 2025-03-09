import importPlugin from "eslint-plugin-import";
import stylelintConfig from "eslint-config-stylelint";
import stylelintJestConfig from "eslint-config-stylelint/jest";

export default [
  {
    ignores: ["dist/**"],
  },
  ...stylelintConfig,
  ...stylelintJestConfig,
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        testRule: "readonly",
        testRuleConfigs: "readonly",
      },
    },
    rules: {
      "import/extensions": ["error", "ignorePackages"],
      "jest/no-standalone-expect": [
        "error",
        { additionalTestBlockFunctions: ["testFn"] },
      ],
    },
  },
];
