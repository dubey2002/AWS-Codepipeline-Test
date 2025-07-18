async function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (!task) return;

  try {

    const response = await fetch("/api/this-endpoint-does-not-exist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("todo-list").appendChild(li);
    input.value = "";

  } catch (err) {
    console.error("Failed to add task:", err);
    alert("Server error: 502 Bad Gateway (Simulated)");
  }
}
