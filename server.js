"use strict";

const build = require("./app");

const start = async () => {
  try {
    const fastify = await build({});
    await fastify.listen(3000);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
