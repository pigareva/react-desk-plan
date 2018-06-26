module.exports = {
    "extends": "airbnb",
    "plugins": ["jest"],
    "env": {
      "browser": true,
      "jest/globals": true
    },
    "rules": {
        "no-unused-vars": 1,
        "linebreak-style": 0,
        "no-underscore-dangle": 0,
        "no-console": 1,
    }
};