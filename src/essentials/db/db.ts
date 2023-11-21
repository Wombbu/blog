import { DbSchema } from "@/essentials/db/DbSchema";
import { Low } from "lowdb/lib";
import { JSONPreset } from "lowdb/node";

const defaultData: DbSchema = { mainImagePlaceholders: {} };

// Unreliable way of getting the db singleton instance. Come up with a better way.
export let jsonDb: Low<DbSchema> | null = null;

JSONPreset<DbSchema>("db.json", defaultData).then((db) => {
  jsonDb = db;
});
