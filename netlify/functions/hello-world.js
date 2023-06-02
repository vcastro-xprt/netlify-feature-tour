const { wrap } = require("@netlify/integrations");
const { withAuth0 } = require("@netlify/auth0");

const withIntegrations = wrap(withAuth0);

console.log("AUTH0_DOMAIN", process.env.AUTH0_DOMAIN);
console.log("AUTH0_CLIENT_ID", process.env.AUTH0_CLIENT_ID);
console.log("AUTH0_ISSUER", process.env.AUTH0_ISSUER);
console.log("AUTH0_AUDIENCE", process.env.AUTH0_AUDIENCE);

exports.handler = withIntegrations(
  async () => {
    const mySecret = process.env.AUTH0_DOMAIN;

    return {
      statusCode: 200,
      body: `hello world! I have a ${mySecret}`,
    };
  },
  {
    auth0: {
      required: true,
    },
  }
);
