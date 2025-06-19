(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (root['jProgress'] = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['jProgress'] = factory();
  }
}(this, function () {

"use strict";

let jProgress, animateInterval, $jProgress, $bar, $barBg;
function render() {
  document.querySelector(this.options.parent).insertAdjacentHTML("beforeend", '<div class="jProgress"><div class="bar"></div><div class="barBg"></div></div>');
}

/**
 * @param {Object}
 * @param {Object}
 * @param {Object}
 * @param {Object}
 */
function styleBar($jProgress, $bar, $barBg, context) {
  $jProgress.setAttribute("style", "height: " + context.options.progressHeight + "px; height: " + context.options.progressHeight / 10 + "rem; " + "z-index: " + context.options.zIndex + ";" + "position: fixed; top: 0; left: 0; right: 0; transition: all 250ms ease-in-out;");
  $bar.setAttribute("style", "background-color: " + context.options.brandColor + ";" + "width: 1px; height: 100%; transition: all 500ms ease-in-out;");
  $barBg.setAttribute("style", "background-color: " + context.options.brandColor + ";" + "position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.15;");
}

/**
 * @param {Object}
 */
function animateBar($bar) {
  let maxWidth = window.innerWidth,
    step = 10,
    increaseBar;
  animateInterval = setInterval(() => {
    increaseBar = increaseBar ? step + increaseBar : step;
    if (increaseBar <= maxWidth) {
      $bar.style.width = increaseBar + "px";
    } else {
      clearInterval(animateInterval);
    }
  }, 50);
}

/**
 * @param {Object}
 * @param {Object}
 */
function removeBar($jProgress, $bar) {
  $bar.style.width = window.innerWidth + "px";
  $jProgress.addEventListener("transitionend", () => {
    $jProgress.style.opacity = "0.5";
    setTimeout(() => {
      $jProgress.style.opacity = "0";
      $jProgress.remove();
    }, 150);
  });
}
jProgress = {
  options: {
    brandColor: "#de6c4f",
    progressHeight: "3",
    zIndex: "9999",
    parent: "body"
  },
  /**
   * @param {Object}
   */
  configure(options) {
    this.options = Object.assign({}, this.options, options);
    return this;
  },
  start() {
    render.call(this);
    $jProgress = document.getElementsByClassName("jProgress");
    $bar = $jProgress[0].getElementsByClassName("bar");
    $barBg = $jProgress[0].getElementsByClassName("barBg");
    styleBar($jProgress[0], $bar[0], $barBg[0], this);
    animateBar($bar[0]);
  },
  stop() {
    clearInterval(animateInterval);
    removeBar($jProgress[0], $bar[0]);
  }
};

return jProgress;

}));
