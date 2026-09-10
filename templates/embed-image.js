// Uso: node embed-image.js <template.html> <imagen.png|jpg> <salida.html>
// Reemplaza __IMG_B64__ en el template por la imagen dada en base64, lista para renderizar.
import { readFileSync, writeFileSync } from 'node:fs';

const [, , templatePath, imagePath, outPath] = process.argv;
if (!templatePath || !imagePath || !outPath) {
  console.error('Uso: node embed-image.js <template.html> <imagen> <salida.html>');
  process.exit(1);
}

const html = readFileSync(templatePath, 'utf8');
const b64 = readFileSync(imagePath).toString('base64');
writeFileSync(outPath, html.replace('__IMG_B64__', b64), 'utf8');
console.log('Escrito:', outPath);
