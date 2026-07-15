import TodoCard from "./TodoCard";
import { Todo } from "@/types/todo";

interface TodoGridProps {
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoGrid({
  todos,
  onEdit,
  onDelete,
}: TodoGridProps) {

  if (todos.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div
          className="
            rounded-3xl
            border
            bg-white/80
            backdrop-blur-sm
            p-12
            text-center
            shadow-sm
          "
        >
          <div className="text-4xl mb-4">
            📝
          </div>

          <h2
            className="
              text-xl
              font-semibold
              tracking-tight
              text-gray-900
              antialiased
            "
          >
            No tasks yet
          </h2>

          <p
            className="
              mt-3
              text-sm
              text-gray-500
              antialiased
            "
          >
            Click{" "}
            <span className="font-medium text-gray-700">
              "Add Todo"
            </span>{" "}
            to create your first task.
          </p>
        </div>
      </section>
    );
  }


  return (
    <section className="max-w-5xl mx-auto px-6 pb-10">

      <div
        className="
          grid
          gap-6
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="
              animate-in
              fade-in
              slide-in-from-bottom-2
              duration-300
            "
          >

            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
              onEdit={onEdit}
              onDelete={onDelete}
            />

          </div>
        ))}

      </div>

    </section>
  );
}