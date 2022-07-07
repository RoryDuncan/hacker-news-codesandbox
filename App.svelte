<script>
  import Story from "./components/Story.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Button from "./Button.svelte";
  import { getTopStories } from "./services/hacker-news";

  const items = writable([]);

  onMount(() => {
    console.clear();
    getTopStories(10).then(results => {
      console.log(results);
      items.set(results);
    });
  });
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }

  ol {
    text-align: left;
  }
</style>

<main>
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>
	<ol>
    {#each $items as story, i}

      <li class="story">
        <Story {story} />
      </li>
    {:else}
      <li>
        <p>No items or loading</p>
      </li>
    {/each}
  </ol>

</main>