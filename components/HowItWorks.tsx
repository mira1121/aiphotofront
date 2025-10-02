export default function HowItWorks() {
  const steps = [
    {
      title: "Зураг оруулах",
      desc: "Өөрийн зургийг эсвэл селфи оруулна. Ямар 5 төрөлтэй зураг хүсч байгаагаа сонгоно.",
    },
    {
      title: "AI боловсруулна",
      desc: "Манай хиймэл оюун ухаан таны зургийг 5 өөр хэв маягаар боловсруулна.",
    },
    {
      title: "Татаж авах",
      desc: "Таны хөрөг зургууд бэлэн болсны дараа татаж авна.",
    },
  ];
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Хэрхэн ажилладaг вэ?
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="card text-center">
            <div className="w-12 h-12 rounded-full bg-primary  mx-auto mb-4 flex items-center justify-center">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
