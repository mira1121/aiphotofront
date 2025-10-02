export default function Testimonials() {
  const reviews = [
    {
      name: "Батболд",
      role: "Маркетинг менежер",
      text: "LinkedIn хөрөг зураг маш сайн гарсан. Гайхалтай зураг гарлаа!",
    },
    {
      name: "Сарантуяа",
      role: "Програм хөгжүүлэгч",
      text: "Паспорт зураг шаардлагатай стандарттай бүрэн нийцсэн.",
    },
    {
      name: "Ганзориг",
      role: "Бизнес эрхлэгч",
      text: "5 төрөл дээр нь зураг гүн зөв гарсан.",
    },
    {
      name: "Оюунчимэг",
      role: "Контент бүтээгч",
      text: "Сошиал медиа профайлдаа ашиглах гоё зургууд авсан.",
    },
    {
      name: "Тэмүүж",
      role: "Санхүүгийн зөвлөх",
      text: "Хэрэглэхэд хялбар, үр дүн сайн.",
    },
    {
      name: "Номинг",
      role: "Багш",
      text: "Хүүхдүүдэд зориулсан сайхан зураг авлаа.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Хэрэглэгчдийн сэтгэгдэл
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-semibold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-slate-500">{r.role}</div>
              </div>
            </div>
            <div className="text-sm text-slate-600">{r.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
