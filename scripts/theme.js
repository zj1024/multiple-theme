const gulp = require("gulp");
const clean = require("gulp-clean");
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");

const { resolve } = require("path");

const { series, src } = gulp;
const themeResolve = (path) => resolve(__dirname, "../src/theme", path || "");

async function cleanTheme(done) {
  return await src(themeResolve("antd.css"), { read: false, allowEmpty: true })
    .pipe(clean({ force: true }))
    .on("end", done);
}

async function buildBaseTheme(done) {
  return await src([
    themeResolve("antd.dark.base.less"),
    themeResolve("antd.default.base.less"),
  ])
    .pipe(
      less({
        javascriptEnabled: true,
      })
    )
    .pipe(gulp.dest(themeResolve()))
    .on("end", done);
}

async function buildThemeWithScope(done) {
  return await src(themeResolve("antd.less"))
    .pipe(less({ javascriptEnabled: true }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(themeResolve()))
    .on("end", done);
}

exports.default = series(cleanTheme, buildBaseTheme, buildThemeWithScope);
