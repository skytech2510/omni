import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import sha224 from "crypto-js/sha224";
export const POST = async (req: NextRequest) => {
  const formData = req.formData();
  const files = (await formData).getAll("files");
  const reNames = [];
  for (const file of files) {
    if (file instanceof File) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      let filename = sha224(file.name + Date.now().toString()).toString();
      reNames.push({origin: file.name, new: filename});
      const path = `./public/uploads/${filename}`;
      await writeFile(path, buffer);
    }
    else {
      console.log("not a file");
    }
  }
  return NextResponse.json({data:reNames});
};
