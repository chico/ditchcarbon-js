import { DitchCarbonClient } from "./DitchCarbonClient";

const client = new DitchCarbonClient({
  TOKEN: "TOKEN",
});

const run = async () => {
  const response = await client.organization.getIndustries();
  console.log(response);
};

run();
