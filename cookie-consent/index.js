module.exports = function (context, options) {
  return {
    name: "cookieConsent",
    injectHtmlTags() {
      return {
        headTags: [
          `<script async type="text/javascript">
          var _iub = _iub || [];
          _iub.csConfiguration = {"enableCcpa":true,"countryDetection":true,"consentOnContinuedBrowsing":false,"ccpaAcknowledgeOnDisplay":true,"lang":"en","siteId":2103664,"floatingPreferencesButtonDisplay":false,"gdprAppliesGlobally":false,"cookiePolicyId":28156222,"floatingPreferencesButtonCaption":true, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-bottom-right","logo":"https://deploy-preview-34--osso.netlify.app/img/logo-alt.svg","acceptButtonColor":"#4E61A5","fontSize":"16px","brandBackgroundColor":"none","brandTextColor":"#ffffff","acceptButtonCaptionColor":"white","customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D","rejectButtonColor":"#4e61a5","rejectButtonCaptionColor":"white","textColor":"#ffffff","backgroundColor":"#262626" }};
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
