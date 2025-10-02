export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-4 fixed bottom-0 left-0 w-full bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4 text-sm text-slate-600 flex flex-col md:flex-row md:justify-between">
        <div>
          © {new Date().getFullYear()} zurag.ai. Бүх эрх хуулиар хамгаалагдсан.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Үйлчилгээний нөхцөл</a>
          <a href="#">Нууцлалын бодлого</a>
        </div>
      </div>
    </footer>
  );
}
