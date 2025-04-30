import { readdirSync } from "fs";
import { join } from "path";

// Server-only: reads images from public/perfums/catalog and public/perfums/info
export function getPerfumes() {
  const catalogDir = join(process.cwd(), "public", "perfums", "catalog");
  const infoDir = join(process.cwd(), "public", "perfums", "info");

  const catalogFiles = readdirSync(catalogDir).filter((f) =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );
  const infoFilesSet = new Set(
    readdirSync(infoDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  );

  return catalogFiles
    .filter((fname) => infoFilesSet.has(fname))
    .sort()
    .map((fname) => ({
      src: `/perfums/catalog/${fname}`,
      info: `/perfums/info/${fname}`,
    }));
}
