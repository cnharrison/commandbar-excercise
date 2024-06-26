import CookieGame from "./components/CookieGame";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      <CookieGame />
    </main>
  );
}