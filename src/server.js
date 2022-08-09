import hapi from "@hapi/hapi";
import routes from "./routes.js";

const init = async () => {
  const server = hapi.Server({
    port: 8082,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
