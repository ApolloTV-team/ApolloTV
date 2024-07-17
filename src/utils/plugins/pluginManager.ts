import { Plugin } from "@/@types";
import { PluginStore } from "./pluginStore";

import PluginUtils from "./pluginUtils";

class PluginManager {
  readonly pluginStore = PluginStore;
  readonly utils = PluginUtils;

  public download(plugin: { name: string; version: string; url: string }) {
    this.utils.donwload(plugin);
  }

  public install(plugin: Plugin) {
    this.pluginStore.install(plugin);
  }

  public uninstall(pluginName: string) {
    this.pluginStore.uninstall(pluginName);
  }

  public list() {
    return this.pluginStore.plugins;
  }

  public search(query: string) {
    const plugins = this.pluginStore.plugins;

    let results = [];
    for (const plugin of plugins.values()) {
      if (!plugin.metadata.name.includes(query)) continue;
      results.push(plugin);
    }

    return results;
  }

  public info(id: string) {
    return this.pluginStore.plugins.get(id)?.metadata;
  }
}

export const pluginManager = new PluginManager();
