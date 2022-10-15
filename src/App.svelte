<script>
  import { fade } from "svelte/transition/";
  import { fetchImagesFromAPI } from "./unsplash";

  let searchQuery = "";
  let fetchImages = [];

  const onSubmit = async (evt) => {
    evt.preventDefault();
    if (!searchQuery) {
      return;
    }
    if (searchQuery && typeof searchQuery === "string") {
      fetchImages = await fetchImagesFromAPI(searchQuery, 4);
    }
    fetchImages = fetchImages.results;
  };
</script>

<h1>Yet another photo app</h1>
<form id="search" on:submit={onSubmit}>
  <input type="text" bind:value={searchQuery} placeholder="try typing cats" />
  <input type="submit" value="Search" />
</form>

<ul>
  {#each fetchImages as image}
    <li transition:fade><img src={image.urls.small} alt="" /></li>
  {/each}
</ul>
