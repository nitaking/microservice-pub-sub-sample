const redis = require('redis');
const publisher = redis.createClient();

const sendValue = {
  message: 'from publisher 2',
  user_id: 49197,
  first_name: 'satoshi',
}

publisher.publish('Change:users.first_name', JSON.stringify(sendValue), function () {
  process.exit(0);
});
