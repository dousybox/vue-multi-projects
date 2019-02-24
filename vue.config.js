const fs = require("fs");
const glob = require("glob");
const path = require("path");
function fullPath(dir) {
  return path.join(__dirname, dir);
}

const pagesPath = `src/pages`;
if (!fs.existsSync(pagesPath)) {
  throw `can not find the path named ${process.argv[3]}`;
}

/* collect pages info */
let pages = {};
glob.sync(`${pagesPath}/**/*app.js`).forEach(entryPath => {
  let tempPath = entryPath.split("src/pages/")[1];
  let title = tempPath.match(/[^/]+(?!.*\/)/)[0].match(/(.*)\.app.js/);
  title = title ? title[1] : undefined;
  let filePath = tempPath.split(/\/[^/]*app.js/)[0];
  let filename = filePath + ".html";
  let template = fullPath(entryPath.replace(/\.js$/, ".html"));
  pages[filePath] = {
    entry: entryPath,
    filename: filename,
    title: title,
    template: template,
    chunks: ["vendors", "common", filePath]
  };
});

module.exports = {
  pages,
  /* use to debug production problem */
  productionSourceMap: true,
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    /* add some useful path alis */
    config.resolve.alias.set("@", fullPath("src"));
    /* resolve html-webpack-plugin minify options */
    Object.keys(pages).forEach(filePath => {
      config.plugin(`html-${filePath}`).tap(args => {
        if (args[0].minify) {
          args[0].minify.removeAttributeQuotes = false;
        }
        return args;
      });
    });
  }
};
