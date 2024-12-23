// export const headerChangeOnScroll = () => {
//   var mainNav = document.querySelector(".main-nav");
//   var navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
//   var lightAfterScroll = document.querySelector(".light-after-scroll");
//   if (window.scrollY > 0) {
//     mainNav.classList.remove("transparent");
//     mainNav.classList.add("small-height", "body-scrolled");
//     if (navLogoWrapLogo) navLogoWrapLogo.classList.add("small-height");
//     if (lightAfterScroll) lightAfterScroll.classList.remove("dark");
//   } else if (window.scrollY === 0) {
//     mainNav.classList.add("transparent");
//     mainNav.classList.remove("small-height", "body-scrolled");
//     if (navLogoWrapLogo) navLogoWrapLogo.classList.remove("small-height");
//     if (lightAfterScroll) lightAfterScroll.classList.add("dark");
//   }
// };

export const headerChangeOnScroll = () => {
    var mainNav = document.querySelector(".main-nav");
    var navLogoWrapLogo = document.querySelector(".nav-logo-wrap .logo");
    var lightAfterScroll = document.querySelector(".light-after-scroll");

    // Check if mainNav exists before proceeding
    if (!mainNav) {
        console.error("Element with class '.main-nav' not found in the DOM.");
        return;
    }

    if (window.scrollY > 0) {
        mainNav.classList.remove("transparent");
        mainNav.classList.add("small-height", "body-scrolled");
        if (navLogoWrapLogo) navLogoWrapLogo.classList.add("small-height");
        if (lightAfterScroll) lightAfterScroll.classList.remove("dark");
    } else {
        mainNav.classList.add("transparent");
        mainNav.classList.remove("small-height", "body-scrolled");
        if (navLogoWrapLogo) navLogoWrapLogo.classList.remove("small-height");
        if (lightAfterScroll) lightAfterScroll.classList.add("dark");
    }
};
