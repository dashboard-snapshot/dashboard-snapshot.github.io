<script>
  export let line, description;
</script>

<div class="code-description">
  <div class="code-wrap">
    <div class="line">{line}</div>
    <code><slot /></code>
  </div>
  <div class="description-wrap">
    <div class="description">{@html description}</div>
  </div>
</div>

<style>
  .line,
  code {
    font-family: var(--monospace), monospace !important;
  }
  @media screen and (min-width: 951px) {
    /* desktop */
    .code-description {
      display: flex;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      line-height: 150%;
    }
    .code-wrap {
      width: 50%;
      display: flex;
      padding: 0.5rem;
      border-radius: var(--default-radius-desktop);
    }
    .line {
      width: 1.5rem;
    }
    code {
      width: calc(100% - 1.5rem);
    }
    .description-wrap {
      padding: 0.5rem;
      width: 50%;
    }
  }
  @media screen and (max-width: 950px) {
    /* mobile */
    .code-description {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      line-height: 150%;
    }
    .code-wrap {
      display: flex;
      padding: 0.5rem;
      border-radius: var(--default-radius-mobile);
    }
    .line {
      width: 1.5rem;
    }
    code {
      width: calc(100% - 1.5rem);
    }
    .description-wrap {
      padding: 0.5rem 0.5rem 0.5rem 2rem;
    }
  }
  @media print {
    /* desktop */
    .code-description {
      display: flex;
      margin-top: 2mm;
      font-size: 2.5mm;
      line-height: 150%;
    }
    .code-wrap {
      width: 50%;
      display: flex;
      padding: 1mm;
      height: auto;
      border-radius: var(--default-radius-desktop);
    }
    .line {
      width: 6mm;
    }
    code {
      width: calc(100% - 6mm);
    }
    .description-wrap {
      padding: 1mm 1mm 1mm 3mm;
      width: 50%;
    }
  }

  /* light mode */
  @media (prefers-color-scheme: light) {
    .code-wrap {
      background-color: #f0f0f0;
    }
    :global(code entity) {
      color: #2962ff;
      font-family: var(--monospace), monospace !important;
    }
    :global(code type) {
      color: #00c853;
      font-family: var(--monospace), monospace !important;
    }
    :global(code literal) {
      color: #ff6d00;
      font-family: var(--monospace), monospace !important;
    }
  }
  /* darkmode */
  @media (prefers-color-scheme: dark) {
    .code-wrap {
      background-color: #37474f;
    }
    :global(code entity) {
      color: #82b1ff;
      font-family: var(--monospace), monospace !important;
    }
    :global(code type) {
      color: #b9f6ca;
      font-family: var(--monospace), monospace !important;
    }
    :global(code literal) {
      color: #ffd180;
      font-family: var(--monospace), monospace !important;
    }
  }
</style>
