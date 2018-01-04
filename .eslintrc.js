module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'eslint:recommended', 'prettier', 'plugin:react/recommended','plugin:react-native/recommended'],
  plugins: ['prettier', 'react', 'react-native', "flowtype"],
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    camelcase : [2, {'properties': 'always'}],
    indent: [2, 2],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    properties: [1, 'always'],
    "no-trailing-spaces": 1, 
    'no-var': 0,   // require let or const instead of var (off by default)
    'linebreak-style': [2, 'unix'],
    'prettier/prettier': [2, null, '@prettier'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-boolean-value' : ['error', 'always'],
    'react/jsx-equals-spacing': [1, 'always'],
    'react/jsx-filename-extension': [1, { 'extensions' : ['.js', '.jsx'] }],
    'react/jsx-handler-names': [2, {
		  'eventHandlerPropPrefix':'true'
    }], // all function names must start with on like - onClick , onPress.
    'react/jsx-no-bind': [2, {
		  'ignoreRefs': true,
		  'allowArrowFunctions': true,
		  'allowFunctions':false,
		  'allowBind': false
		}], // function binding will not work.
    'react/jsx-no-literals': 'error',
    'react/no-inline-styles':"error"
  }
};
  