import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";

import { db, schema } from "@repo/database";

export const useGetTasks = routeLoader$(async (requestEvent) => {
  const tasks = await db.select().from(schema.tasks);

  return tasks;
});

export const useAddTask = routeAction$(async (data, requestEvent) => {
  const name = data.name.toString().trim();

  const task = await db
    .insert(schema.tasks)
    .values({
      name,
    })
    .returning();

  return task[0];
});

export default component$(() => {
  const tasks = useGetTasks();
  const addTask = useAddTask();

  return (
    <>
      <h1>Tasks</h1>

      {(tasks.value && (
        <ul>
          {tasks.value.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      )) || <div>Task list empty!</div>}

      <br />

      <Form action={addTask}>
        <label for="name">Task name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
        />
        <button type="submit">Create</button>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
