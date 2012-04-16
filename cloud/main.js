/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - anyything returned from these calls will be sent as a JSON response to the client
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
function getConfig(params) {
  console.log('in getConfig with ts:' + Date.now());
  return config;
};
