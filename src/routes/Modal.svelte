<script>
  export let id = "modal";
  export let close;
</script>

<div class="modal-background">
  <section class="modal" {id}>
    <div class="modal-header">
      <h3>
        <slot name="header">Modal header</slot>
      </h3>
    </div>
    <div class="modal-body">
      <slot name="body">Modal body</slot>
    </div>
    <div class="modal-footer">
      <button type="button" on:click={close}>Close</button>
    </div>
  </section>
</div>

<style>
  @media screen and (min-width: 951px) {
    /* desktop */
    .modal-background {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 3999;
    }

    .modal {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 800px;
      max-height: 90vh;
      margin: 0;
      padding: 0;
      transform: translate(-50%, -50%);
      border: 1px solid;
      border-radius: var(--default-radius-desktop);
      overflow: hidden;
    }

    .modal-header {
      width: 100%;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid;
    }

    .modal-header h3 {
      padding: 1rem;
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .modal-body {
      width: 100%;
      max-height: calc(90vh - 126px);
      padding: 1rem;
      margin: 0;
      overflow-y: scroll;
    }

    .modal-footer {
      width: 100%;
      margin: 0;
      padding: 1rem;
      text-align: right;
    }

    .modal-footer button {
      appearance: none;
      display: inline-block;
      width: auto;
      margin-bottom: 0rem;
      padding: 0.5rem;
      border: 1px solid;
      border-radius: var(--default-radius-desktop);
      font-size: 1rem;
      cursor: pointer;
      text-align: left;
    }
  }

  /* light mode */
  @media (prefers-color-scheme: light) {
    .modal {
      border-color: #dddddd;
      background-color: #ffffff;
    }
    .modal-header {
      border-color: #dddddd;
    }
    .modal-footer button {
      border-color: #dddddd;
      background-color: transparent;
      color: #333333;
    }
    .modal-footer {
      background-color: #f7f7f7;
    }
  }
  /* darkmode */
  @media (prefers-color-scheme: dark) {
    .modal {
      border-color: #454545;
      background-color: #263238;
      color: #424242;
    }
    .modal-header {
      border-color: #454545;
    }
    .modal-footer button {
      border-color: #f0f0f0;
      background-color: transparent;
      color: #f0f0f0;
    }
    .modal-footer {
      background-color: #37474f;
    }
  }
</style>
