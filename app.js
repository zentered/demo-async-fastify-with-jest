'use strict'

const Fastify = require('fastify')
const FastifySecrets = require('fastify-secrets-gcp')

async function build(opts = {}) {
  const app = Fastify(opts)

  const secrets = {
    auth0ClientSecret: `projects/${process.env.GCLOUD_PROJECT_ID}/secrets/AUTH0_CLIENT_SECRET/versions/latest`
  }
  await app.register(FastifySecrets, {
    secrets: secrets
  })

  // just to demonstrate how the auth0 plugin can already use app.secrets at this point
  // app.register(require('fastify-auth0-verify'), {
  //   domain: auth0.domain,
  //   audience: auth0.audience,
  //   secret: app.secrets.auth0ClientSecret
  // })

  app.get('/', async function (request, reply) {
    return { hello: app.secrets.auth0ClientSecret }
  })

  return app
}

module.exports = build
