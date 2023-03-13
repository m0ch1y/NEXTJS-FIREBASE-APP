import { NextApiRequest, NextApiResponse } from "next";
import * as path from "path";
import { createCanvas, registerFont, loadImage } from "canvas";

registerFont(path.resolve("./fonts/ipaexg.ttf"), {
  family: "ipaexg",
});

const ogp = async (req: NextApiRequest, res: NextApiResponse) => {
  const width = 600;
  const height = 315;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#fafafa";
  context.fillRect(0, 0, width, height);

  context.font = "20px ipaexg";
  context.fillStyle = "#424242";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("testテスト", 100, 50);

  const backgroundImage = await loadImage(
    path.resolve("./images/ogp_background.jpg")
  );
  context.drawImage(backgroundImage, 0, 0, width, height);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default ogp;
