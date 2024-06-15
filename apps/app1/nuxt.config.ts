// https://nuxt.com/docs/api/configuration/nuxt-config

// import { loadEnv } from "vite";

// interface VITE_ENV_CONFIG {
//     VITE_API_HOST: string;
//     VITE_PACK_ENV: string;
// }
//
// const envScript = (process.env as any).npm_lifecycle_script.split(" ");
// const envName = envScript[envScript.length - 1]; // 通过启动命令区分环境
// const envData = loadEnv(envName, "env") as unknown as VITE_ENV_CONFIG;
// console.log("envData", envData);

export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },
    css: ['~/assets/styles/main.css'],
    extends: ["@mh/ui"],
    devServer: {
        port: 4399,
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        envDir: "~/env", // 指定env文件夹
    },
});
