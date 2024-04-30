<script>
  import DescribedCode from "./DescribedCode.svelte";
  import IntervalDefinition from "./IntervalDefinition.svelte";
  import PeriodicityDefinition from "./PeriodicityDefinition.svelte";

  export let dataTypesToShow = [];

  let showInterval = false;
  let showPeriodicity = false;
</script>

<h3>Legend</h3>
<DescribedCode
  line={"-"}
  description={"A is defined by as B and C. <br/>A is defined by as B, C, and etc.. <br/>A's data type is B. <br/> A is optional. <br/> A is a list of elements of X. <br/> B is an input for A. <br/> A or B. <br /> Either A or B. <br/>If A, then B."}
>
  <entity>A</entity> := <entity>B</entity>, <entity>C</entity> <br />
  <entity>A</entity> := <entity>B</entity>, <entity>C</entity>, ... <br />
  <entity>A</entity>&lt;<type>B</type>&gt; <br />
  (<entity>A</entity>) <br />
  <entity>A</entity>&lt;[X]&gt; <br />
  <entity>A</entity> &lt;- <entity>B</entity> <br />
  A | B <br />
  &#123; A | B &#125; <br />
  &#123; A ? B &#125;
</DescribedCode>

{#if dataTypesToShow.length > 0}
  <h3>Data types</h3>
  <ul>
    {#if dataTypesToShow.includes("uuid")}
      <li>
        <a href="https://datatracker.ietf.org/doc/html/rfc4122" target="_blank"
          >UUID</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("pointer")}
      <li>
        ID in general refers to a unique ID in any format that can point to the
        corresponding object.
      </li>
    {/if}
    {#if dataTypesToShow.includes("grid")}
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template"
          target="_blank">CSS grid template definition</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("datetime")}
      <li>
        Date, time expression in <a
          href="https://www.iso.org/standard/70907.html"
          target="_blank">ISO8601</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("interval")}
      <li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          on:click={() => {
            showInterval = true;
          }}
          href="#">Interval</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("periodicity")}
      <li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          on:click={() => {
            showPeriodicity = true;
          }}
          href="#">Periodicity</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("format")}
      <li>
        <a href="https://github.com/d3/d3-format" target="_blank"
          >Number format strings (D3)</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("svelte")}
      <li>
        <a href="https://svelte.dev/docs#template-syntax" target="_blank"
          >Svelte</a
        > for Philo
      </li>
    {/if}
    {#if dataTypesToShow.includes("colorScheme")}
      <li>
        <a href="https://observablehq.com/@d3/color-schemes" target="_blank"
          >Color scheme presets (D3)</a
        >
      </li>
    {/if}
    {#if dataTypesToShow.includes("scaleType")}
      <li>
        <a href="https://github.com/d3/d3-scale" target="_blank"
          >Scale types (D3)</a
        >
      </li>
    {/if}
  </ul>
{/if}
{#if showInterval}
  <IntervalDefinition close={() => (showInterval = false)} />
{/if}
{#if showPeriodicity}
  <PeriodicityDefinition close={() => (showPeriodicity = false)} />
{/if}
