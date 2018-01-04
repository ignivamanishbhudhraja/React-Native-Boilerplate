module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'eslint:recommended', 'prettier',"plugin:react-native/all",'plugin:react/recommended', "plugin:flowtype/recommended"],
  plugins: ['prettier', 'react', 'react-native', "flowtype"],
  "parser": "babel-eslint",
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  globals: {

  },
  rules: {
    camelcase : [2, {'properties': 'always'}],
    indent: [2, 2],
    quotes: [1, 'single'],
    semi: [1, 'always'],
    properties: [1, 'always'],
    "no-delete-var": 0,              // disallow deletion of variables
    "no-undef": 2,                   // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undefined": 2,               // disallow use of undefined variable (off by default)
    "no-undef-init": 2,              // disallow use of undefined when initializing variables
    "no-unused-vars": [2, {"vars": "all", "args": "none"}], // disallow declaration of variables that are not used in the code
    "no-trailing-spaces": 2, 
    'no-var': 2,   // require let or const instead of var (off by default)
    'linebreak-style': [2, 'unix'],
    'prettier/prettier': [2, null, '@prettier'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-boolean-value' : ['error', 'always'],
    'react/jsx-equals-spacing': [1, 'always'],
    'react/jsx-filename-extension': [0, { 'extensions' : ['.js', '.jsx'] }],
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
    'react/no-inline-styles':"error",

    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,

    // Flow Plugin
    // The following rules are made available via `eslint-plugin-flowtype`
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  }
};
  