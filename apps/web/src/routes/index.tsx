import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <>qwik</>;
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
