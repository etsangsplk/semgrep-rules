function test1() {
    // ruleid: path-join-resolve-traversal
    var path = require('path');
    function someFunc(entry) {
        var extractPath = path.join(opts.path, entry.path);
        return extractFile(extractPath);
    }
    someFunc();
}

function test2() {
    // ruleid: path-join-resolve-traversal
    const pth = require('path')
    function someFunc(val) {
        createFile({
            filePath: pth.resolve(opts.path, val)
        })
        return true
    }
    someFunc()
}

function test3() {
    // ruleid: path-join-resolve-traversal
    let path = require('path')
    let somePath = req.body.path;
    return path.join(opts.path, somePath);
}

function okTest1() {
    // ok
    const pth = require('path')
    function someFunc() {
        createFile({
            filePath: pth.join(opts.path, 'val')
        })
        return true
    }
    someFunc()
}