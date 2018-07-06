import errorHandler from "errorhandler";

import app from "./app";


// Set Development modes checks
const isDevMode = process.env.NODE_ENV === "development" || false;
const isProdMode = process.env.NODE_ENV === "production" || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  const webpack = require("webpack");
  // eslint-disable-next-line global-require
  const config = require("../../webpack.config.dev");
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require("webpack-dev-middleware");
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
