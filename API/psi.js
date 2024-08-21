const psi = require("psi");

const getReport = async (url) => {
  // Check if the URL is valid
  if (!url || url.length === 0) {
    return {
      message: "Please send a valid URL",
      code: "400",
    };
  }
  try {
    const scoreData = {};

    const { data: desktopData } = await psi(url, {
      nokey: "true",
      strategy: "desktop",
    });
    scoreData.desktop =
      desktopData.lighthouseResult.categories.performance.score;

    const { data: mobileData } = await psi(url, {
      nokey: "true",
      strategy: "mobile",
    });
    scoreData.mobile = mobileData.lighthouseResult.categories.performance.score;
    return {
      message: scoreData,
      code: "200",
    };
  } catch (error) {
    console.error("Error fetching PSI data:", error);
    return {
      message: "Failed to fetch PSI data",
      code: "500",
      error: error.message,
    };
  }
};

module.exports = getReport;
