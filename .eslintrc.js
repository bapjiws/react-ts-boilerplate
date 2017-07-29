module.exports = {
    "extends": "airbnb", // https://www.npmjs.com/package/eslint-config-airbnb

    "plugins": ["react"],

    "parser": "typescript-eslint-parser",

    // http://eslint.org/docs/rules/
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "rules": {
        "strict": 0,

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