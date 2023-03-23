import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Please provide a path to links.json');
  process.exit(1);
}

const linksFilePath = args[0];
const linksFolder = `${linksFilePath}_pages`;

if (!fs.existsSync(linksFolder)) {
  fs.mkdirSync(linksFolder);
}

const fileLink = path.join(__dirname, linksFilePath);

const linksJson = fs.readFileSync(fileLink, 'utf8');
const links = JSON.parse(linksJson) as string[];

async function saveHtml(link: string): Promise<void> {
  const url = new URL(link); 
  const filePath = path.join(linksFolder, path.basename(url.pathname)); 
  const file = fs.writeFile(filePath+'.html', link, err=> {if (err) throw err;
console.log('file create');
  });
}

async function main(): Promise<void> {
  for (const link of links) {
    try {
      await saveHtml(link);
    } catch (err) {
      console.error(`Error saving ${link}: ${err}`);
    }
  }
}

main();

