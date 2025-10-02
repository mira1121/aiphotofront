export default function LiveFeed() {
  const items = [
    "Мөнх Зөгийний хөрөг үүсгэлээ — 10 секундийн өмнө",
    "Сайхан Мэргэжлийн хөрөг үүсгэлээ — 12 секундийн өмнө",
    "Өнөр Соёлын хөрөг үүсгэлээ — 20 секундийн өмнө",
    "Болор Мартын хөрөг үүсгэлээ — 6 секундийн өмнө",
    "Мөнх Зөгийний хөрөг үүсгэлээ — 3 өдрийн өмнө",
  ];
  return (
    <section className="mt-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="text-primary font-semibold">🟢</div>
          <div className="text-slate-600">926 хэрэглэгч идэвхтэй байна</div>
        </div>
        <div className="space-y-3">
          {items.map((t, i) => (
            <div
              key={i}
              className="p-4  rounded-xl shadow-sm flex justify-between items-center"
            >
              <div className="text-sm text-slate-700">{t}</div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
