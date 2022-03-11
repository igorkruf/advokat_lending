const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, "dist"),
    outputDir: path.join(__dirname, "dist/prerendered"),
    routes: ["/", "/uslugi", "/faq"],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      // injectProperty: "__prerender",
      // inject: {},
      //renderAfterDocumentEvent: "render-ready",
      renderAfterTime: 10000,
      //   //   // We need to inject a value so we're able to
      //   //   // detect if the page is currently pre-rendered.
      //   //   inject: {},
      //   //   // Our view component is rendered after the API
      //   //   // request has fetched all the necessary data,
      //   //   // so we create a snapshot of the page after the
      //   //   // `data-view` attribute exists in the DOM.
      //   //   renderAfterElementExists: '[data-view]',
      //   // injectProperty: "__PRERENDER_INJECTED",
      //   // inject: {
      //   //   prerendered: false,
      //   // },
      //   renderAfterElementExists: "[ready]",
      //headless: false,
      //   // ignoreHTTPSErrors: true,
      //   maxConcurrentRoutes: 2,
    }),
  }),
];

module.exports = {
  //для пререндеринга страниц
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
  ///////////////////////////////////////////////////

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },

  transpileDependencies: ["quasar"],
};
