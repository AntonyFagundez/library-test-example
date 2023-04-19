const fs = require("fs");

const readdirp = require("readdirp");
const copy = require("copyfiles");

const pkgTransform = require("transform-package-json");

const BUNDLED_DEPS = "_ext";

const IGNORED_FOLDERS = [BUNDLED_DEPS, "node"];

const SUB_DIRS = ["HOC", "hooks"];

const EXCLUDED_DIR = [...SUB_DIRS, ...IGNORED_FOLDERS];

const PKG_EXCLUDED_PROPS = ["scripts", "devDependencies", "files"];

const TEMPLATES = {
  STYLES_DEF: "./templates/styles.module.d.ts",
  PACKAGE_JSON: "./templates/package.json",
};
const CHANGELOG_FILE = "CHANGELOG.md";
const GLOBAL_CSS_VARS_SOURCE = "./src/theme/styles.module.css";

copy([CHANGELOG_FILE, "dist/"], { up: true }, (err) => {
  if (err) console.error(err);

  console.log(`Changelog file copied sucessfully`);
});

// transform to important props (avoid sharing internal config)
pkgTransform.transform("package.json", "dist/", {
  remove: PKG_EXCLUDED_PROPS,
});

// copy all css variables to enable css autocomplete
fs.copyFile(GLOBAL_CSS_VARS_SOURCE, "./dist/vars.scss", (err) => {
  if (err) console.error(err);

  console.log("Copied global css vars to 'dist' folder");
});

readdirp("./dist/", { type: "directories" })
  .on("data", (entry) => {
    const { fullPath, path } = entry;

    if (!IGNORED_FOLDERS.some((dir) => path.startsWith(dir)) && !EXCLUDED_DIR.includes(path)) {
      copy([TEMPLATES.STYLES_DEF, fullPath], { up: true }, (err) => {
        if (err) console.error(err);
      });

      let main = `../node/${path}/index.js`;

      if (SUB_DIRS.some((dir) => path.startsWith(dir))) {
        const normalizedPath = path.replace(/\\/g, "/");

        main = `../../node/${normalizedPath}/index.js`;
      }
      pkgTransform.transform(TEMPLATES.PACKAGE_JSON, `${fullPath}/package.json`, {
        main,
      });
    }
  })
  .on("error", (err) => console.error("fatal error", err))
  .on("end", () => console.log("prepare script run sucessfully"));
