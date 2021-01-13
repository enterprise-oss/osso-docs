module.exports = function (context, options) {
  return {
    name: "chatwoot",
    injectHtmlTags() {
      return {
        headTags: [
          `<script async>
          (function(d,t) {
            var BASE_URL = "https://chatwoot-osso.herokuapp.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src= BASE_URL + "/packs/js/sdk.js";
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'URhDAFxX8RkkDRSDy59wukBf',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        </script>`,
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
