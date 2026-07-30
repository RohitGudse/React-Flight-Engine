// reportWebVitals.js

/**
 * Load all available performance metrics.
 * This function imports the web-vitals package only
 * when it is actually needed.
 */
const loadPerformanceMetrics = async (callback) => {
  try {
    const metrics = await import("web-vitals");

    const {
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB,
    } = metrics;

    const performanceFunctions = [
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB,
    ];

    performanceFunctions.forEach((metricFunction) => {
      if (typeof metricFunction === "function") {
        metricFunction(callback);
      }
    });
  } catch (error) {
    console.error("Unable to load web-vitals package:", error);
  }
};

/**
 * Validate callback before loading metrics.
 */
const isValidCallback = (callback) => {
  return typeof callback === "function";
};

/**
 * Main function exported to the application.
 * It accepts a callback which receives
 * the measured performance values.
 */
const reportWebVitals = (onPerfEntry) => {
  if (!isValidCallback(onPerfEntry)) {
    console.warn("Performance callback is not valid.");
    return;
  }

  loadPerformanceMetrics(onPerfEntry);
};

export default reportWebVitals;