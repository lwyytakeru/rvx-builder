const fetch = require('node-fetch');

const USER_AGENT_HEADERS = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_6_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/142.0 Mobile/15E148 Safari/605.1.15'
        }
    }

module.exports = async function fetchWithUserAgent(url) {
  return fetch(url, USER_AGENT_HEADERS);
};
