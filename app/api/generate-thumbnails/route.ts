import { NextResponse } from "next/server";
import Together from "togetherai";

const together = new Together(process.env.TOGETHER_API_KEY);

export async function POST(req: Request) {
  const { url } = await req.json();
  const prompt = url.includes("youtube")
    ? "MrBeast shocked face, red arrows, neon text, exploding money, YouTube thumbnail style, 1024x1024"
    : "professional YouTube thumbnail, high contrast, 1024x1024";

  const images = [];
  for (let i = 0; i < 8; i++) {
    const res = await together.images.create({
      model: "flux.1-dev",
      prompt: prompt + ", variation " + (i + 1),
      width: 1024,
      height: 1024,
      steps: 30,
    });
    images.push(res.data[0].url);
  }

  return NextResponse.json({ images });
}
