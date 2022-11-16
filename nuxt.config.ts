// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/partytown'],
  partytown: {
    forward: ['$crisp', '$crisp.push'],
  },
  app: {
    head: {
      script: [
        // Insert your CRISP Script here e.g.:
        {
          children: `console.log("set crisp"); window.$crisp = []; window.CRISP_WEBSITE_ID = "${process.env.CRISP_WEBSITE_ID}"`,
        },
        {
          src: 'https://client.crisp.chat/l.js',
          async: true,
          type: 'text/partytown',
        },
      ],
    },
  },
});
