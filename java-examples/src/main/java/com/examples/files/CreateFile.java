package com.examples.files;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CreateFile {
    public static File create() throws IOException {
        try {
            /**
             * Add the relative or absolute path
             * More information about relative and absolute path: https://docs.oracle.com/javase/tutorial/essential/io/path.html#relative
             */
            Path pathDir = Paths.get("./folder-created");
            if (!Files.exists(pathDir)) {
                Files.createDirectory(pathDir);
            }

            Path pathFile = Paths.get("./folder-created/customer.csv");
            if (Files.exists(pathDir) && !Files.exists(pathFile)) {
                return Files.createFile(pathFile).toFile();
            }

            return pathFile.toFile();
        } catch (IOException e) {
            throw e;
        }
    }
}
