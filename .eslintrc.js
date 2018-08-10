module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'react-native',
  ],
  'rules': {
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    'semi': 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx']}],
    'parserOptions': {
      'ecmaFeatures': {
        'jsx': true,
      },
    },
  },
  'parser': 'babel-eslint',
};