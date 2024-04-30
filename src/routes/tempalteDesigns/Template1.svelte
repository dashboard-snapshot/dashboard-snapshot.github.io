<div class="snap-component">
  <div class="template-wrap">
    <p class="text mt-0">
      The overall Sales is $652,989.00.<br /> Top 3 State(s): <br />- South
      Dakota ($163.00), <br />- Montana ($468.00), and <br />- Nebraska
      ($674.00).<br /> Bottom 3 State(s): <br />- Texas ($64,944.00), <br />-
      New York ($83,787.00), and <br />- California ($124,026.00).
      <button class="system-button ms-2">– Show less</button>
    </p>
    <div class="annotation-origin">
      <div class="bar-group overview ">
        <div class="label ">Sales</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 100%; left: 0%; background-color: #0029FF; opacity: 1;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(0); color: white"
              >$652,989.00</span
            >
          </div>
        </div>
      </div>
      <div class="mb-1 w-100" />
      <div class="mb-1">Top 3 State(s)</div>
      <div class="bar-group breakdown ">
        <div class="label ">California</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 18.993581821439566%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$124,026.00</span
            >
          </div>
        </div>
      </div>
      <div class="bar-group breakdown ">
        <div class="label ">New York</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 12.83130343696448%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$83,787.00</span
            >
          </div>
        </div>
      </div>
      <div class="bar-group breakdown ">
        <div class="label ">Texas</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 9.945649926721584%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$64,944.00</span
            >
          </div>
        </div>
      </div>
      <div class="mb-1">Bottom 3 State(s)</div>
      <div class="bar-group breakdown ">
        <div class="label ">Nebraska</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 0.10321766522866388%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$674.00</span
            >
          </div>
        </div>
      </div>
      <div class="bar-group breakdown ">
        <div class="label ">Montana</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 0.07167042630120875%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$468.00</span
            >
          </div>
        </div>
      </div>
      <div class="bar-group breakdown ">
        <div class="label ">South Dakota</div>
        <div class="bar ">
          <div
            class="bar-item "
            style="position: absolute; top: 0; width: 0.02496213565619023%; left: 0%; background-color: #0029FF; opacity: 0.7;"
          >
            <span
              class="bar-caption "
              style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;"
              >$163.00</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  div.snap-component {
    position: relative;
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 450px;
    padding: 0.5rem;
    border: 0.714286px solid;
  }
  .snap-component p.text {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    line-height: 160%;
  }

  p.text button {
    appearance: none;
    padding: 0.3rem 0.5rem;
    margin: 0;
    border: 1px solid transparent;
    border-radius: var(--default-radius-desktop);
    font-size: 0.9rem;
    font-weight: var(--medium-weight);
    line-height: 100%;
    background: transparent;
  }

  .snap-component .mt-0 {
    margin-top: 0;
  }
  .snap-component .mb-1 {
    margin-bottom: 0.25rem;
  }
  .w-100 {
    width: 100%;
  }
  .snap-component .bar-group {
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 0.25rem;
  }
  .snap-component .bar-group.overview {
    font-size: 0.9rem;
    color: #333333;
  }
  .snap-component .bar-group.breakdown {
    font-size: 0.8rem;
    color: #666666;
  }

  .snap-component .label {
    width: 25%;
    height: 100%;
    line-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .snap-component .bar {
    position: relative;
    width: 75%;
    border-radius: 3px;
    overflow: hidden;
    background-color: #f0f0f0;
  }
  .snap-component .bar-group.overview .bar {
    height: 1.1rem;
  }
  .snap-component .bar-group.breakdown .bar {
    height: 0.9rem;
  }
  .snap-component .bar .bar-item {
    height: 100%;
    line-height: 100%;
    border-radius: 3px;
  }

  .snap-component .bar-group.overview .bar .bar-caption {
    font-size: 0.7rem;
    padding: 0.2rem;
    height: 1.1rem;
    line-height: 100%;
    white-space: nowrap;
  }
  .snap-component .bar-group.breakdown .bar .bar-caption {
    font-size: 0.7rem;
    padding: 0.1rem;
    height: 0.9rem;
    line-height: 100%;
    white-space: nowrap;
  }

  @media screen and (min-width: 951px) {
    /* desktop */
    div.snap-component {
      border-radius: var(--default-radius-desktop);
    }
  }
  @media screen and (max-width: 950px) {
    /* mobile */
    div.snap-component {
      border-radius: var(--default-radius-mobile);
    }
  }
  @media print {
    /* print */
    div.snap-component {
      border-radius: var(--default-radius-print);
    }
  }

  /* lightmode */
  @media (prefers-color-scheme: light) {
    div.snap-component {
      border-color: #dddddd;
      background-color: #ffffff;
    }
    .snap-component .bar-group.overview {
      color: #333333;
    }
    .snap-component .bar-group.breakdown {
      color: #666666;
    }
    .snap-component .bar {
      background-color: #f0f0f0;
    }
    p.text button  {
      color: #454545;
    }
  }
  /* darkmode */
  @media (prefers-color-scheme: dark) {
    div.snap-component {
      border-color: #878787;
      background-color: #263238;
    }
    .snap-component .bar-group.overview {
      color: #dddddd;
    }
    .snap-component .bar-group.breakdown {
      color: #dadada;
    }
    .snap-component .bar {
      background-color: #546e7a;
    }
    p.text button  {
      color: #dddddd;
    }
  }
</style>
