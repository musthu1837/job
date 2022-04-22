module.exports = {
    presets: ["@babel/preset-react"],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "module-resolver",
        {
          "root": ["."],
          "alias": {
            "@actions": "./src/actions",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@enums": "./src/enums",
            "@interfaces": "./src/interfaces",
            "@models": "./src/models",
            "@reducers": "./src/reducers",
            "@sagas": "./src/sagas",
            "@services": "./src/services",
            "@store": "./src/store",
            "@utils": "./src/utils",
            "@validators": "./src/validators"
          }
        }
      ]
    ]
  };
  