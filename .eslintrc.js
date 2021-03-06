module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true
  },
  "extends": [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "plugins": [
      "standard",
      "promise",
      "react",
  ],
  "rules": {
    "semi": 0,
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "no-unused-vars": "warn",
    "no-console": 0,
    "no-unexpected-multiline": "warn",
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "16.4.0",
    }
  },
};
