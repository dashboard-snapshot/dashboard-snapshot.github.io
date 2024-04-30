<script>
  import Carousel from "$lib/images/curation-carousel.gif";
  import MiniDash from "$lib/images/curation-mini-dashboard.png";
  import Slideshow from "$lib/images/curation-slideshow.gif";
  import Vertical from "$lib/images/curation-vertical-stack.png";
  let curation = 1;
</script>

<h2>Curation methods</h2>

<p>
  Philo's snapshot supports four curation methods: vertical stack, carousel,
  automated slideshow, and mini-dashboard.
</p>

<div class="template-browser-buttons">
  <button
    class={curation == 1 ? "curr" : ""}
    on:click={() => {
      curation = 1;
    }}>Vertical stack</button
  >
  <button
    class={curation == 2 ? "curr" : ""}
    on:click={() => {
      curation = 2;
    }}>Carousel</button
  >
  <button
    class={curation == 3 ? "curr" : ""}
    on:click={() => {
      curation = 3;
    }}>Automated slideshow</button
  >
  <button
    class={curation == 4 ? "curr" : ""}
    on:click={() => {
      curation = 4;
    }}>Mini-dashboard</button
  >
</div>

{#if curation == 2}
  <h4>Carousel</h4>
  <img
    src={Carousel}
    alt="Four snapshots are navigated using a carousel."
  />
{:else if curation == 3}
  <h4>Automated slideshow</h4>
  <img
    src={Slideshow}
    alt="Three snapshots are automatically played."
  />
{:else if curation == 4}
  <h4>Mini-dashboard</h4>
  <img
    src={MiniDash}
    alt="Four snapshots are arranged in a 2 by 2 grid."
  />
{:else if curation == 1}
  <h4>Vertical stack</h4>
  <img
    src={Vertical}
    alt="Four snapshots are vertically arranged."
    style="max-width: 350px;"
  />
{/if}

<style>
  @media screen and (min-width: 951px) {
    /* desktop */
    .template-browser-buttons button {
      appearance: none;
      width: auto;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
      padding: 0.5rem;
      border: 0;
      font-size: 0.9rem;
      border-radius: var(--default-radius-mobile);
      cursor: pointer;
      line-height: 1;
      text-align: left;
    }
  }
  @media screen and (max-width: 950px) {
    .template-browser-buttons button {
      appearance: none;
      width: auto;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
      padding: 0.5rem;
      border: 0;
      font-size: 0.9rem;
      border-radius: var(--default-radius-mobile);
      cursor: pointer;
      line-height: 1;
      text-align: left;
    }
  }
  @media print {
    /* print */
    .template-browser-buttons {
      display: none;
    }
    .template-browser-buttons button {
      appearance: none;
      width: auto;
      margin: 0;
      padding: 0;
      border: 0;
      text-align: left;
      background-color: transparent;
    }
  }
  /* color */
  /* light mode */
  @media (prefers-color-scheme: light) {
    .template-browser-buttons button {
      background-color: #f0f0f0;
      color: #333333;
    }
    .template-browser-buttons button.curr {
      color: #ad1457;
      background-color: #fce4ec;
    }
  }

  /* darkmode */
  @media (prefers-color-scheme: dark) {
    .template-browser-buttons button {
      background-color: #37474f;
      color: #f0f0f0;
    }
    .template-browser-buttons button.curr {
      color: #fce4ec;
      background-color: #880e4f;
    }
  }
</style>
