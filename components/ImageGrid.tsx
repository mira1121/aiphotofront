"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { useImageContext } from "../app/context";

export default function ImageGrid() {
  const { images } = useImageContext();

  const handleDownload = async (url: string, title: string) => {
    const res = await fetch(url, { mode: "cors" });
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = title;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    images &&
    images.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg"
          >
            <div className="relative w-full h-48">
              <img src={img} alt={""} className="object-cover" />
            </div>

            <div className="p-4 flex justify-between items-center z-20">
              <button
                onClick={() => handleDownload(img, "ai-image-" + (index + 1))}
                className="absolute bottom-2 cursor-pointer right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 z-10"
              >
                <ArrowDownCircleIcon className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
