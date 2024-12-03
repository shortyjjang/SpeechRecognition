import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // any 타입 허용
      "@typescript-eslint/no-unused-expressions": "off", // 사용하지 않는 표현식 허용
      "@typescript-eslint/no-unused-vars": "off", //사용하지 않는 모듈 허용
      "@next/next/no-img-element": "off", //이미지 허용
      'react/prop-types': 'off', //검증오류 무시
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
    },
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: ['next/core-web-vitals'],
  },
  pluginReact.configs.flat.recommended,
];