import { db, schema } from "@/db";
import { Suspense } from "react";

export default async function Test() {
  return (
    <>
      <h1>Tasks</h1>

      <Suspense fallback="Loading tasks...">
        <TaskList />
      </Suspense>

      <br />

      <AddTask />
    </>
  );
}

async function TaskList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const tasks = await db.select().from(schema.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} - {task.completed ? "completed" : "not completed"}
        </li>
      ))}
    </ul>
  );
}

async function AddTask() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const task = formData.get("task")?.toString();

    if (task) {
      const result = await db
        .insert(schema.tasks)
        .values({
          name: task,
        })
        .returning();

      return result;
    }

    return null;
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="task">Task</label>
      <br />
      <input
        type="text"
        name="task"
        id="task"
      />

      <button type="submit">Create</button>
    </form>
  );
}
