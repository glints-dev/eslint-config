module.exports = {
  rules: {
    // React
    'react/display-name': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'warn',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // React/JSX
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-key': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-tag-spacing': ['warn', {
      beforeSelfClosing: 'always',
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 'warn',
  },
  plugins: [
    'react',
    "react-hooks",
  ],
};
