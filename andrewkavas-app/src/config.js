const { process } = globalThis;

let { env } = process;

const { VERSION: version } = env;

if (version === 'development') {
  env = {
    ...env,
    andrewkavas_API_URL: 'http://localhost:4000',
    andrewkavas_APP_URL: 'http://localhost:3000'
  };
}

const config = {
  andrewkavas: {
    // apiUrl: 'https://andrewkavas-api.fly.dev',
    apiUrl: env.andrewkavas_API_URL,
    // appUrl: 'https://andrewkavas-app.fly.dev'
    appUrl: env.andrewkavas_APP_URL
  },
  port: version === 'development' ? 3000 : 80,
  version
};

export default config;
