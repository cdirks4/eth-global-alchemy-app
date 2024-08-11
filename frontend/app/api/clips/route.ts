import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import db from "../../db";
import { ApifyClient } from "apify-client";

// Initialize the ApifyClient with API token

export async function GET(req: NextRequest) {
  console.log("hit");
  const client = new ApifyClient({
    token: process.env.APIFY_KEY,
  });
  console.log("client", client);

  // Prepare Actor input
  const input = {
    profiles: ["verticals"],
    proxyCountryCode: "None",
    resultsPerPage: 10,
    shouldDownloadCovers: false,
    shouldDownloadSlideshowImages: false,
    shouldDownloadSubtitles: false,
    shouldDownloadVideos: false,
    searchSection: "",
    maxProfilesPerQuery: 10,
  };
  let test = [];
  try {
    // await (async () => {
    //   // Run the Actor and wait for it to finish
    //   const run = await client.actor("GdWCkxBtKWOsKjdch").call(input);
    //   // Fetch and print Actor results from the run's dataset (if any)
    //   console.log("Results from dataset");
    //   const { items } = await client.dataset(run.defaultDatasetId).listItems();
    //   items.forEach((item) => {
    //     test.push(item);
    //     console.log(item);
    //   });
    // })();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ messagge: test });
}
