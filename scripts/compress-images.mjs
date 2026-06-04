import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join } from "path";

const FOLDERS = [
  "public/images/gallery",
  "public/images",
];

const EXTENSIONS = [".jpg", ".jpeg", ".JPG", ".JPEG", ".png", ".PNG"];
const MAX_WIDTH = 1920;
const QUALITY = 82;

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function compressImage(filePath) {
  const info = await stat(filePath);
  const originalSize = info.size;

  // Skip small files (under 400KB)
  if (originalSize < 400 * 1024) return null;

  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  const isJpeg = [".jpg", ".jpeg"].includes(ext);
  const isPng = ext === ".png";

  const tmpPath = filePath + ".tmp";

  let pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });
  if (isJpeg) pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  else if (isPng) pipeline = pipeline.png({ compressionLevel: 8 });

  await pipeline.toFile(tmpPath);

  const newInfo = await stat(tmpPath);
  const newSize = newInfo.size;

  if (newSize < originalSize) {
    await unlink(filePath);
    await rename(tmpPath, filePath);
    return { filePath, originalSize, newSize, saved: originalSize - newSize };
  } else {
    await unlink(tmpPath);
    return null;
  }
}

async function run() {
  let totalSaved = 0;
  let count = 0;

  for (const folder of FOLDERS) {
    let files;
    try {
      files = await readdir(folder);
    } catch {
      continue;
    }

    for (const file of files) {
      const ext = "." + file.split(".").pop().toLowerCase();
      if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

      const filePath = join(folder, file);
      try {
        const s = await stat(filePath);
        if (!s.isFile()) continue;

        const result = await compressImage(filePath);
        if (result) {
          const savedPct = ((result.saved / result.originalSize) * 100).toFixed(0);
          console.log(`✓ ${file}: ${formatBytes(result.originalSize)} → ${formatBytes(result.newSize)} (-${savedPct}%)`);
          totalSaved += result.saved;
          count++;
        } else {
          console.log(`- ${file}: ข้ามไป`);
        }
      } catch (err) {
        console.log(`✗ ${file}: ${err.message.split("\n")[0]}`);
      }
    }
  }

  console.log(`\n✅ เสร็จ: compress ${count} ไฟล์ ประหยัดรวม ${formatBytes(totalSaved)}`);
}

run();
