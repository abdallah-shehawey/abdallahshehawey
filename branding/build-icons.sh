#!/usr/bin/env bash
# Regenerates every raster icon in public/ from the SVG sources in this folder.
# Needs inkscape and ImageMagick (magick).
set -euo pipefail
cd "$(dirname "$0")"
out=../public
tmp=$(mktemp -d); trap 'rm -rf "$tmp"' EXIT

png() { inkscape "$1" -w "$2" -h "$2" -o "$3" 2>/dev/null; }

cp mark.svg "$out/favicon.svg"
for s in 16 32 48 64 128; do png mark.svg "$s" "$tmp/$s.png"; done
# Pillow writes each ICO entry PNG-compressed (ImageMagick stores BMP up to 128px: ~100 KB)
python3 -c 'import sys; from PIL import Image; d=sys.argv[1]; Image.open(f"{d}/128.png").save(sys.argv[2], format="ICO", sizes=[(s,s) for s in (16,32,48,64,128)], append_images=[Image.open(f"{d}/{s}.png") for s in (16,32,48,64)])' "$tmp" "$out/favicon.ico"

png chip-square.svg 180 "$out/apple-touch-icon.png"
png chip.svg 192 "$out/icon-192.png"
png chip.svg 512 "$out/icon-512.png"
png mark-maskable.svg 192 "$out/icon-maskable-192.png"
png mark-maskable.svg 512 "$out/icon-maskable-512.png"

# Strip metadata and recompress
for f in "$out"/apple-touch-icon.png "$out"/icon-*.png; do magick "$f" -strip -define png:compression-level=9 "$f"; done
echo "icons written to $out"
