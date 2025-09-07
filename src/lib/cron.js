import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
    https.get(process.env.API_URL, (res) => {
        if(res.statusCode === 200) console.log("GET request sent successfully");
        else console.log("GET request failed", res.statusCode);

    }).on("error", (e) => console.error("Error while sending request", e));
});

export default job;

/****** The above Cron Job explaination ******/

// This cron job is to send 1 GET request every 14 minutes in order to keep the server alive in the Render API
// MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF WEEK

// Example:
// * 14 * * * * - Every 14 minutes
// * 0 0 * * 0 - At midnight on every Sunday
// * 30 3 15 * * - At 3:30AM on the 15th day of every month
// * 0 0 1 1 * - At midnight, on Janaury 1st
// * 0 1 * * * * - Every minute