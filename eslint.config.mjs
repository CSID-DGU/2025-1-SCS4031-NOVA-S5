import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: require("eslint-plugin-import"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      prettier: prettierPlugin,
    },
    rules: {
      rules: {
        semi: ["warn", "always"], // 세미콜론 추가
        quotes: ["error", "double"], // 더블 따옴표 사용
        "no-unused-vars": "warn", // 사용되지 않는 변수 경고
        "react/react-in-jsx-scope": "off", // React JSX scope 관련 경고 끄기
        "@typescript-eslint/no-explicit-any": "off", // any 타입 사용 허용
        "react/prop-types": "off", // prop-types 사용하지 않기
        "@typescript-eslint/no-unused-vars": "warn", // 사용되지 않는 변수 경고
        "react/no-unused-state": "error", // 사용되지 않는 state는 에러
        "array-callback-return": "off", // array-callback-return 규칙 끄기
        "react/self-closing-comp": "warn", // self-closing tag에 대한 경고
        "@typescript-eslint/ban-ts-comment": "off", // ts-comment 관련 규칙 끄기
        "prettier/prettier": "error",
      },
    },
  },
];

export default eslintConfig;
