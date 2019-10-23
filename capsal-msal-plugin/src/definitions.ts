declare module "@capacitor/core" {
  interface PluginRegistry {
    MsalPlugin: MsalPluginPlugin;
  }
}

export interface MsalPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
