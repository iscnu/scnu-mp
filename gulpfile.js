const { src, dest, watch } = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const baseDir = "./miniprogram";

function css2wxss() {
  return (
    src([`${ baseDir}/**/*.css`, `!${baseDir}/**/_*.css`])
      .pipe(
        postcss().on("error", function (err) {
          console.error(err);
          this.emit("end");
        })
      )
      .pipe(
        rename(path => {
          path.extname = ".wxss";
        })
      )
      .pipe(
        dest(file => {
          return file.base;
        })
      )
  );
}

watch(`${baseDir}/**/*.css`, css2wxss);

exports.default = css2wxss;

