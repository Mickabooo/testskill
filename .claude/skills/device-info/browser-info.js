(() => {
  const info = {
    browserIdentification: navigator.userAgent,
    reportedPlatform: navigator.platform || "unknown",
    language: navigator.language,
    logicalProcessors: navigator.hardwareConcurrency ?? "unknown",
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };

  return JSON.stringify(info, null, 2);
})();
