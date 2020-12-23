module.exports = function (context, options) {
  return {
    name: "cookieConsent",
    injectHtmlTags() {
      return {
        headTags: [
          `<script type="text/javascript">
          var _iub = _iub || [];
          _iub.csConfiguration = {"consentOnContinuedBrowsing":false,"ccpaAcknowledgeOnDisplay":true,"whitelabel":false,"lang":"en","siteId":2103664,"enableCcpa":true,"countryDetection":true,"cookiePolicyId":28156222, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-top-center" }};
          </script>
          <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
          <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`,
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
