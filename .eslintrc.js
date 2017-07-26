module.exports = {
    "extends": "airbnb", // https://www.npmjs.com/package/eslint-config-airbnb

    "plugins": ["react"],

    "parser": "typescript-eslint-parser",

    // http://eslint.org/docs/rules/
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "rules": {
        "react/jsx-filename-extension": ["error", {"extensions": [".jsx", ".tsx"]}],

        "import/extensions": ["error", "always", {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never"
        }]
    },

    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};