const redis = require('redis');
const publisher = redis.createClient();
publisher.publish('Change:users.first_name', '{"message":"from arthur!"}', function () {
  process.exit(0);
});
