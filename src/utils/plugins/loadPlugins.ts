import { Plugin } from "@/@types";

export async function loadPlugin(pluginPath: string): Promise<Plugin | null> {
  if (!pluginPath.endsWith(".js")) {
    throw new Error(`Plugin at ${pluginPath} is not a JavaScript file`);
  }

  if (pluginPath.endsWith(".ts")) {
    throw new Error(
      `Plugin at ${pluginPath} is a TypeScript file, please bundle it to JavaScript`
    );
  }

  try {
    const pluginModule: {
      default: Plugin | null;
    } = await import(pluginPath);

    if (!pluginModule) {
      throw new Error(`Plugin at ${pluginPath} does not exist`);
    }

    if (!pluginModule.default) {
      throw new Error(
        `Plugin at ${pluginPath} does not export a default value`
      );
    }

    return pluginModule.default;
  } catch (error) {
    throw new Error(`Error loading plugin at ${pluginPath}: ${error}`);
  }
}
