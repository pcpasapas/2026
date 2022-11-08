module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended'

        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        // override/add rules settings here, such as:
        // "vue/no-unused-vars": "error",
        'vue/require-prop-types': 'off',
        'vue/html-self-closing': 'off',
        indent: ['error', 4],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 3
                },
                multiline: {
                    max: 2
                }
            }
        ],
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea', 'p', 'button', 'td', 'Link']
            }
        ],
        'vue/multi-word-component-names': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/html-indent': 'off',
    },
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: {},
        sourceType: 'module'
    }
}
