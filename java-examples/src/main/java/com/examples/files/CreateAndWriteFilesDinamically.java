package com.examples.files;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.StringJoiner;

public class CreateAndWriteFilesDinamically {
    public static void main(String[] args) {
        try(Writer fw = new BufferedWriter(new FileWriter(CreateFile.create()))) {
            fw.write(getKeyLine(getCustomer()));
            fw.write(System.lineSeparator());
            fw.write(getValueLine(getCustomer()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getKeyLine(Map<String, Object> table) {
        StringJoiner sj = new StringJoiner(";");
        table.forEach((key, value) -> sj.add(key));
        return sj.toString();
    }

    private static String getValueLine(Map<String, Object> table) {
        StringJoiner sj = new StringJoiner(";");
        table.forEach((key, value) -> sj.add(value.toString()));
        return sj.toString();
    }

    private static Map<String, Object> getCustomer() {
        Map<String, Object> customer_t = new LinkedHashMap<>();
        customer_t.put("id", 1);
        customer_t.put("name", "Serafina");
        customer_t.put("birth_date", LocalDateTime.now());
        customer_t.put("address", "Belém, Pará");
        return customer_t;
    }
}
