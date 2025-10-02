import ImageGrid from "./ImageGrid";
import UploadBox from "./UploadBox";

export default function Hero() {
  return (
    <section className="grid place-items-center text-center py-16">
      <div className="max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-black text-sm mb-4">
          ⭐ 50,000+ хэрэглэгч
        </div>

        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="text-primary">Хөрөг зургаа</span>{" "}
          <span className="text-black">AI-аар бүтээ</span>
        </h1>

        <p className="mt-4 text-slate-600">
          Нэг зургаас 3 өөр төрлийн мэргэжлийн хөрөг зурaг бүтээнэ
        </p>

        <div className="mt-8 flex justify-center items-center">
          <UploadBox />
        </div>
        <div>
          <ImageGrid />
        </div>

        <div className="mt-8 flex gap-8 items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold">50,000+</div>
            <div className="text-sm text-slate-500">Хэрэглэгч</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-rose-500">250,000+</div>
            <div className="text-sm text-slate-500">Зураг үүсгэсэн</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.9/5</div>
            <div className="text-sm text-slate-500">Үнэлгээ</div>
          </div>
        </div>
      </div>
    </section>
  );
}
