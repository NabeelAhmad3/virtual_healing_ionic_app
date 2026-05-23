import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'safety-bridge',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    minWebViewVersion: 60  // ADD THIS - forces modern WebView
  },
  plugins: {
    Keyboard: {
      scrollAssist: false,
      resize: 'none' as any
    }
  }
};

export default config;