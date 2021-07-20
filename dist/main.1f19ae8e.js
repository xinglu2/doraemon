// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var demo = document.querySelector("#demo");
var style = document.querySelector("#style");
var btnPause = document.querySelector("#btnPause");
var btnPlay = document.querySelector("#btnPlay");
var btnSlow = document.querySelector("#btnSlow");
var btnNormal = document.querySelector("#btnNormal");
var btnFast = document.querySelector("#btnFast");
var string = "\n/*\n**\u4ECA\u5929\uFF0C\u6211\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u6211\u6700\u559C\u6B22\u7684\u5361\u901A\u4EBA\u7269\n**\u90A3\u5C31\u662F\u54C6\u5566A\u68A6\n**\u8BA9\u6211\u5148\u628A\u5B57\u4F53\u53D8\u6210\u5B83\u7684\u672C\u4F53\u8272\n*/\nbody{\n    color:#07bbee;\n}\n/*\n**\u5148\u8BA9\u6211\u753B\u5B83\u7684\u5934\u90E8\n*/\n.head {\n    position: absolute;\n    width: 230px;\n    height: 202px;\n    border: 1px solid #555;\n    border-radius: 120px;\n    top: 120px;\n    left: 50%;\n    margin-left: -115px;\n    background: #07bbee;\n}\n/*\n**\u63A5\u4E0B\u6765\u5C31\u8981\u753B\u5B83\u7684\u8138\u5566\n*/\n.face {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    background-color: white;\n    width: 176px;\n    height: 145px;\n    margin-left: -89px;\n    border-radius: 50%;\n}\n/*\n**\u63A5\u4E0B\u6765\u662F\u773C\u775B\n*/\n.eyes {\n\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    top: 26px;\n    left: 50%;\n    margin-left: -50px;\n}\n\n.eye {\n    border: rgb(10, 10, 10) solid 1px;\n    width: 50px;\n    height: 59px;\n    border-radius: 23px;\n    position: absolute;\n    background-color: white;\n}\n\n.eye.left {\n    left: 0;\n}\n\n.eye.right {\n    right: 0;\n}\n/*\n**\u6CA1\u6709\u773C\u73E0\u7684\u773C\u775B\u592A\u7A7A\u6D1E\u4E86\n**\u90A3\u5C31\u7ED9\u5B83\u753B\u4E2A\u773C\u73E0\u5427\n*/\n.zhu {\n    height: 10px;\n    width: 10px;\n    border: rgb(10, 10, 10) solid 1px;\n    background-color: black;\n    border-radius: 5px;\n    position: absolute;\n    top: 28px;\n}\n\n.zhu.left {\n    position: absolute;\n    right: 8px;\n}\n\n.zhu.right {\n    position: absolute;\n    left: 8px;\n}\n\n.nose {\n    border: rgb(218, 30, 30) solid 1px;\n    width: 20px;\n    height: 22px;\n    background-color: #C93300;\n    border-radius: 9px;\n    position: absolute;\n    left: 50%;\n    margin-left: -9px;\n    top: 30px;\n}\n/*\n**\u63A5\u4E0B\u6765\u6211\u8981\u753B\u5B83\u7684\u5634\u5DF4\u4E86\n*/\n.lip.top {\n    border: rgb(10, 10, 10) solid 1.2px;\n    background-color: black;\n    height: 62px;\n    width: 0px;\n    position: absolute;\n    top: 52px;\n    left: 50%;\n}\n\n.face::after {\n    background-color: rgb(255, 255, 255);\n    width: 20px;\n    height: 37px;\n    position: absolute;\n    display: block;\n    content: '';\n    top: 50px;\n    left: 18px;\n}\n\n.face::before {\n    background-color: rgb(255, 255, 255);\n    width: 20px;\n    height: 37px;\n    position: absolute;\n    display: block;\n    content: '';\n    top: 50px;\n    left: 140px;\n    z-index: 1;\n}\n\n.lip.bottom {\n    width: 140px;\n    height: 140px;\n    position: absolute;\n    border-bottom: 2px solid black;\n    top: -25px;\n    left: 50%;\n    margin-left: -70px;\n    border-radius: 68px;\n}\n/*\n**\u6211\u6700\u7231\u7684\u80E1\u987B\u6765\u4E86\n*/\n.whiskers {\n    /* border: rgb(10, 10, 10) solid 1.2px; */\n    width: 150px;\n    height: 50px;\n    position: absolute;\n    top: 34px;\n    left: 50%;\n    margin-left: -70px;\n}\n\n.whiskersLeft {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n}\n\n.whiskersRight {\n    position: absolute;\n    right: 0;\n    height: 50px;\n    width: 50px;\n}\n\n.leftTop {\n    width: 42px;\n    height: 1.5px;\n    transform: rotate(20deg);\n    background-color: rgb(73, 73, 73);\n    position: absolute;\n    top: 15px;\n    z-index: 3;\n}\n\n.leftMiddle {\n    width: 42px;\n    height: 1px;\n    background-color: rgb(0, 0, 0);\n    position: absolute;\n    top: 30px;\n    z-index: 3;\n}\n\n.leftBottom {\n    width: 42px;\n    height: 1.5px;\n    transform: rotate(-20deg);\n    background-color: rgb(73, 73, 73);\n    position: absolute;\n    top: 45px;\n    z-index: 3;\n}\n\n.rightTop {\n    width: 42px;\n    height: 1.5px;\n    transform: rotate(-20deg);\n    background-color: rgb(73, 73, 73);\n    position: absolute;\n    top: 15px;\n    z-index: 3;\n}\n\n.rightMiddle {\n    width: 42px;\n    height: 1px;\n    background-color: rgb(0, 0, 0);\n    position: absolute;\n    top: 30px;\n    z-index: 3;\n}\n\n.rightBottom {\n    width: 42px;\n    height: 1.5px;\n    transform: rotate(20deg);\n    background-color: rgb(73, 73, 73);\n    position: absolute;\n    top: 45px;\n    z-index: 3;\n}\n/*\u7EA2\u7EA2\u7684\u8116\u5B50\u624D\u662F\u6700\u53EF\u7231\u7684\u5462\n*/\n.neck {\n    position: absolute;\n    width: 180px;\n    background-color: #C93300;\n    height: 22px;\n    top: 300px;\n    left: 50%;\n    margin-left: -90px;\n    border-radius: 10px;\n    z-index: 2;\n}\n/*\n**\u6CA1\u6709\u94C3\u94DB\u600E\u4E48\u884C\u5462\n**\u8BA9\u6211\u7ED9\u5B83\u52A0\u4E0A\u94C3\u94DB\u5427\n*/\n.bell {\n    width: 36px;\n    height: 36px;\n    background-color: yellow;\n    position: absolute;\n    left: 50%;\n    margin-left: -18px;\n    top: 10px;\n    border-radius: 50%;\n    border: black solid 1px;\n}\n\n.react {\n    width: 34px;\n    height: 5px;\n    position: absolute;\n    border: black solid 1px;\n    top: 11px;\n    left: 50%;\n    margin-left: -17px;\n}\n\n.yuan {\n    position: absolute;\n    width: 7px;\n    height: 6px;\n    background-color: black;\n    border-radius: 6px;\n    top: 18px;\n    left: 50%;\n    margin-left: -3.5px;\n}\n\n.shu {\n    position: absolute;\n    width: 2px;\n    height: 13px;\n    background-color: black;\n    border-radius: 6px;\n    top: 22px;\n    left: 50%;\n    margin-left: -1px;\n}\n/*\n**\u63A5\u4E0B\u6765\u6211\u8981\u753B\u5B83\u7684\u8EAB\u5B50\u4E86\n*/\n.itBottom {\n    /* border: tomato solid 1px; */\n    position: relative;\n    width: 350px;\n    height: 200px;\n    top: 315px;\n    left: 50%;\n    margin-left: -175px;\n    overflow: hidden;\n}\n\n.body {\n    border: rgb(7, 7, 7) solid 1px;\n    position: absolute;\n    width: 170px;\n    height: 130px;\n    top: 0px;\n    left: 50%;\n    margin-left: -85px;\n    background-color: #07bbee;\n    overflow: hidden;\n    border-bottom: transparent;\n}\n\n.body::before {\n    width: 18px;\n    height: 18px;\n    bottom: -9px;\n    content: '';\n    display: block;\n    background-color: white;\n    position: absolute;\n    border-radius: 50%;\n    border: rgb(7, 7, 7) solid 1px;\n    left: 50%;\n    margin-left: -8px;\n\n}\n\n.duzi {\n    border: rgb(7, 7, 7) solid 1px;\n    border-top: transparent;\n    position: absolute;\n    width: 130px;\n    height: 130px;\n    background-color: rgb(255, 255, 255);\n    top: -24px;\n    left: 50%;\n    margin-left: -65px;\n    border-radius: 50%;\n}\n\n.ding {\n    border-top: rgb(7, 7, 7) solid 1px;\n    width: 100px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    margin-left: -50px;\n    top: 44px;\n    overflow: hidden;\n}\n\n.dou {\n    border: rgb(7, 7, 7) solid 1px;\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    bottom: 0;\n    border-radius: 50%;\n}\n/*\n**jiojio\u4E5F\u6765\u4E86\n*/\n.foot {\n    width: 202px;\n    height: 50px;\n    position: relative;\n    /* border: rgb(7, 7, 7) solid 1px; */\n    top: 45px;\n    left: 50%;\n    margin-left: -102px;\n}\n\n.footLeft {\n    width: 100px;\n    height: 25px;\n    position: absolute;\n    border: rgb(7, 7, 7) solid 1px;\n    top: 0px;\n    left: 0;\n    border-radius: 30px 20px;\n}\n\n.footRight {\n    width: 100px;\n    height: 25px;\n    position: absolute;\n    border: rgb(7, 7, 7) solid 1px;\n    top: 0px;\n    right: 0;\n    border-radius: 30px 20px;\n}\n/*\n**\u5440\u8FD8\u6CA1\u6709\u80F3\u818A\n**\u600E\u4E48\u53EF\u4EE5\u5462\n*/\n.hand{\n    position: relative;\n    height: 200px;\n    width: 300px;\n    /* border: rgb(0, 0, 0) solid 1px; */\n    top: 50px;\n    left: 50%;\n    margin-left: -150px;\n}\n\n.handLeft{\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    border: rgb(0, 0, 0) solid 1px;\n    top: 68px;\n    left: 50%;\n    margin-left: -116px;\n    transform: rotate(-30deg);\n    background-color:  #07bbee;\n    z-index: 1;\n    border-right: transparent;\n}\n.zhuaLeft{\n    content: '';\n    display: block;\n    border: rgb(0, 0, 0) solid 1px;\n    width: 40px;\n    height: 40px;\n    border-radius: 18px;\n    position: absolute;\n    top: 76px;\n    left: 20px;\n    z-index: 2;\n    background-color: white;\n}\n.handRight{\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    border: rgb(0, 0, 0) solid 1px;\n    top: 68px;\n    left: 50%;\n    margin-left: 76px;\n    transform: rotate(30deg);\n    background-color:  #07bbee;\n    z-index: 1;\n    border-left: transparent;\n}\n.zhuaRight{\n    content: '';\n    display: block;\n    border: rgb(0, 0, 0) solid 1px;\n    width: 40px;\n    height: 40px;\n    border-radius: 18px;\n    position: absolute;\n    top: 76px;\n    left: 239px;\n    z-index: 2;\n    background-color: white;\n}\n/*\n**\u6211\u6700\u7231\u7684\u84DD\u80D6\u80D6\u753B\u597D\u4E86\n**\u4F46\u662F\u611F\u89C9\u7F3A\u70B9\u7075\u611F\n**\u770B\u6211\u8BA9\u5B83\u901A\u8FC7\u773C\u795E\u548C\u4F60\u4EA4\u6D41\n*/\n.zhu {\n    animation: eyemove 5s linear infinite;\n}\n\n@keyframes eyemove {\n    60% {\n        margin: 0 0 0 0;\n    }\n\n    70% {\n        margin: -15px 0 0 0;\n    }\n\n    75% {\n        margin: -15px 0 0 -5px;\n        margin-right: -5px;\n    }\n\n    80% {\n        margin: -15px 0 0 5px;\n        margin-right: 5px;\n    }\n\n    87% {\n        margin: -15px 0 0 0;\n    }\n\n    90% {\n        margin: 0 0 0 0;\n    }\n}\n/*\n**\u597D\u4E86\n**\u6211\u7684\u4F5C\u54C1\u5B8C\u6210\u4E86\n**\u4E00\u4E2A\u53EF\u7231\u7684\u84DD\u80D6\u80D6\u9001\u7ED9\u4F60\u54E6\n*/\n\n";
var string2 = "";
var n = 0;
var time = 50;

var step = function step() {
  var id = setTimeout(function () {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    demo.scrollTo(0, 9999);

    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, time);

  btnPause.onclick = function () {
    window.clearTimeout(id);
  };

  btnPlay.onclick = function () {
    step();
  };

  btnSlow.onclick = function () {
    window.clearTimeout(id);
    time = 100;
    step();
  };

  btnNormal.onclick = function () {
    window.clearTimeout(id);
    time = 50;
    step();
  };

  btnFast.onclick = function () {
    window.clearTimeout(id);
    time = 20;
    step();
  };
};

step();
},{}],"C:/Users/27873/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55051" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/27873/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map