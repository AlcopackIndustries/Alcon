const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const webhookUrl = "https://hook.us2.make.com/bs6pm4n8qwclf6ejf46olz11sqcx04hp";
    const data = event.body;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    return {
      statusCode: response.status,
      body: await response.text(),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
