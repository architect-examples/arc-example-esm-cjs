// Dependency used just to demonstrate the module system is working
let { string: whatev } = require('whatev')

exports.handler = async function handler (event) {
  return { whatev, ...event }
}
