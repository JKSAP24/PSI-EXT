const host = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async () => {
  const urlInput = document.getElementById("urlInput");
  const reportDiv = document.getElementById("report");
  const getReportButton = document.getElementById("getReportButton");

  getReportButton.addEventListener("click", async () => {
    const url = urlInput.value;

    reportDiv.textContent = "Fetching report...";

    try {
      const response = await fetch(host + "/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      reportDiv.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error("Error fetching data:", error);
      reportDiv.textContent = "Failed to fetch report. Please try again.";
    }
  });
});
