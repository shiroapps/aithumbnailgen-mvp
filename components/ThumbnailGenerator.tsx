"use client";
import { useState } from "react";

export default function ThumbnailGenerator() {
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const res = await fetch("/api/generate-thumbnails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    setThumbnails(data.images || []);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 text-center">
      <h1 className="text-6xl font-bold mb-8">AI Thumbnail Generator</h1>
      <input
        type="text"
        placeholder="Paste YouTube link"
        className="w-full max-w-2xl p-4 rounded-lg text-black text-xl mb-6"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <button
        onClick={generate}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-lg text-2xl font-bold"
      >
        {loading ? "Generating 8 thumbnails..." : "Generate 8 Thumbnails"}
      </button>

      <div className="grid grid-cols-4 gap-6 mt-12">
        {thumbnails.map((src, i) => (
          <img key={i} src={src} alt="thumb" className="rounded-xl shadow-2xl hover:scale-105 transition" />
        ))}
      </div>
    </div>
  );
}
