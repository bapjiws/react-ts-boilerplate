// module.exports = {
//     "extends": ["prettier", "prettier/react"], //,
//
//     "plugins": ["prettier", "react"], // , "react"
//
//     "parser": "typescript-eslint-parser", // babel-eslint
//
//     // http://eslint.org/docs/rules/
//     // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
//     "rules": {
//         "prettier/prettier": "error",
//
//         // "strict": 0,
//         // "comma-dangle": 0,
//         //
//         // "react/jsx-filename-extension": ["error", {"extensions": [".jsx", ".tsx"]}],
//         //
//         // "import/extensions": ["error", "always", {
//         //     "js": "never",
//         //     "jsx": "never",
//         //     "ts": "never",
//         //     "tsx": "never"
//         // }],
//         //
//         // "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
//
//     },
//
//     "settings": {
//         "import/resolver": {
//             "node": {
//                 "extensions": [".js", ".jsx", ".ts", ".tsx"]
//             }
//         },
//
//         "import/core-modules": [ "autoprefixer" ],
//     }
// };

module.exports = {
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "react",
        "prettier"
    ],
    "parser": "typescript-eslint-parser" ,
    "rules": {
        "prettier/prettier":  ["error", {"singleQuote": true}],

        "react/jsx-filename-extension": ["error", {"extensions": [".jsx", ".tsx"]}],

        "import/extensions": ["error", "always", {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
        }],

        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        },

        "import/core-modules": [ "autoprefixer" ],
    }
};