exports.handler = async (event, context) => {
  try {
    const webhookUrl = "https://hook.us2.make.com/bs6pm4n8qwclf6ejf46olz11sqcx04hp";
    
    // Parse the incoming JSON data
    const data = JSON.parse(event.body); 

    // Send data to Make.com webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),  // Ensure the data is sent as JSON
    });

    // Return the response from Make.com
    return {
      statusCode: response.status,
      body: await response.text(),
    };
  } catch (error) {
    // Handle errors gracefully
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
