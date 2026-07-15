export default function Header() {
  return (
    <header className="max-w-5xl mx-auto px-6 pt-10 pb-6">
      <div className="rounded-3xl border bg-white/80 backdrop-blur-sm shadow-sm px-8 py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 antialiased">
          Dreo's DevOps Todo Manager
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-500 font-normal tracking-wide antialiased">
          Manage your daily tasks efficiently and stay organized.
        </p>

      </div>
    </header>
  );
}