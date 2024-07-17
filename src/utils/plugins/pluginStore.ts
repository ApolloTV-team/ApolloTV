import { AnimeProvider, MovieProvider, TvProvider } from "@apollotv/sdk";

type Plugin = AnimeProvider | MovieProvider | TvProvider;

class PluginStore {
  readonly plugins: Map<string, Plugin>;

  constructor() {
    this.plugins = new Map();
  }

  install(plugin: Plugin) {
    if (this.plugins.has(plugin.metadata.name)) {
      throw new Error(`Plugin ${plugin.metadata.name} already installed`);
    }

    this.plugins.set(plugin.metadata.name, plugin);
  }

  uninstall(pluginName: string) {
    const plugin = this.plugins.get(pluginName);
    if (!plugin) {
      throw new Error(`Plugin ${pluginName} not found`);
    }

    plugin.destroy();
    this.plugins.delete(pluginName);
  }
}

const pluginStore = new PluginStore();

export { pluginStore as PluginStore };
