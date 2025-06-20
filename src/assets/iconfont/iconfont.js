window._iconfont_svg_string_ = '<svg><symbol id="icon-cdsyunshujukuCassandraban" viewBox="0 0 1024 1024"><path d="M424.448 196.096c0 47.104 38.4 85.504 85.504 85.504s85.504-38.4 85.504-85.504-38.4-85.504-85.504-85.504-85.504 38.4-85.504 85.504zM799.744 582.656c-47.104 0-85.504 38.4-85.504 85.504s38.4 85.504 85.504 85.504 85.504-38.4 85.504-85.504-38.4-85.504-85.504-85.504z m-490.496 84.992c0-47.104-38.4-85.504-85.504-85.504S138.24 620.544 138.24 667.648s38.4 85.504 85.504 85.504 85.504-38.4 85.504-85.504zM179.2 435.2c-12.8 47.104-12.8 93.696-6.144 140.8 10.752-6.656 23.552-10.752 36.352-12.8-2.048-14.848-2.048-29.696-2.048-44.544 0-25.6 2.048-49.152 8.704-74.752-13.312 0-24.064-2.048-36.864-8.704z m546.304-185.344c-34.304-25.6-72.704-47.104-113.152-59.904v6.144c0 10.752-2.048 21.504-4.096 31.744 31.744 10.752 61.952 25.6 89.6 44.544 6.144-7.68 14.848-16.384 27.648-22.528zM407.552 194.048c-45.056 14.848-87.552 38.4-121.856 70.144 10.752 6.144 19.456 16.896 25.6 27.648 29.696-25.6 64-47.104 102.4-59.904-4.096-10.752-6.144-21.504-6.144-34.304v-3.584z m2.048 612.352c-42.496-14.848-80.896-38.4-111.104-70.656-8.704 8.704-19.456 16.896-31.744 23.552 40.448 40.448 89.6 72.704 144.896 89.6-2.048-6.144-4.096-35.84-2.048-42.496z m441.344-226.304c4.096-19.456 4.096-38.4 4.096-59.904 0-34.304-4.096-68.096-14.848-102.4-10.752 8.704-21.504 14.848-34.304 19.456 6.656 27.648 10.752 55.296 10.752 82.944 0 14.848-2.048 31.744-4.096 47.104 15.36 2.56 28.16 6.656 38.4 12.8z m-240.64 228.352c0 6.144 2.048 31.744 0 40.448 55.296-16.896 106.496-47.104 147.456-89.6-10.752-6.144-21.504-12.8-31.744-23.552-32.768 34.304-73.216 57.856-115.712 72.704zM224.256 426.496c47.104 0 85.504-38.4 85.504-85.504S270.848 256 224.256 256s-85.504 38.4-85.504 85.504 38.4 84.992 85.504 84.992z m0-142.848c29.696 2.048 55.296 25.6 55.296 55.296 0 31.744-25.6 55.296-55.296 55.296C192.512 394.24 168.96 368.64 168.96 338.944s25.088-55.296 55.296-55.296z m285.696 456.704c-47.104 0-85.504 38.4-85.504 85.504S462.848 911.36 509.952 911.36s85.504-38.4 85.504-85.504-38.4-85.504-85.504-85.504z m0 142.848c-31.744 0-55.296-25.6-55.296-55.296 0-31.744 25.6-55.296 55.296-55.296 32.256 0 55.296 25.6 55.296 55.296s-25.6 55.296-55.296 55.296z m179.2-541.696c0 47.104 38.4 85.504 85.504 85.504S860.16 388.608 860.16 341.504 821.248 256 774.144 256c-46.592 0-84.992 38.4-84.992 85.504z m84.992-57.856c29.696 2.048 55.296 25.6 55.296 55.296 0 31.744-25.6 55.296-55.296 55.296-31.744 0-55.296-25.6-55.296-55.296s23.552-55.296 55.296-55.296z" fill="#2B85FB" ></path></symbol></svg>';
(function(window) {
  var lastScript = document.getElementsByTagName("script");
  lastScript = lastScript[lastScript.length - 1];
  var injectCss = lastScript.getAttribute("data-injectcss");
  var disableInjectSvg = lastScript.getAttribute("data-disable-injectsvg");

  if (!disableInjectSvg) {
    // 注入样式
    if (injectCss && !window.__iconfont__svg__cssinject__) {
      window.__iconfont__svg__cssinject__ = true;
      try {
        document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>');
      } catch {
        if (console) console.log('iconfont style inject error');
      }
    }

    // 注入SVG
    var injectSvg = function() {
      var div = document.createElement("div");
      div.innerHTML = window._iconfont_svg_string_;
      var svg = div.getElementsByTagName("svg")[0];
      if (svg) {
        svg.setAttribute("aria-hidden", "true");
        svg.style.position = "absolute";
        svg.style.width = 0;
        svg.style.height = 0;
        svg.style.overflow = "hidden";
        var body = document.body;
        if (body.firstChild) {
          body.insertBefore(svg, body.firstChild);
        } else {
          body.appendChild(svg);
        }
      }
    };

    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(injectSvg, 0);
      } else {
        var onDomContentLoaded = function() {
          document.removeEventListener("DOMContentLoaded", onDomContentLoaded, false);
          injectSvg();
        };
        document.addEventListener("DOMContentLoaded", onDomContentLoaded, false);
      }
    } else if (document.attachEvent) {
      var done = false;
      var init = function() {
        if (!done) {
          done = true;
          injectSvg();
        }
      };
      var checkReady = function() {
        try {
          document.documentElement.doScroll("left");
        } catch {
          setTimeout(checkReady, 50);
          return;
        }
        init();
      };
      checkReady();
      document.onreadystatechange = function() {
        if (document.readyState == "complete") {
          document.onreadystatechange = null;
          init();
        }
      };
    }
  }
})(window);
