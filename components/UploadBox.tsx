"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useImageContext } from "../app/context";

interface ApiResponse {
  path: string;
  user?: string;
}

export default function UploadBox() {
  const [loading, setLoading] = useState(false);
  const { setImages } = useImageContext();
  const [error, setError] = useState<boolean>(true);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "prompt",
      "Зураг нь дээрх голлох хүний гадаад паспортын зураг шиг өндөр чанартай, цэвэрхэн, цагаан арьстай, пиджактай, жинхэнэ хүний зураг байх ёстой. Өмнөх зурагнаас өөр хэлбэрээр янзалсан өөр фиджактай ч юмуу зураг байх ёстой."
    );
    formData.append("type", "1");
    for (let index = 0; index < 3; index++) {
      const res = await axios.post<ApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/aiphoto/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data && res.data.path) {
        const path = (process.env.NEXT_PUBLIC_API_URL ?? "") + res.data.path;
        setImages(((prev: string[]) => [...prev, path]) as unknown as string[]);
        if (!Cookies.get("token")) {
          Cookies.set("token", res.data.user || "", { expires: 30 });
        }
      }
    }
    try {
    } catch (err) {
      console.error("Upload failed", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`pl-20 pr-20 lg:mx-0 max-w-xl border-2 border-dashed border-slate-600 rounded-3xl ${
        loading ? " opacity-50 pointer-events-none" : ""
      }`}
    >
      <div>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center py-12"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="mb-4"
          >
            <path
              d="M12 3v12"
              stroke="#7c3aed"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              stroke="#7c3aed"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="text-slate-500 text-center">
            <span className="block font-medium">
              Зургаа энд дарж оруулна уу
            </span>
            <span className="text-xs">
              JPG, PNG болон WEBP (хамгийн ихдээ 10MB)
            </span>
          </div>
        </label>
        {error && (
          <p className="text-red-500 text-center mb-4">
            Зураг оруулахад алдаа гарлаа. Дахин оролдоно уу.
            <p>
              {" "}
              / Backend service inactive байгаа байх. Backend ын url руу ороод
              дахин ачаалалтал хүлээж байгаад дахиж оролдоно уу /{" "}
            </p>
          </p>
        )}
      </div>
    </div>
  );
}
