package com.examples.files;

import org.junit.After;
import org.junit.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.assertj.core.api.Assertions.assertThat;

public class CreateFileTest {
    @Test
    public void shouldCreateDirectoryIfItDoesNotExists() throws IOException {
        final Path path = Paths.get("./folder-created");
        CreateFile.create();
        assertThat(Files.exists(path)).isTrue();
    }

    @Test
    public void shouldCreateFileIfItDoesNotExists() throws IOException {
        final Path path = Paths.get("./folder-created/customer.csv");
        CreateFile.create();
        assertThat(Files.exists(path)).isTrue();
    }

    @After
    public void tearDown() throws Exception {
        Files.deleteIfExists(Paths.get("./folder-created/customer.csv"));
        Files.deleteIfExists(Paths.get("./folder-created"));
    }
}
