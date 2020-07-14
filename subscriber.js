const redis = require("redis");
const subscriber = redis.createClient();


subscriber.on("message", function (channel, message) {
  const data = JSON.parse(message)
  console.log({ data })
  console.log("Message: " + message + " on channel: " + channel + " is arrive!");
});
subscriber.subscribe("Change:users.first_name");
