<script>
  import Template1 from "./tempalteDesigns/Template1.svelte";
  import Template2 from "./tempalteDesigns/Template2.svelte";
  import Template3 from "./tempalteDesigns/Template3.svelte";
  import Template4 from "./tempalteDesigns/Template4.svelte";
  import Template5 from "./tempalteDesigns/Template5.svelte";
  import Template6 from "./tempalteDesigns/Template6.svelte";
  import Template7 from "./tempalteDesigns/Template7.svelte";
  import Template8 from "./tempalteDesigns/Template8.svelte";
  import Template9 from "./tempalteDesigns/Template9.svelte";

  let templateContent = [
    {
      index: 1,
      name: "Simple breakdown",
      keywords: "Breakdown, ranking",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "None",
    },
    {
      index: 2,
      name: "Ratio and two breakdowns",
      keywords: "Percentage, proportion, breakdown, ranking",
      applicability: "nMeasure (1), minBreakdown (1), maxBreakdown (2)",
      params: "None",
    },
    {
      index: 3,
      name: "Change over time",
      keywords: "Trend, breakdown, time-series",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None",
    },
    {
      index: 4,
      name: "Time difference",
      keywords: "Time delta, time difference",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None",
    },
    {
      index: 5,
      name: "Comparison to the last time",
      keywords: "Time comparison",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None",
    },
    {
      index: 6,
      name: "Breakdown and goal",
      keywords: "Threshold, goal, progress",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "Goal (number), goal name (string)",
    },
    {
      index: 7,
      name: "Simple threshold",
      keywords: "Indicator, safety",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "Threshold range (min and max numbers), threshold name (string)",
    },
    {
      index: 8,
      name: "Time-series and threshold",
      keywords: "Indicator, safety, confidence",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params:
        "Threshold range (min and max numbers), threshold name (string), per-breakdown threshold ranges (min and max numbers)",
    },
    {
      index: 9,
      name: "Trend or correlation",
      keywords: "Trend, correlation, bivariate",
      applicability: "nMeasure (2), maxBreakdown (1)",
      params: "None",
    },
  ];
  let template = 1;
</script>

<h2>Template Designs</h2>

<p>
  We derived a set of template designs to serve or achieve a business-oriented
  "message" or goal from our co-design workshop, including breaking down a
  value, comparing a value to a goal, or seeing a trend.
</p>

<h3>Overview</h3>

<table class="template-list">
  <thead>
    <tr>
      <th class="col-name">Name</th>
      <th class="col-task">Task keywords</th>
      <th class="col-applicability">Applicability</th>
      <th class="col-params">Parameters</th>
    </tr>
  </thead>
  <tbody>
    {#each templateContent as temp}
      <tr>
        <td class="col-name"
          ><button
            class={template == temp.index ? "curr" : ""}
            on:click={() => {
              template = temp.index;
            }}>{temp.name}</button
          ></td
        >
        <td class="col-task">{temp.keywords}</td>
        <td class="col-applicability">{temp.applicability}</td>
        <td class="col-params">{temp.params}</td>
      </tr>
    {/each}
  </tbody>
</table>

<h3>Browse template designs</h3>

<div class="template-browser-buttons">
  {#each templateContent as temp}
    <button
      class={template == temp.index ? "curr" : ""}
      on:click={() => {
        template = temp.index;
      }}>{temp.name}</button
    >
  {/each}
</div>

{#if template == 1}
  <Template1 />
{:else if template == 2}
  <Template2 />
{:else if template == 3}
  <Template3 />
{:else if template == 4}
  <Template4 />
{:else if template == 5}
  <Template5 />
{:else if template == 6}
  <Template6 />
{:else if template == 7}
  <Template7 />
{:else if template == 8}
  <Template8 />
{:else if template == 9}
  <Template9 />
{/if}

<h4>Original dashbaord selection</h4>

<img
  src="images/original-dashboard.png"
  alt="A visualization dashboard with a top left cell highlighted. The zoomed-in version of the highlighed cell is superpositioned, syaing 'Sales: $652,989.00'"
/>
<p>Note: before applying a time frame (i.e., Year-to-Date value).</p>

<style>
  @media screen and (min-width: 951px) {
    /* desktop */
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    td,
    th {
      padding: 0.5rem 0;
      border-bottom: 1px solid;
      font-size: 0.9rem;
    }
    .col-name {
      width: 20%;
    }
    .col-task {
      width: 30%;
    }
    .col-applicability {
      width: 25%;
    }
    .col-params {
      width: 25%;
    }
    .template-list button,
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
    tbody,
    tr,
    td,
    th {
      display: block;
    }
    thead {
      display: none;
    }
    tr {
      margin-bottom: 0.5rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid;
    }
    td {
      padding: 0.25rem 0;
      font-size: 0.9rem;
    }
    .col-name::before {
      content: "Name: ";
      font-weight: 600;
    }
    .col-task::before {
      content: "Task keywords: ";
      font-weight: 600;
    }
    .col-applicability::before {
      content: "Applicability: ";
      font-weight: 600;
    }
    .col-params::before {
      content: "Parameters: ";
      font-weight: 600;
    }
    .template-list button,
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
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    td,
    th {
      padding-bottom: 1mm;
      border-bottom: 0.2mm solid #dddddd;
      font-size: 2.5mm;
    }
    .col-name {
      width: 15%;
    }
    .col-task {
      width: 35%;
    }
    .col-applicability {
      width: 25%;
    }
    .col-params {
      width: 25%;
    }
    .template-browser-buttons {
      display: none;
    }
    .template-browser-buttons button,
    .template-list button {
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
    table {
      color: #333333;
    }
    td,
    th {
      border-bottom-color: #dddddd;
    }
    tr {
      border-bottom-color: #dddddd;
    }
    .template-list button,
    .template-browser-buttons button {
      background-color: #f0f0f0;
      color: #333333;
    }
    .template-list button.curr,
    .template-browser-buttons button.curr {
      color: #ad1457;
      background-color: #fce4ec;
    }
  }

  /* darkmode */
  @media (prefers-color-scheme: dark) {
    table {
      color: #e0e0e0;
    }
    td,
    th {
      border-bottom-color: #454545;
    }
    tr {
      border-bottom-color: #454545;
    }
    .template-list button,
    .template-browser-buttons button {
      background-color: #37474f;
      color: #f0f0f0;
    }
    .template-list button.curr,
    .template-browser-buttons button.curr {
      color: #fce4ec;
      background-color: #880e4f;
    }
  }
</style>
