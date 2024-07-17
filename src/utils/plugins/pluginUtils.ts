import {
  DownloadResumable,
  deleteAsync,
  readDirectoryAsync,
} from "expo-file-system";
import { join } from "path";
import { constants } from "../constants";

const { plugins_path } = constants;

class PluginUtils {
  constructor() {}

  public static donwload(plugin: {
    name: string;
    version: string;
    url: string;
  }) {
    if (!plugins_path) throw new Error("Plugins path is not defined");

    return new DownloadResumable(plugin.url, join(plugins_path, plugin.name));
  }

  public static async uninstall(plugin_path: string) {
    try {
      await deleteAsync(plugin_path);
      return true;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  public static update() {}

  public static async list() {
    if (!plugins_path) throw new Error("Plugins path is not defined");

    return await readDirectoryAsync(plugins_path);
  }

  public static search() {}

  public static info() {}
}

export default PluginUtils;
