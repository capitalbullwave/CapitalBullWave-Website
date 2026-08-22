/**
 * Theme boot — kept external so CSP can use script-src 'self'
 * without needing unsafe-inline for the initial paint script.
 */
(function () {
  try {
    var theme = localStorage.getItem("bullwave-theme") || "light";
    var root = document.documentElement;
    root.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    root.style.colorScheme = theme === "dark" ? "dark" : "light";
    root.style.background =
      theme === "dark"
        ? "radial-gradient(ellipse 90% 60% at 90% -10%, rgba(14,165,233,0.28), transparent 55%), radial-gradient(ellipse 70% 50% at 5% 15%, rgba(56,189,248,0.16), transparent 50%), linear-gradient(180deg, #020617 0%, #0b1224 40%, #082f49 100%)"
        : "radial-gradient(ellipse 100% 70% at 100% -20%, rgba(56,189,248,0.55), transparent 58%), radial-gradient(ellipse 80% 55% at 0% 0%, rgba(125,211,252,0.5), transparent 52%), linear-gradient(180deg, #ffffff 0%, #e0f2fe 38%, #bae6fd 100%)";
    root.style.backgroundAttachment = "scroll";
  } catch (e) {}
})();
