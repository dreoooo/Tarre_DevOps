const API_URL = "http://localhost:8000";

export async function getTodos() {
  const response = await fetch(`${API_URL}/todo`);

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export async function createTodo(data: {
  title: string;
  description: string;
}) {
  const response = await fetch(`${API_URL}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function updateTodo(
  id: number,
  data: {
    title: string;
    description: string;
  }
) {
  const response = await fetch(`${API_URL}/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function deleteTodo(id: number) {
  await fetch(`${API_URL}/todo/${id}`, {
    method: "DELETE",
  });
}