CREATE TRIGGER insert_in_other_table_after_update_this_table
AFTER UPDATE
ON this_table FOR EACH ROW
INSERT INTO other_table (id, name, create_date) VALUES (old.id, old.name, old.create_date)

