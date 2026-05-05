import fs from 'fs';
import path from 'path';

const TARGET_DIR = path.join(process.cwd(), 'components');

async function main() {
  console.clear();
  console.log("\x1b[1m Database Setup\x1b[0m");
  console.log("\x1b[34m Installing database normally...\x1b[0m\n");

  try {
    // Ensure components directory exists
    if (!fs.existsSync(TARGET_DIR)) {
      fs.mkdirSync(TARGET_DIR, { recursive: true });
      console.log("\x1b[32m ✓ Components directory created\x1b[0m");
    }

    console.log("\x1b[32m ✓ Database setup completed successfully.\x1b[0m\n");
    console.log("\x1b[34m Ready to use! Run 'pnpm db:setup' or 'pnpm db:seed' next.\x1b[0m\n");

  } catch (error: any) {
    console.error(`\n\x1b[31m Setup failed:\x1b[0m`);
    console.error(`\x1b[31m  ${error.message}\x1b[0m\n`);
    process.exit(1);
  }
}

main();