package com.examples.files;

import org.junit.After;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.assertj.core.api.Assertions.assertThat;

public class CreateAndWriteFilesDinamicallyTest {
    @Test
    public void shouldWriteInFileFromHashmap() {
        String[] content = new String[2];
        try(BufferedReader bf = new BufferedReader(new FileReader(Paths.get("../folder-created/customer.csv").toFile()))) {
            String line;
            int length = 0;
            while ((line = bf.readLine()) != null) {
                content[length] = line;
                length++;
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        assertThat(content[0]).isEqualTo("id;name;birth_date;address");
        assertThat(content[1]).isEqualTo("1;Serafina;2020-06-17T12:21:34.126;Belém, Pará");
    }

    @After
    public void tearDown() throws Exception {
        Files.deleteIfExists(Paths.get("../folder-created/customer.csv"));
        Files.deleteIfExists(Paths.get("../folder-created"));
    }
}
