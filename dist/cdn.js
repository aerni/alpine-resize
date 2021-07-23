(() => {
  // src/index.js
  function src_default(Alpine) {
    Alpine.directive("resize", (el, {expression}, {evaluateLater, cleanup}) => {
      const evaluate = evaluateLater(expression);
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => evaluate());
      });
      observer.observe(el);
      cleanup(() => {
        observer.disconnect();
      });
    });
  }

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(src_default);
  });
})();
