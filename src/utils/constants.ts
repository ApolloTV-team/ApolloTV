import * as FileSystem from "expo-file-system";
import { join } from "path";

export const constants = {
  plugins_path: FileSystem.documentDirectory
    ? join(FileSystem.documentDirectory, "plugins")
    : null,
};
