"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressBar;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function ProgressBar(_a) {
    var domSelector = _a.domSelector, _b = _a.height, height = _b === void 0 ? 6 : _b, _c = _a.color, color = _c === void 0 ? "blue" : _c, _d = _a.top, top = _d === void 0 ? 0 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, onBottom = _a.onBottom;
    var _f = (0, react_1.useState)(0), progress = _f[0], setProgress = _f[1];
    (0, react_1.useEffect)(function () {
        var element = document.getElementById(domSelector);
        function scrollFn() {
            if (element) {
                var scrollTop = element.scrollTop;
                var elementHeight = element.scrollHeight - element.clientHeight;
                var progress_1 = (scrollTop / elementHeight) * 100;
                console.log(progress_1);
                if (progress_1 === 100 && onBottom) {
                    onBottom();
                }
                setProgress(progress_1);
            }
        }
        element === null || element === void 0 ? void 0 : element.addEventListener("scroll", scrollFn);
        return function () {
            element === null || element === void 0 ? void 0 : element.removeEventListener("scroll", scrollFn);
        };
    }, [domSelector, onBottom]);
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            width: "".concat(progress, "%"),
            height: "".concat(height, "px"),
            backgroundColor: "".concat(color),
            position: "fixed",
            top: "".concat(top),
            left: "".concat(left),
        } }));
}
