module.exports = {
  env: {
    'jsx-control-statements/jsx-control-statements': true,
  },
  rules: {
    'jsx-control-statements/jsx-choose-not-empty': 1,
    'jsx-control-statements/jsx-for-require-each': 1,
    'jsx-control-statements/jsx-for-require-of': 1,
    'jsx-control-statements/jsx-if-require-condition': 1,
    'jsx-control-statements/jsx-otherwise-once-last': 1,
    'jsx-control-statements/jsx-use-if-tag': 1,
    'jsx-control-statements/jsx-when-require-condition': 1,
    'jsx-control-statements/jsx-jcs-no-undef': 2,
    'react/jsx-no-undef': [2, { 'allowGlobals': true }],
  },
  extends: [
    'plugin:jsx-control-statements/recommended',
  ],
  plugins: [
    'jsx-control-statements',
  ],
};
