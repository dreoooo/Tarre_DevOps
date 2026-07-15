import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TodoCardProps {
  id: number;
  title: string;
  description: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoCard({
  id,
  title,
  description,
  onEdit,
  onDelete,
}: TodoCardProps) {
  return (
    <Card
      className="
        group
        rounded-3xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <CardHeader className="pb-3">
        <CardTitle
          className="
            text-xl
            font-semibold
            tracking-tight
            text-gray-900
            antialiased
            line-clamp-1
          "
        >
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p
          className="
            min-h-[60px]
            text-sm
            leading-relaxed
            text-gray-500
            antialiased
          "
        >
          {description}
        </p>

        <div
          className="
            mt-6
            flex
            justify-end
            gap-3
          "
        >
          <Button
            variant="outline"
            className="
              rounded-xl
              px-4
              transition-all
              duration-200
              hover:bg-gray-100
            "
            onClick={() => onEdit(id)}
          >
            ✏️ Edit
          </Button>

          <Button
            variant="destructive"
            className="
              rounded-xl
              px-4
              transition-all
              duration-200
              hover:scale-105
            "
            onClick={() => onDelete(id)}
          >
            🗑 Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}