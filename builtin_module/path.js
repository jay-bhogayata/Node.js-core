/*
=> path module provide utilities to working with file and directories paths

=> default behavior of path is based on os so using path.base() may be different in windows and posix

=> To achieve consistent results when working with Windows file paths on any operating system, use path.win32

=> To achieve consistent results when working with Windows file paths on any operating system, use path.posix

=> The Portable Operating System Interface is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems.

*/

const path = require("node:path");
// node: is optional

console.log(__filename);
console.log(__dirname);
// this is available in all modules

console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.basename(__filename, ".js"));
// method return last portion of path
// 2nd arg is suffix you want to ignore
// basename treats the extension as a case-sensitive string:

console.log(path.delimiter);
console.log(process.env.PATH.split(path.delimiter));
// Provides the platform-specific path delimiter:

console.log(path.dirname("/webdev/nodejs/index.js"));
// returns the directory name of a path

console.log(path.extname(__filename));
console.log(path.extname("main.cpp"));
console.log(path.extname("index.cjs.js"));
console.log(path.extname(".main"));
// return extension of path

console.log(
  path.format({
    root: "/ignored",
    dir: "/home/user/dir",
    base: "file.txt",
  })
);
// pathObject: an js object having dir,root,base,name,ext
// returns a path string from an object. This is the opposite of path.parse().
// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists

console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("home/jay/main.c"));

console.log(path.join("/dir1", "/dir2", "main"));
console.log(path.join("/dir1", "/dir2", "../main"));
// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

console.log(path.normalize("/home/jay/webdev/node/.."));
console.log(path.normalize("/home//jay/webdev/node/.."));
// `//` is replaced by /

console.log(path.parse(__dirname));
console.log(path.parse(__filename));

console.log(path.relative(`${__dirname}`, `/var/log/nginx`));
// path.relative("from","to")


console.log(path.resolve("/dir1", "/dir2", "main"));
console.log(path.resolve("/dir1", "/dir2", "../main"));
console.log(path.resolve(__dirname, "path.js"));
// resolves a sequence of paths or path segments into an absolute path.


console.log(path.sep);
console.log(__dirname.split(path.sep));
