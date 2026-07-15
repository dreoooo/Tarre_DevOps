import TodoDashboard from "@/components/TodoDashboard";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-gray-50
        antialiased
      "
    >
      <TodoDashboard />
    </main>
  );
}