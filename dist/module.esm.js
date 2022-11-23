// src/index.js
function src_default(Alpine) {
  Alpine.directive("resize", (el, {expression}, {evaluateLater, cleanup}) => {
    const evaluate = evaluateLater(expression);
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => evaluate(() => {
      }, {params: [entry]}));
    });
    observer.observe(el);
    cleanup(() => {
      observer.disconnect();
    });
  });
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
