"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck, burger, dynamicAdaptive, tabs } from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  dynamicAdaptive();
  tabs('.product__review', '.product__navigation-btn', '.product__review-content', 'active');
});
