// module.exports = ({ env }) => ({
//     "netlify-deployments": {
//       enabled: true,
//       config: {
//         accessToken: "352ewmelPz4lpG-JT-sTjf25xtf3nMvw0KEhA0nPZVY",
//         sites: [
//           {
//             name: 'pharma-strapi',
//             id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
//             buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
//             branch: 'master' // optional
//           }
//         ]
//       },
//     },
//   });
module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_UFcV8oWuxpkfR5alyQarcXlR7R2Y/dWisEHRUYO",
      apiToken: "MmH4kY3ZhbAbj8WiNgTQSjZ6",
      appFilter: "pharma-strapi",
      // teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});
