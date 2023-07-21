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
