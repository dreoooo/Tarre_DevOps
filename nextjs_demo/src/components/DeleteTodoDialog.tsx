"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteTodoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export default function DeleteTodoDialog({
  open,
  onOpenChange,
  onConfirm,
}: DeleteTodoDialogProps) {
  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent
        className="
          rounded-3xl
          p-8
          sm:max-w-[450px]
        "
      >
        <AlertDialogHeader>
          <div
            className="
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-red-50
              text-2xl
            "
          >
            🗑️
          </div>

          <AlertDialogTitle
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-gray-900
            "
          >
            Delete Todo?
          </AlertDialogTitle>

          <AlertDialogDescription
            className="
              mt-3
              text-sm
              leading-relaxed
              text-gray-500
            "
          >
            Are you sure you want to delete this task?
            <br />
            <br />
            This action is permanent and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter
          className="
            mt-6
            gap-3
          "
        >
          <AlertDialogCancel
            className="
              rounded-xl
              px-5
            "
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            className="
              rounded-xl
              bg-red-600
              px-5
              hover:bg-red-700
            "
            onClick={onConfirm}
          >
            Delete Task
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}