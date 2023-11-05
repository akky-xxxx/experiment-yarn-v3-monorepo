module.exports = {
  version: "0.2",
  language: "en",
  dictionaries: ["packages"],
  dictionaryDefinitions: [
    {
      name: "packages",
      path: "./config/cspell/packages.txt",
    },
  ],
  words: ["firstname", "lastname", "soledad", "lakin"], // サンプルコードのためここで除外
  ignorePaths: ["**/libs/**"],
}
