module.exports = {
  apps: [
    {
      name: "techeeez-lander",
      script: "scripts/static-server.mjs",
      cwd: "/var/www/html/TeechEeezLander",
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: 3000,
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
    },
  ],
};
