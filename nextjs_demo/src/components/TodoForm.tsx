"use client";

import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Todo } from "@/types/todo";

interface TodoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (title: string, description: string) => void;
  todo?: Todo | null;
}

export default function TodoForm({
  open,
  onOpenChange,
  onSave,
  todo,
}: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [todo, open]);

  function handleSave() {
    onSave(title, description);

    setTitle("");
    setDescription("");

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          rounded-3xl
          sm:max-w-[500px]
          p-8
        "
      >
        <DialogHeader>
          <DialogTitle
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-gray-900
              antialiased
            "
          >
            {todo ? "Edit Task" : "Create New Task"}
          </DialogTitle>

          <p className="text-sm text-gray-500 mt-2">
            {todo
              ? "Update your task details below."
              : "Add a new task to your todo list."}
          </p>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Task Title
            </Label>

            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Learn React"
              className="
                rounded-xl
                h-11
                focus-visible:ring-2
              "
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </Label>

            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your task..."
              className="
                min-h-[120px]
                rounded-xl
                resize-none
                focus-visible:ring-2
              "
            />
          </div>
        </div>

        <DialogFooter
          className="
            mt-8
            gap-3
            sm:justify-end
          "
        >
          <Button
            variant="outline"
            className="
              rounded-xl
              px-5
            "
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            className="
              rounded-xl
              px-6
            "
            onClick={handleSave}
          >
            {todo ? "Update Task" : "Create Task"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}