<script>
  export let goTo;
</script>

<p>
  This website provides technical details of dashboard snapshots. We named the
  prototype interface <em>Philo</em> for reference purposes.
</p>

<h2>Table of Contents</h2>
<ul>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("snapshot")}>Snapshot Formalization</a>:
    snapshot specification formalization
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("component")}>Component Formalization</a>:
    snapshot component specification formalization
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("template-formal")}
      >Template Design Formalization</a
    >: component template design formalization
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("template-spec")}
      >Template Configuration Formalization</a
    >: component template configuration formalization
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("template-design")}>Template Designs</a>:
    nine template designs for communication goals/tasks we found from the
    co-design workshop
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("curation")}>Curation methods</a>: four
    curation methods for multi-component dashboard snapshots
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("text-expr")}>Text Expressions</a>:
    expression rules used for text templates in a component
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("video")}>Scenario Videos</a>: shortened
    and original (extended) usage scenarios.
  </li>
  <li>
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click={() => goTo("interface")}>Interface Documentation</a>:
    detailed description the interfaces of the Philo system (Section 4)
  </li>
</ul>
