(async function () {
  "use strict";

  /**
   * All of the code for your public-facing JavaScript source
   * should reside in this file.
   *
   * Note: It has been assumed you will write jQuery code here, so the
   * $ function reference has been prepared for usage within the scope
   * of this function.
   *
   * This enables you to define handlers, for when the DOM is ready:
   *
   * $(function() {
   *
   * });
   *
   * When the window is loaded:
   *
   * $( window ).load(function() {
   *
   * });
   *
   * ...and/or other possibilities.
   *
   * Ideally, it is not considered best practise to attach more than a
   * single DOM-ready or window-load handler for a particular page.
   * Although scripts in the WordPress core, Plugins and Themes may be
   * practising this, we should strive to set a better example in our own work.
   */
  console.log("YAD");

  try {
    const req = await fetch("https://json.geoiplookup.io/");
    const res = await req.json();
    //console.log(res)
    const ip = res?.ip;
    const country = res?.country_name ? res?.country_name.toLowerCase() : null;
    console.log(ip, country);
    const listOf_offers = document.querySelectorAll("#offery");
    for (let i = 0; i < listOf_offers.length; i++) {
      const offer = listOf_offers[i];
      const offer_class = offer.getAttribute("class");
      if (offer_class !== country) {
        offer.innerHTML = "";
        // continue;
      }
      //change style
      offer.style.display = "inline";
      //   console.log("offer", offer);
    }
  } catch (err) {
    console.log("error: ", err?.message);
  }
})();
