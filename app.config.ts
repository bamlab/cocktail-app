import type { ExpoConfig } from "@expo/config-types";

const STAGE = process.env.STAGE || "dev"; // dev is the default stage so that we don't have to care about setting the variable all the time

if (STAGE !== "dev" && STAGE !== "staging" && STAGE !== "production") {
  throw new Error(`Invalid STAGE env var: ${STAGE}`);
}

const appConfig_DEV = {
  // build-time configs like bundleId, appName, firebase config file path, etc... live there
  bundleId: "beerlist.dev",
  appName: "beerlist DEV",
  waitForUpdateOnSplashScreenMs: 0,
  // run-time configs like API URL, feature flags, etc... should be put in `appEnv`. They are accessible from app code
  appEnv: {
    apiUrl: "https://staging.myapi.com",
    flags: {
      CHEATCODES_ENABLED: true,
    },
  },
};

const appConfig_STAGING: typeof appConfig_DEV = {
  bundleId: "beerlist.staging",
  appName: "beerlist STAGING",
  waitForUpdateOnSplashScreenMs: 600000, // try to always have the latest expo-update, allow 1 minute for download
  appEnv: appConfig_DEV.appEnv,
};

const appConfig_PRODUCTION: typeof appConfig_DEV = {
  bundleId: "beerlist",
  appName: "beerlist",
  waitForUpdateOnSplashScreenMs: 10000,
  appEnv: {
    apiUrl: "https://myapi.com",
    flags: {
      CHEATCODES_ENABLED: false,
    },
  },
};

const appConfigs = {
  dev: appConfig_DEV,
  staging: appConfig_STAGING,
  production: appConfig_PRODUCTION,
};

const appConfig = appConfigs[STAGE];

export type AppEnv = (typeof appConfig_DEV)["appEnv"];

const config: ExpoConfig = {
  name: "beerlist",
  slug: "beerlist",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  jsEngine: "hermes",
  updates: {
    fallbackToCacheTimeout: appConfig.waitForUpdateOnSplashScreenMs,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: appConfig.bundleId,
    config: {
      usesNonExemptEncryption: false,
    },
    // Once an iOS build has been submitted with `supportsTablet: true`, it can no longer be disabled
    supportsTablet: false,
    infoPlist: {
      LSApplicationQueriesSchemes: ["itms-apps"],
    },
  },
  android: {
    package: appConfig.bundleId,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    // allow access to `STAGE` and `appEnv` in app code
    STAGE,
    appEnv: appConfig.appEnv,
  },
  plugins: ["./plugins/versioning", "expo-localization"],
};

export default config;
