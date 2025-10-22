const { process } = globalThis;

let { env } = process;

const { VERSION: version } = env;

if (version === 'development') {
  env = {
    ...env,
    ANDREWKAVAS_API_URL: 'http://localhost:4000',
    ANDREWKAVAS_APP_URL: 'http://localhost:3000'
  };
}

const config = {
  andrewkavas: {
    // apiUrl: 'https://andrewkavas-api.fly.dev',
    apiUrl: env.ANDREWKAVAS_API_URL,
    // appUrl: 'https://andrewkavas-app.fly.dev'
    appUrl: env.ANDREWKAVAS_APP_URL
  },
  port: version === 'development' ? 3000 : 80,
  version
};

export default config;
