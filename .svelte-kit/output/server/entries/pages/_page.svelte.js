import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, d as each, n as null_to_empty } from "../../chunks/ssr.js";
const HomeContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { goTo } = $$props;
  if ($$props.goTo === void 0 && $$bindings.goTo && goTo !== void 0)
    $$bindings.goTo(goTo);
  return `<p data-svelte-h="svelte-k12317">This website provides technical details of dashboard snapshots. We named the
  prototype interface <em>Philo</em> for reference purposes.</p> <h2 data-svelte-h="svelte-a010b9">Table of Contents</h2> <ul><li>  <a href="#" data-svelte-h="svelte-elra7a">Snapshot Formalization</a>:
    snapshot specification formalization</li> <li>  <a href="#" data-svelte-h="svelte-snes90">Component Formalization</a>:
    snapshot component specification formalization</li> <li>  <a href="#" data-svelte-h="svelte-1iyilza">Template Design Formalization</a>: component template design formalization</li> <li>  <a href="#" data-svelte-h="svelte-17ngq4u">Template Configuration Formalization</a>: component template configuration formalization</li> <li>  <a href="#" data-svelte-h="svelte-1d540vv">Template Designs</a>:
    nine template designs for communication goals/tasks we found from the
    co-design workshop</li> <li>  <a href="#" data-svelte-h="svelte-3bb75d">Curation methods</a>: four
    curation methods for multi-component dashboard snapshots</li> <li>  <a href="#" data-svelte-h="svelte-x3be6">Text Expressions</a>:
    expression rules used for text templates in a component</li> <li>  <a href="#" data-svelte-h="svelte-s3p0bo">Scenario Videos</a>: shortened
    and original (extended) usage scenarios.</li> <li>  <a href="#" data-svelte-h="svelte-whnoob">Interface Documentation</a>:
    detailed description the interfaces of the Philo system (Section 4)</li></ul>`;
});
const ExtendedVideo = "/_app/immutable/assets/philo-scenario-extended.CbDbEIwh.mp4";
const ShortenedVideo = "/_app/immutable/assets/philo-scenario-short.BRMbjmCs.mp4";
const ExtendedVideoVTT = "/_app/immutable/assets/philo-scenario-extended.xXImSUsj.vtt";
const ShortenedVideoVTT = "/_app/immutable/assets/philo-scenario-short.DnIYT7gR.vtt";
const VideoContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1a9gq8k">Scenario Videos</h2> <p data-svelte-h="svelte-4p54sa">We present demonstration scenarios as introduced in Section 5. The demonstration prototype is named &quot;Philo.&quot;</p> <p data-svelte-h="svelte-1d9dkw7">Note: In the video, &quot;Component Authoring Interface&quot; refers to <em>Component Creator</em>
  in the paper, and &quot;Snapshot Composing and Exporting Interface&quot; means
  <em>Snapshot Composer</em>.</p> <h3 data-svelte-h="svelte-ztuze2">Shortened scenario</h3> <video controls width="100%" muted data-svelte-h="svelte-1ra3ckj"><source${add_attribute("src", ShortenedVideo, 0)} type="video/mp4"><track label="English" kind="subtitles" srclang="en"${add_attribute("src", ShortenedVideoVTT, 0)} default>
  This browser does not support the HTML5 video element.</video> <h3 data-svelte-h="svelte-1dwpu8p">Extended scenario</h3> <video controls width="100%" muted data-svelte-h="svelte-sd1r97"><source${add_attribute("src", ExtendedVideo, 0)} type="video/mp4"><track label="English" kind="subtitles" srclang="en"${add_attribute("src", ExtendedVideoVTT, 0)} default>
  This browser does not support the HTML5 video element.</video>`;
});
const css$4 = {
  code: ".line.svelte-xx4csa,code.svelte-xx4csa{font-family:var(--monospace), monospace !important}@media screen and (min-width: 951px){.code-description.svelte-xx4csa{display:flex;margin-top:0.25rem;margin-bottom:0.5rem;font-size:0.9rem;line-height:150%}.code-wrap.svelte-xx4csa{width:50%;display:flex;padding:0.5rem;border-radius:var(--default-radius-desktop)}.line.svelte-xx4csa{width:1.5rem}code.svelte-xx4csa{width:calc(100% - 1.5rem)}.description-wrap.svelte-xx4csa{padding:0.5rem;width:50%}}@media screen and (max-width: 950px){.code-description.svelte-xx4csa{display:block;margin-top:0.25rem;margin-bottom:0.5rem;font-size:0.9rem;line-height:150%}.code-wrap.svelte-xx4csa{display:flex;padding:0.5rem;border-radius:var(--default-radius-mobile)}.line.svelte-xx4csa{width:1.5rem}code.svelte-xx4csa{width:calc(100% - 1.5rem)}.description-wrap.svelte-xx4csa{padding:0.5rem 0.5rem 0.5rem 2rem}}@media print{.code-description.svelte-xx4csa{display:flex;margin-top:2mm;font-size:2.5mm;line-height:150%}.code-wrap.svelte-xx4csa{width:50%;display:flex;padding:1mm;height:auto;border-radius:var(--default-radius-desktop)}.line.svelte-xx4csa{width:6mm}code.svelte-xx4csa{width:calc(100% - 6mm)}.description-wrap.svelte-xx4csa{padding:1mm 1mm 1mm 3mm;width:50%}}@media(prefers-color-scheme: light){.code-wrap.svelte-xx4csa{background-color:#f0f0f0}code entity{color:#2962ff;font-family:var(--monospace), monospace !important}code type{color:#00c853;font-family:var(--monospace), monospace !important}code literal{color:#ff6d00;font-family:var(--monospace), monospace !important}}@media(prefers-color-scheme: dark){.code-wrap.svelte-xx4csa{background-color:#37474f}code entity{color:#82b1ff;font-family:var(--monospace), monospace !important}code type{color:#b9f6ca;font-family:var(--monospace), monospace !important}code literal{color:#ffd180;font-family:var(--monospace), monospace !important}}",
  map: '{"version":3,"file":"DescribedCode.svelte","sources":["DescribedCode.svelte"],"sourcesContent":["<script>\\n  export let line, description;\\n<\/script>\\n\\n<div class=\\"code-description\\">\\n  <div class=\\"code-wrap\\">\\n    <div class=\\"line\\">{line}</div>\\n    <code><slot /></code>\\n  </div>\\n  <div class=\\"description-wrap\\">\\n    <div class=\\"description\\">{@html description}</div>\\n  </div>\\n</div>\\n\\n<style>\\n  .line,\\n  code {\\n    font-family: var(--monospace), monospace !important;\\n  }\\n  @media screen and (min-width: 951px) {\\n    /* desktop */\\n    .code-description {\\n      display: flex;\\n      margin-top: 0.25rem;\\n      margin-bottom: 0.5rem;\\n      font-size: 0.9rem;\\n      line-height: 150%;\\n    }\\n    .code-wrap {\\n      width: 50%;\\n      display: flex;\\n      padding: 0.5rem;\\n      border-radius: var(--default-radius-desktop);\\n    }\\n    .line {\\n      width: 1.5rem;\\n    }\\n    code {\\n      width: calc(100% - 1.5rem);\\n    }\\n    .description-wrap {\\n      padding: 0.5rem;\\n      width: 50%;\\n    }\\n  }\\n  @media screen and (max-width: 950px) {\\n    /* mobile */\\n    .code-description {\\n      display: block;\\n      margin-top: 0.25rem;\\n      margin-bottom: 0.5rem;\\n      font-size: 0.9rem;\\n      line-height: 150%;\\n    }\\n    .code-wrap {\\n      display: flex;\\n      padding: 0.5rem;\\n      border-radius: var(--default-radius-mobile);\\n    }\\n    .line {\\n      width: 1.5rem;\\n    }\\n    code {\\n      width: calc(100% - 1.5rem);\\n    }\\n    .description-wrap {\\n      padding: 0.5rem 0.5rem 0.5rem 2rem;\\n    }\\n  }\\n  @media print {\\n    /* desktop */\\n    .code-description {\\n      display: flex;\\n      margin-top: 2mm;\\n      font-size: 2.5mm;\\n      line-height: 150%;\\n    }\\n    .code-wrap {\\n      width: 50%;\\n      display: flex;\\n      padding: 1mm;\\n      height: auto;\\n      border-radius: var(--default-radius-desktop);\\n    }\\n    .line {\\n      width: 6mm;\\n    }\\n    code {\\n      width: calc(100% - 6mm);\\n    }\\n    .description-wrap {\\n      padding: 1mm 1mm 1mm 3mm;\\n      width: 50%;\\n    }\\n  }\\n\\n  /* light mode */\\n  @media (prefers-color-scheme: light) {\\n    .code-wrap {\\n      background-color: #f0f0f0;\\n    }\\n    :global(code entity) {\\n      color: #2962ff;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n    :global(code type) {\\n      color: #00c853;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n    :global(code literal) {\\n      color: #ff6d00;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n  }\\n  /* darkmode */\\n  @media (prefers-color-scheme: dark) {\\n    .code-wrap {\\n      background-color: #37474f;\\n    }\\n    :global(code entity) {\\n      color: #82b1ff;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n    :global(code type) {\\n      color: #b9f6ca;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n    :global(code literal) {\\n      color: #ffd180;\\n      font-family: var(--monospace), monospace !important;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAeE,mBAAK,CACL,kBAAK,CACH,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEnC,+BAAkB,CAChB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,MAAM,CACrB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IACf,CACA,wBAAW,CACT,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,IAAI,wBAAwB,CAC7C,CACA,mBAAM,CACJ,KAAK,CAAE,MACT,CACA,kBAAK,CACH,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,MAAM,CAC3B,CACA,+BAAkB,CAChB,OAAO,CAAE,MAAM,CACf,KAAK,CAAE,GACT,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEnC,+BAAkB,CAChB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,MAAM,CACrB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IACf,CACA,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,IAAI,uBAAuB,CAC5C,CACA,mBAAM,CACJ,KAAK,CAAE,MACT,CACA,kBAAK,CACH,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,MAAM,CAC3B,CACA,+BAAkB,CAChB,OAAO,CAAE,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,IAChC,CACF,CACA,OAAO,KAAM,CAEX,+BAAkB,CAChB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IACf,CACA,wBAAW,CACT,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,wBAAwB,CAC7C,CACA,mBAAM,CACJ,KAAK,CAAE,GACT,CACA,kBAAK,CACH,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CACxB,CACA,+BAAkB,CAChB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CACxB,KAAK,CAAE,GACT,CACF,CAGA,MAAO,uBAAuB,KAAK,CAAE,CACnC,wBAAW,CACT,gBAAgB,CAAE,OACpB,CACQ,WAAa,CACnB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACQ,SAAW,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACQ,YAAc,CACpB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACF,CAEA,MAAO,uBAAuB,IAAI,CAAE,CAClC,wBAAW,CACT,gBAAgB,CAAE,OACpB,CACQ,WAAa,CACnB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACQ,SAAW,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACQ,YAAc,CACpB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,WAAW,CAAC,CAAC,CAAC,SAAS,CAAC,UAC3C,CACF"}'
};
const DescribedCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { line, description } = $$props;
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$4);
  return `<div class="code-description svelte-xx4csa"><div class="code-wrap svelte-xx4csa"><div class="line svelte-xx4csa">${escape(line)}</div> <code class="svelte-xx4csa">${slots.default ? slots.default({}) : ``}</code></div> <div class="description-wrap svelte-xx4csa"><div class="description"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></div></div> </div>`;
});
const CodeLegend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dataTypesToShow = [] } = $$props;
  if ($$props.dataTypesToShow === void 0 && $$bindings.dataTypesToShow && dataTypesToShow !== void 0)
    $$bindings.dataTypesToShow(dataTypesToShow);
  return `<h3 data-svelte-h="svelte-r71095">Legend</h3> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: "-",
      description: "A is defined by as B and C. <br/>A is defined by as B, C, and etc.. <br/>A's data type is B. <br/> A is optional. <br/> A is a list of elements of X. <br/> B is an input for A. <br/> A or B. <br /> Either A or B. <br/>If A, then B."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-zh97ar">A</entity> := <entity data-svelte-h="svelte-9h0hy4">B</entity>, <entity data-svelte-h="svelte-9gnkn1">C</entity> <br> <entity data-svelte-h="svelte-zh97ar">A</entity> := <entity data-svelte-h="svelte-9h0hy4">B</entity>, <entity data-svelte-h="svelte-9gnkn1">C</entity>, ... <br> <entity data-svelte-h="svelte-zh97ar">A</entity>&lt;<type data-svelte-h="svelte-1ayfilg">B</type>&gt; <br>
  (<entity data-svelte-h="svelte-zh97ar">A</entity>) <br> <entity data-svelte-h="svelte-zh97ar">A</entity>&lt;[X]&gt; <br> <entity data-svelte-h="svelte-zh97ar">A</entity> &lt;- <entity data-svelte-h="svelte-9h0hy4">B</entity> <br>
  A | B <br>
  { A | B } <br>
  { A ? B }`;
      }
    }
  )} ${dataTypesToShow.length > 0 ? `<h3 data-svelte-h="svelte-13shz8t">Data types</h3> <ul>${dataTypesToShow.includes("uuid") ? `<li data-svelte-h="svelte-12dbf96"><a href="https://datatracker.ietf.org/doc/html/rfc4122" target="_blank">UUID</a></li>` : ``} ${dataTypesToShow.includes("pointer") ? `<li data-svelte-h="svelte-vo35em">ID in general refers to a unique ID in any format that can point to the
        corresponding object.</li>` : ``} ${dataTypesToShow.includes("grid") ? `<li data-svelte-h="svelte-w1rmk5"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template" target="_blank">CSS grid template definition</a></li>` : ``} ${dataTypesToShow.includes("datetime") ? `<li data-svelte-h="svelte-17rnkt8">Date, time expression in <a href="https://www.iso.org/standard/70907.html" target="_blank">ISO8601</a></li>` : ``} ${dataTypesToShow.includes("interval") ? `<li> <a href="#" data-svelte-h="svelte-ewda94">Interval</a></li>` : ``} ${dataTypesToShow.includes("periodicity") ? `<li> <a href="#" data-svelte-h="svelte-1ic7yo">Periodicity</a></li>` : ``} ${dataTypesToShow.includes("format") ? `<li data-svelte-h="svelte-4c17wj"><a href="https://github.com/d3/d3-format" target="_blank">Number format strings (D3)</a></li>` : ``} ${dataTypesToShow.includes("svelte") ? `<li data-svelte-h="svelte-1l7lhei"><a href="https://svelte.dev/docs#template-syntax" target="_blank">Svelte</a> for Philo</li>` : ``} ${dataTypesToShow.includes("colorScheme") ? `<li data-svelte-h="svelte-6o595b"><a href="https://observablehq.com/@d3/color-schemes" target="_blank">Color scheme presets (D3)</a></li>` : ``} ${dataTypesToShow.includes("scaleType") ? `<li data-svelte-h="svelte-5at8fx"><a href="https://github.com/d3/d3-scale" target="_blank">Scale types (D3)</a></li>` : ``}</ul>` : ``} ${``} ${``}`;
});
const SnapshotContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1ktr0l7">Snapshot Formalization</h2> <p data-svelte-h="svelte-pu36op">We provide a formalization of dashboard snapshots. A dashboard snapshot
  consists of one or more components in a certain curation method.</p> ${validate_component(CodeLegend, "CodeLegend").$$render(
    $$result,
    {
      dataTypesToShow: ["uuid", "pointer", "datetime", "interval", "grid"]
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-qpt7dm">Formal definition</h3> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 1,
      description: "A Snapshot consists of a snpashot ID (UUID), name (string), owner(a unique ID of a owner),  components (a list of component IDs), text message (string, optional), curation, export options, auto-recurrence options, freshness status, and completeness status."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-gstzlr">SnapshotSpec</entity> :=
  <entity data-svelte-h="svelte-vozv49">SnapshotID</entity>&lt;<type data-svelte-h="svelte-z12mlx">UUID</type>&gt;,
  <entity data-svelte-h="svelte-1wq1au7">Name</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-b7pugf">Owner</entity>&lt;<type data-svelte-h="svelte-z12mlx">UUID</type>&gt;,
  <entity data-svelte-h="svelte-1m2xq3w">Components</entity>&lt;[<entity data-svelte-h="svelte-ajsz0s">ComponentID</entity>&lt;<type data-svelte-h="svelte-hrbhf3">String</type>&gt;]&gt; (<entity data-svelte-h="svelte-ip12n8">TextMessage</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,)
  <entity data-svelte-h="svelte-1paug2j">Curation</entity>, <entity data-svelte-h="svelte-zjyd2m">Export</entity>,
  <entity data-svelte-h="svelte-1h26je">AutoRecur</entity>, <entity data-svelte-h="svelte-biwayf">Freshness</entity>,
  <entity data-svelte-h="svelte-1kr17k4">Completeness</entity>`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 2,
      description: "A curation property consists of type, timing (optional for the 'slideshow' type), and layout template written as a CSS grid template definition (optional for the 'mini-dashboard' type)."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1paug2j">Curation</entity> :=
  <entity data-svelte-h="svelte-7ie6lf">CurationType</entity>, (<entity data-svelte-h="svelte-i3zlnm">Timing</entity>&lt;<type data-svelte-h="svelte-gjuz9i">Second</type>&gt;,
  <entity data-svelte-h="svelte-elu2ry">Layout</entity>&lt;<type data-svelte-h="svelte-lgs8pc">CSS-Template-Definition</type>&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 3,
      description: "A curation is either vertical stacking, carousel, slide show, or mini-dashboard. "
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-7ie6lf">CurationType</entity> := { <literal data-svelte-h="svelte-c181iu">&quot;stack&quot;</literal> |
  <literal data-svelte-h="svelte-1bpw5li">&quot;carousel&quot;</literal>,
  <literal data-svelte-h="svelte-whtkim">&quot;slideshow&quot;</literal>
  | <literal data-svelte-h="svelte-cc9ng1">&quot;miniDashboard&quot;</literal> }`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 4,
      description: "An export option property consists of the channel to share the snapshot to, date of publication, and whether to allow others to share the snapshot to other channels."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-zjyd2m">Export</entity> :=
  <entity data-svelte-h="svelte-hmtmmv">Channel</entity>&lt;<type data-svelte-h="svelte-1lhjxow">URI</type>&gt;,
  <entity data-svelte-h="svelte-1ybc6xo">DatePublished</entity>&lt;<type data-svelte-h="svelte-p7bohr">Datetime</type>&gt;,
  <entity data-svelte-h="svelte-17yveq7">AllowSharing</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 5,
      description: "An auto-recurrence property consists of whether to auto-recur, an interval by which to auto-recur, a date until which to auto-recur, and the time of a day for the publication."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1h26je">AutoRecur</entity> :=
  <entity data-svelte-h="svelte-n5k2di">IsAutoRecur</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;,
  <entity data-svelte-h="svelte-otn15">Interval</entity>&lt;<type data-svelte-h="svelte-1cdf1zf">Interval</type>&gt;,
  <entity data-svelte-h="svelte-p07ev1">AutoRecurBy</entity>&lt;<type data-svelte-h="svelte-1550qg2">Date</type>&gt;,
  <entity data-svelte-h="svelte-tbdq49">Time</entity>&lt;<type data-svelte-h="svelte-1wgqgbv">Time</type>&gt;`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 5,
      description: "The freshness state of a snapshot consists of the fresh-until date and the permission for others to update."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-biwayf">Freshness</entity> :=
  <entity data-svelte-h="svelte-162vg4c">FreshUntil</entity>&lt;<type data-svelte-h="svelte-1550qg2">Date</type>&gt;,
  <entity data-svelte-h="svelte-13f9mp4">AllowOthersToUpdate</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 6,
      description: "The completeness state of a snapshot indicates whether a snapshot's data has missing data points."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1kr17k4">Completeness</entity> :=
  <entity data-svelte-h="svelte-96ygmb">IsIncomplte</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;`;
      }
    }
  )}`;
});
const ComponentContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1ejrlzk">Component Formalization</h2> <p data-svelte-h="svelte-1bku6m5">We provide a formalization of snapshot component. A component is a building
  block for a dashboard snapshot.</p> ${validate_component(CodeLegend, "CodeLegend").$$render(
    $$result,
    {
      dataTypesToShow: ["uuid", "pointer", "datetime", "interval", "periodicity"]
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-qpt7dm">Formal definition</h3> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 1,
      description: "A Snapshot consists of a component ID (UUID), name (string), owner(a unique ID of a owner), the date of creation and last update, the ID/pointers of originating dashboard and selection (any format of unique IDs), data, static filter, time frame, content type, original representation (worksheet), text message, template design, template configuration, interactive filters, and annotation. Data, staic filters, and worksheet should be expressed in whiever format that is supported by the dashboard tool. For template design and configuration, see the corresponding formalizations."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1e5vpt6">ComponentSpec</entity> :=
  <entity data-svelte-h="svelte-ajsz0s">ComponentID</entity>&lt;<type data-svelte-h="svelte-z12mlx">UUID</type>&gt;,
  <entity data-svelte-h="svelte-1wq1au7">Name</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-b7pugf">Owner</entity>&lt;<type data-svelte-h="svelte-1wlqw9j">ID</type>&gt;,
  <entity data-svelte-h="svelte-1ol9bc2">DateCreated</entity>&lt;<type data-svelte-h="svelte-fmlden">DateTime</type>&gt;,
  <entity data-svelte-h="svelte-1ll8hvb">DateLastUpdated</entity>&lt;<type data-svelte-h="svelte-fmlden">DateTime</type>&gt;,
  <entity data-svelte-h="svelte-1bk2bud">DashboardID</entity>&lt;<type data-svelte-h="svelte-1wlqw9j">ID</type>&gt;,
  <entity data-svelte-h="svelte-idhvr7">SelectionID</entity>&lt;<type data-svelte-h="svelte-1wlqw9j">ID</type>&gt;,
  <entity data-svelte-h="svelte-u6wwdc">Data</entity>,
  <entity data-svelte-h="svelte-wjx9gy">Measure</entity>&lt;[<entity data-svelte-h="svelte-gwe61b">MeasureItem</entity>]&gt;,
  <entity data-svelte-h="svelte-1qhxgr">Breakdown</entity>&lt;[<entity data-svelte-h="svelte-1y75kau">BreakdownItem</entity>]&gt;,
  <entity data-svelte-h="svelte-u6wwdc">Data</entity>, (<entity data-svelte-h="svelte-1mna2k2">Filter</entity>, <entity data-svelte-h="svelte-180cibk">TimeFrame</entity>,)
  <entity data-svelte-h="svelte-1n5e81d">ContentType</entity>,
  <entity data-svelte-h="svelte-1srd1e">Worksheet</entity>, (<entity data-svelte-h="svelte-ip12n8">TextMessage</entity>&lt;<type data-svelte-h="svelte-hrbhf3">String</type>&gt;, <entity data-svelte-h="svelte-mvf338">TemplateDesign</entity>,
  <entity data-svelte-h="svelte-xdra4c">TemplateConfig</entity>,) (<entity data-svelte-h="svelte-12jueo8">InteractiveFilter</entity>&lt;[<entity data-svelte-h="svelte-1pjby2p">InteractiveFilterItem</entity>]&gt;,
  <entity data-svelte-h="svelte-1xzwvmt">Annotation</entity>&lt;[<entity data-svelte-h="svelte-qcmkpq">AnnotationItem</entity>]&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 2,
      description: "A measure item consists of a data field, whether it is the primary field of the component, an aggregate method (e.g., sum, mean), and a format string."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-gwe61b">MeasureItem</entity> :=
  <entity data-svelte-h="svelte-1kmzr0u">Field</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;,
  <entity data-svelte-h="svelte-95tbrs">IsPrimary</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;, (<entity data-svelte-h="svelte-ohoew9">Aggregate</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-1dzcm1r">Format</entity>&lt;<type data-svelte-h="svelte-1rm2evc">FormatString</type>&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 3,
      description: "A breakdown item consists of a dimension data field, a measure field to rank the items by, top and bottom N items to show, and ordering."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1y75kau">BreakdownItem</entity> :=
  <entity data-svelte-h="svelte-1bpkgou">Dimension</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;, (<entity data-svelte-h="svelte-zuob4l">RankBy</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;,
  <entity data-svelte-h="svelte-13nlwtz">TopN</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-1kn7lg7">BottomN</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-1i5wxv0">Ordering</entity>&lt;<type data-svelte-h="svelte-1363y9s"><literal>&quot;ascending&quot;</literal> |
    <literal>&quot;descending&quot;</literal></type>&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 4,
      description: "A time frame consists of a reference time field, either an interval with a start date or a start date with an end date, a periodicity filter."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-180cibk">TimeFrame</entity> :=
  <entity data-svelte-h="svelte-1ndi6ah">Reference</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;, {
  <entity data-svelte-h="svelte-otn15">Interval</entity>&lt;<type data-svelte-h="svelte-1cdf1zf">Interval</type>&gt;,
  <entity data-svelte-h="svelte-yhnsfe">Start</entity>&lt;<type data-svelte-h="svelte-1550qg2">Date</type>&gt; |
  <entity data-svelte-h="svelte-yhnsfe">Start</entity>&lt;<type data-svelte-h="svelte-1550qg2">Date</type>&gt;,
  <entity data-svelte-h="svelte-1nn1f4p">End</entity>&lt;<type data-svelte-h="svelte-1550qg2">Date</type>&gt;, }
  <entity data-svelte-h="svelte-516brz">TimeUnit</entity>&lt;<literal data-svelte-h="svelte-198p760">&quot;Minute&quot;</literal> |
  <literal data-svelte-h="svelte-nr7vju">&quot;Hour&quot;</literal> | <literal data-svelte-h="svelte-iafqg8">&quot;Day&quot;</literal> |
  <literal data-svelte-h="svelte-43rad8">&quot;Week&quot;</literal>
  | ...&gt;
  <entity data-svelte-h="svelte-1ljqq99">PeriodicityFilter</entity>&lt;<type data-svelte-h="svelte-6olf4j">Periodicity</type>&gt;`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 5,
      description: "A weekly time frame by Order Date for a month starting from March 1, 2022."
    },
    {},
    {
      default: () => {
        return `{ <entity data-svelte-h="svelte-1ndi6ah">Reference</entity>: <literal data-svelte-h="svelte-1tszjmo">&quot;Order Date&quot;</literal>,
  <entity data-svelte-h="svelte-otn15">Interval</entity>: <literal data-svelte-h="svelte-acxdcv">&quot;1month&quot;</literal>,
  <entity data-svelte-h="svelte-yhnsfe">Start</entity>: <literal data-svelte-h="svelte-1evhy5w">&quot;2022-03-01&quot;</literal>,
  <entity data-svelte-h="svelte-516brz">TimeUnit</entity>: <literal data-svelte-h="svelte-tqszto">&quot;week&quot;</literal>
  }`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 6,
      description: "A daily time frame by Order Date for a quarter starting from March 1, 2022, filtered by every Monday."
    },
    {},
    {
      default: () => {
        return `{ <entity data-svelte-h="svelte-1ndi6ah">Reference</entity>: <literal data-svelte-h="svelte-1tszjmo">&quot;Order Date&quot;</literal>,
  <entity data-svelte-h="svelte-otn15">Interval</entity>: <literal data-svelte-h="svelte-1iamunx">&quot;1quarter&quot;</literal>,
  <entity data-svelte-h="svelte-yhnsfe">Start</entity>: <literal data-svelte-h="svelte-1evhy5w">&quot;2022-03-01&quot;</literal>,
  <entity data-svelte-h="svelte-516brz">TimeUnit</entity>: <literal data-svelte-h="svelte-17xh9s8">&quot;day&quot;</literal> <entity data-svelte-h="svelte-x8u4k3">Periodicity</entity>: <literal data-svelte-h="svelte-1rt5jw8">&quot;monday&quot;</literal>
  }`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 7,
      description: "A user can choose worksheet (the original content) or template for the representation type. Default is worksheet."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1n5e81d">ContentType</entity> :=
  <literal data-svelte-h="svelte-1chrrg2">&quot;Worksheet&quot;</literal> | <literal data-svelte-h="svelte-1bo5mjy">&quot;Template&quot;</literal>`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 8,
      description: "An interactive filter consists of name, type, and corresponding options. For an 'Auto' type, a user only needs to specify the field. For a 'dropdown' or 'slider' type, a user can provide the selectable values or a lmiit range, respectively. For a 'Macro' type interactive filter, a user should provide a filter expression written in a supported format."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1pjby2p">InteractiveFilterItem</entity> :=
  <entity data-svelte-h="svelte-1wq1au7">Name</entity>,
  <entity data-svelte-h="svelte-1kmzr0u">Field</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;,
  <entity data-svelte-h="svelte-1mf0zrk">Type</entity>&lt;<literal data-svelte-h="svelte-vknatn">&quot;Auto&quot;</literal> |
  <literal data-svelte-h="svelte-s67f3l">&quot;Dropdown&quot;</literal> | <literal data-svelte-h="svelte-1te07vl">&quot;Slider&quot;</literal> |
  <literal data-svelte-h="svelte-e35b2y">&quot;Macro&quot;</literal>&gt;, <br> {
  <entity data-svelte-h="svelte-1mf0zrk">Type</entity> ==
  <literal data-svelte-h="svelte-s67f3l">&quot;Dropdown&quot;</literal>
  ? (<entity data-svelte-h="svelte-nldxh2">Values</entity>&lt;[<type data-svelte-h="svelte-1llyks8">Any</type>]&gt;) }, <br>
  { <entity data-svelte-h="svelte-1mf0zrk">Type</entity>
  ==
  <literal data-svelte-h="svelte-1te07vl">&quot;Slider&quot;</literal>
  ? (<entity data-svelte-h="svelte-arnk2x">Range</entity>&lt;[<entity data-svelte-h="svelte-1e56jbi">Min</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-186cuxs">Max</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;]&gt;) },<br>
  { <entity data-svelte-h="svelte-1mf0zrk">Type</entity> ==
  <literal data-svelte-h="svelte-e35b2y">&quot;Macro&quot;</literal>
  ? <entity data-svelte-h="svelte-1mna2k2">Filter</entity> },`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 9,
      description: "An annotation item is defined by its shape, position (top-left: x, y; bottom-right: x2, y2), stroke color/opacity/dashed, and fill color/opacity."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-qcmkpq">AnnotationItem</entity> :=
  <entity data-svelte-h="svelte-19r9jbt">Shape</entity>&lt;<literal data-svelte-h="svelte-1ip2cfk">&quot;Circle&quot;</literal> |
  <literal data-svelte-h="svelte-1ipknvp">&quot;Rectangle&quot;</literal> | <literal data-svelte-h="svelte-jtw8uh">&quot;Arrow&quot;</literal> |
  <literal data-svelte-h="svelte-1qxu2li">&quot;Line&quot;</literal>&gt;,
  <entity data-svelte-h="svelte-17i2h9u">X</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-519ykb">Y</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-w5yen2">X2</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-ihv89z">Y2</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-1dw2ocr">StrokeColor</entity>&lt;<type data-svelte-h="svelte-erv727">Color</type>&gt;, (<entity data-svelte-h="svelte-fww32z">StrokeOpacity</entity>&lt;<type data-svelte-h="svelte-1azpa80">Number(0-1)</type>&gt;,
  <entity data-svelte-h="svelte-1od5014">StrokeDash</entity>&lt;<type data-svelte-h="svelte-73ft74">DashExpression</type>&gt;,)
  <entity data-svelte-h="svelte-7cdc8m">FillColor</entity>&lt;<type data-svelte-h="svelte-erv727">Color</type>&gt;, (<entity data-svelte-h="svelte-1qmme1g">FillOpacity</entity>&lt;<type data-svelte-h="svelte-1azpa80">Number(0-1)</type>&gt;,)`;
      }
    }
  )}`;
});
const TemplateContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1v1tgdq">Template Design</h2> <p data-svelte-h="svelte-khk0o">A user may choose a template to transform the snapshot design from the
  original representation. A template (design) is the definition of a
  representation design to serve or achieve a business-oriented &quot;message&quot; or
  goal like breaking down a value, comparing a value to a goal, or seeing a
  trend. Here, we show how a template design is formalized. You can find the
  template configuration and individual designs in the corresponding menu.</p> ${validate_component(CodeLegend, "CodeLegend").$$render($$result, { dataTypesToShow: ["svelte"] }, {}, {})} <h4 data-svelte-h="svelte-1fju4i6">Formal definition</h4> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 1,
      description: "A template (design) is defined as a tuple of a name, task keyword(s), applicability information, a reactive design file, a text template, and parameter definitions. For <code>TextExpression</code>, see the corresponding menu."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-mvf338">TemplateDesign</entity> :=
  <entity data-svelte-h="svelte-1wq1au7">Name</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-t2uhxu">TaskKeyword</entity>&lt;[<type data-svelte-h="svelte-19hqp47">String</type>]&gt;,
  <entity data-svelte-h="svelte-2hsefx">Applicability</entity>,
  <entity data-svelte-h="svelte-12bbyti">Design</entity>&lt;<type data-svelte-h="svelte-om7uut">ReactiveDesignFile</type>&gt;,
  <entity data-svelte-h="svelte-v27rdx">TextTemplate</entity>&lt;<type data-svelte-h="svelte-ss9h84">Expression</type>&gt;,
  <entity data-svelte-h="svelte-i86zh4">ParameterDefinition</entity>&lt;[<type data-svelte-h="svelte-1s9j6xf">ParameterDefItem</type>]&gt;`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 2,
      description: "The applicability information of a tempalte design is used to compute whether a component spec is applicable for the template. The prefix 'n' means the exact number, and the prefixes 'Max' and 'Min' mean less than or equal to and greater than or equal to, respectively."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-2hsefx">Applicability</entity> := (<entity data-svelte-h="svelte-17k4hxi">MaxMeasure</entity>&lt;<type data-svelte-h="svelte-1ffxf2r">Number</type>&gt;,
  <entity data-svelte-h="svelte-u7kg3m">nMeasure</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-w8nt8o">MinMeasure</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-1kjta4y">MaxDimension</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-16vnfbi">nDimension</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-gq0g70">MinDimension</entity>&lt;<type data-svelte-h="svelte-1sjrv2z">Number</type>&gt;,
  <entity data-svelte-h="svelte-pxfdsq">HasTimeFrame</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 3,
      description: "A component feeds the template configuration to a template design file written in a reactive grammar."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-12bbyti">Design</entity> &lt;- <entity data-svelte-h="svelte-1dqv58e">TemplateConfiguration</entity>`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 4,
      description: "A parameter is defined as a tuple of a name, token (an identifier), type (data type), and whether it is for each breakdown value."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-1ac31h9">ParameterDefItem</entity> :=
  <entity data-svelte-h="svelte-1wq1au7">Name</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-1265l49">Token</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,
  <entity data-svelte-h="svelte-1mf0zrk">Type</entity>&lt;<literal data-svelte-h="svelte-kh20lh">&quot;number&quot;</literal> |
  <literal data-svelte-h="svelte-cugf8t">&quot;string&quot;</literal>
  | ...&gt;,
  <entity data-svelte-h="svelte-10m8c3a">PerBreakdown</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;`;
      }
    }
  )}`;
});
const TemplateSpecContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-nzkbcm">Template Configuration</h2> <p data-svelte-h="svelte-1ea7gx">A template spec is a way to send data to a template design.</p> ${validate_component(CodeLegend, "CodeLegend").$$render(
    $$result,
    {
      dataTypesToShow: ["colorScheme", "scaleType"]
    },
    {},
    {}
  )} <h3 data-svelte-h="svelte-qpt7dm">Formal definition</h3> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 1,
      description: "A template configuration consists of appearance information, parameters, custom text, data, measure(s), a time frame, breakdown(s), filter(s), and scale(s). For data, measure, time frame, breakdown, and filter, see the Component Configuration."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-xdra4c">TemplateConfig</entity> :=
  <entity data-svelte-h="svelte-16vxv1y">Appearance</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;, (<entity data-svelte-h="svelte-5ep18t">Parameter</entity>&lt;<type data-svelte-h="svelte-1k17w0s">Key: Value</type>&gt;,
  <entity data-svelte-h="svelte-1wciw68">CustomText</entity>&lt;<type data-svelte-h="svelte-19hqp47">String</type>&gt;,)
  <entity data-svelte-h="svelte-u6wwdc">Data</entity>,
  <entity data-svelte-h="svelte-wjx9gy">Measure</entity>, (<entity data-svelte-h="svelte-1qhxgr">Breakdown</entity>,
  <entity data-svelte-h="svelte-180cibk">TimeFrame</entity>,
  <entity data-svelte-h="svelte-1mna2k2">Filter</entity>,
  <entity data-svelte-h="svelte-5dafu8">Scale</entity>&lt;[<type data-svelte-h="svelte-1ain1rt">ScaleItem</type>]&gt;)`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 2,
      description: "The appearance information of a template spec controls the use of graphic, text, caption, tooltip, and so on."
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-16vxv1y">Appearance</entity> :=
  <entity data-svelte-h="svelte-v9o5a9">UseGraphic</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;,
  <entity data-svelte-h="svelte-1jgfsu2">UseText</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;,
  <entity data-svelte-h="svelte-1hlsh6b">UseCaption</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;,
  <entity data-svelte-h="svelte-45w0m">UseTooltip</entity>&lt;<type data-svelte-h="svelte-qmwb7e">Boolean</type>&gt;, ...`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 3,
      description: "A scale item is defined by a channel (mark property), field, domain, range (or scheme), and type (see above)"
    },
    {},
    {
      default: () => {
        return `<entity data-svelte-h="svelte-16g5pjp">ScaleItem</entity> :=
  <entity data-svelte-h="svelte-hmtmmv">Channel</entity>&lt;<literal data-svelte-h="svelte-1p50xlr">&quot;color&quot;</literal> |
  <literal data-svelte-h="svelte-10ozeal">&quot;fill&quot;</literal> | <literal data-svelte-h="svelte-1xj7nis">&quot;stroke&quot;</literal> |
  <literal data-svelte-h="svelte-qopssd">&quot;opacity&quot;</literal> | <literal data-svelte-h="svelte-36d1x1">&quot;shape&quot;</literal>
  | ...&gt;,
  <entity data-svelte-h="svelte-1kmzr0u">Field</entity>&lt;<type data-svelte-h="svelte-u3abu6">DataField</type>&gt;,
  <entity data-svelte-h="svelte-d3aqmk">Domain</entity>&lt;[<type data-svelte-h="svelte-1llyks8">Any</type>]&gt;, {
  <entity data-svelte-h="svelte-arnk2x">Range</entity>&lt;[<type data-svelte-h="svelte-1llyks8">Any</type>]&gt; |
  <entity data-svelte-h="svelte-1n9skbz">Scheme</entity>&lt;<type data-svelte-h="svelte-19oq5l6">ColorScheme</type>&gt; },
  <entity data-svelte-h="svelte-1mf0zrk">Type</entity>&lt;<literal data-svelte-h="svelte-1oynsf9">&quot;Linear&quot;</literal> |
  <literal data-svelte-h="svelte-1vwke7w">&quot;Log&quot;</literal> | <literal data-svelte-h="svelte-15xqth3">&quot;Band&quot;</literal> | ...&gt;`;
      }
    }
  )}`;
});
const TextExprContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-fadjn1">Text Template Expression</h2> <p data-svelte-h="svelte-597yme">To enable text template, we implemented a text-template expression, emulating
  other format expressions. This text expressions are intended for captions in
  template-based components.</p> <h3 data-svelte-h="svelte-qpt7dm">Formal definition</h3> <p data-svelte-h="svelte-1l74u6z">There are three types of expressions: plain text, index, and function</p> ${validate_component(DescribedCode, "DescribedCode").$$render($$result, { line: 1, description: "" }, {}, {
    default: () => {
      return `<literal data-svelte-h="svelte-6iq7dx">Plain text</literal>`;
    }
  })} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 2,
      description: "There are predefined index names: Measure1, Dim1, etc."
    },
    {},
    {
      default: () => {
        return `@[<entity data-svelte-h="svelte-1emv4yn">IndexName</entity>]`;
      }
    }
  )} ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 3,
      description: "A function is expressed by the function name and its argument."
    },
    {},
    {
      default: () => {
        return `@<entity data-svelte-h="svelte-14om4bf">FunctionName</entity>[<literal data-svelte-h="svelte-1yzmfpp">arg1</literal>,
  <literal data-svelte-h="svelte-xc22va">arg2</literal>]`;
      }
    }
  )} <h3 data-svelte-h="svelte-183jr9r">Examples</h3> ${validate_component(DescribedCode, "DescribedCode").$$render(
    $$result,
    {
      line: 1,
      description: "Rendered: The total Sales is $32,000 for 2 months from Mach 1, 2022.<br />- West: $9,500<br/>- East: $8,300<br/>- Mid: $5,300<br/>- South: $8,900"
    },
    {},
    {
      default: () => {
        return `<literal data-svelte-h="svelte-1sj6n9z">The total</literal> @[<entity data-svelte-h="svelte-vrf6wa">Measure1.name</entity>]
  <literal data-svelte-h="svelte-1chx5oc">is</literal> #<entity data-svelte-h="svelte-h4ki67">format</entity>[#<entity data-svelte-h="svelte-1xwot67">aggregate</entity>[@[<entity data-svelte-h="svelte-11u3swo">Measure1.value</entity>], @[<entity data-svelte-h="svelte-j5z5yy">Measure1.aggregate</entity>]],&#39;$,&#39;]#<entity data-svelte-h="svelte-1upnltv">if</entity>[@[<entity data-svelte-h="svelte-pxfdsq">HasTimeFrame</entity>],
  <literal data-svelte-h="svelte-1otcvcp">for</literal>
  @[<entity data-svelte-h="svelte-ucu5tf">TimeFrame.displayInterval</entity>] <literal data-svelte-h="svelte-11aydxg">from</literal>
  @[<entity data-svelte-h="svelte-1jd9edy">TimeFrame.displayStartDate</entity>]]. <br>#<entity data-svelte-h="svelte-1axq2bb">if</entity>[@[<entity data-svelte-h="svelte-v8nd93">hasBreakdown</entity>], #<entity data-svelte-h="svelte-sibo6j">repeat</entity>[<literal data-svelte-h="svelte-167bogv">-
  </literal>#<entity data-svelte-h="svelte-h4ki67">format</entity>[#<entity data-svelte-h="svelte-1afr9ij">aggregate</entity>[@[<entity data-svelte-h="svelte-ru7c1s">Measure1.value</entity>], @[<entity data-svelte-h="svelte-1scgvkm">Measure1.aggregate</entity>], @[<enity data-svelte-h="svelte-16ww70h">datum</enity>]],&#39;$,.2&#39;]<literal data-svelte-h="svelte-6fijti">\\n</literal>]]`;
      }
    }
  )}`;
});
const css$3 = {
  code: "div.snap-component.svelte-1orhyhh.svelte-1orhyhh{position:relative;box-sizing:border-box;display:block;width:100%;max-width:450px;padding:0.5rem;border:0.714286px solid}.snap-component.svelte-1orhyhh p.text.svelte-1orhyhh{font-size:0.9rem;margin-bottom:0.5rem;line-height:160%}p.text.svelte-1orhyhh button.svelte-1orhyhh{appearance:none;padding:0.3rem 0.5rem;margin:0;border:1px solid transparent;border-radius:var(--default-radius-desktop);font-size:0.9rem;font-weight:var(--medium-weight);line-height:100%;background:transparent}.snap-component.svelte-1orhyhh .mt-0.svelte-1orhyhh{margin-top:0}.snap-component.svelte-1orhyhh .mb-1.svelte-1orhyhh{margin-bottom:0.25rem}.w-100.svelte-1orhyhh.svelte-1orhyhh{width:100%}.snap-component.svelte-1orhyhh .bar-group.svelte-1orhyhh{position:relative;width:100%;display:flex;margin-bottom:0.25rem}.snap-component.svelte-1orhyhh .bar-group.overview.svelte-1orhyhh{font-size:0.9rem;color:#333333}.snap-component.svelte-1orhyhh .bar-group.breakdown.svelte-1orhyhh{font-size:0.8rem;color:#666666}.snap-component.svelte-1orhyhh .label.svelte-1orhyhh{width:25%;height:100%;line-height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.snap-component.svelte-1orhyhh .bar.svelte-1orhyhh{position:relative;width:75%;border-radius:3px;overflow:hidden;background-color:#f0f0f0}.snap-component.svelte-1orhyhh .bar-group.overview .bar.svelte-1orhyhh{height:1.1rem}.snap-component.svelte-1orhyhh .bar-group.breakdown .bar.svelte-1orhyhh{height:0.9rem}.snap-component.svelte-1orhyhh .bar .bar-item.svelte-1orhyhh{height:100%;line-height:100%;border-radius:3px}.snap-component.svelte-1orhyhh .bar-group.overview .bar .bar-caption.svelte-1orhyhh{font-size:0.7rem;padding:0.2rem;height:1.1rem;line-height:100%;white-space:nowrap}.snap-component.svelte-1orhyhh .bar-group.breakdown .bar .bar-caption.svelte-1orhyhh{font-size:0.7rem;padding:0.1rem;height:0.9rem;line-height:100%;white-space:nowrap}@media screen and (min-width: 951px){div.snap-component.svelte-1orhyhh.svelte-1orhyhh{border-radius:var(--default-radius-desktop)}}@media screen and (max-width: 950px){div.snap-component.svelte-1orhyhh.svelte-1orhyhh{border-radius:var(--default-radius-mobile)}}@media print{div.snap-component.svelte-1orhyhh.svelte-1orhyhh{border-radius:var(--default-radius-print)}}@media(prefers-color-scheme: light){div.snap-component.svelte-1orhyhh.svelte-1orhyhh{border-color:#dddddd;background-color:#ffffff}.snap-component.svelte-1orhyhh .bar-group.overview.svelte-1orhyhh{color:#333333}.snap-component.svelte-1orhyhh .bar-group.breakdown.svelte-1orhyhh{color:#666666}.snap-component.svelte-1orhyhh .bar.svelte-1orhyhh{background-color:#f0f0f0}p.text.svelte-1orhyhh button.svelte-1orhyhh{color:#454545}}@media(prefers-color-scheme: dark){div.snap-component.svelte-1orhyhh.svelte-1orhyhh{border-color:#878787;background-color:#263238}.snap-component.svelte-1orhyhh .bar-group.overview.svelte-1orhyhh{color:#dddddd}.snap-component.svelte-1orhyhh .bar-group.breakdown.svelte-1orhyhh{color:#dadada}.snap-component.svelte-1orhyhh .bar.svelte-1orhyhh{background-color:#546e7a}p.text.svelte-1orhyhh button.svelte-1orhyhh{color:#dddddd}}",
  map: '{"version":3,"file":"Template1.svelte","sources":["Template1.svelte"],"sourcesContent":["<div class=\\"snap-component\\">\\n  <div class=\\"template-wrap\\">\\n    <p class=\\"text mt-0\\">\\n      The overall Sales is $652,989.00.<br /> Top 3 State(s): <br />- South\\n      Dakota ($163.00), <br />- Montana ($468.00), and <br />- Nebraska\\n      ($674.00).<br /> Bottom 3 State(s): <br />- Texas ($64,944.00), <br />-\\n      New York ($83,787.00), and <br />- California ($124,026.00).\\n      <button class=\\"system-button ms-2\\">– Show less</button>\\n    </p>\\n    <div class=\\"annotation-origin\\">\\n      <div class=\\"bar-group overview \\">\\n        <div class=\\"label \\">Sales</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 100%; left: 0%; background-color: #0029FF; opacity: 1;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(0); color: white\\"\\n              >$652,989.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"mb-1 w-100\\" />\\n      <div class=\\"mb-1\\">Top 3 State(s)</div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">California</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 18.993581821439566%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$124,026.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">New York</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 12.83130343696448%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$83,787.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">Texas</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 9.945649926721584%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$64,944.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"mb-1\\">Bottom 3 State(s)</div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">Nebraska</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 0.10321766522866388%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$674.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">Montana</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 0.07167042630120875%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$468.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"bar-group breakdown \\">\\n        <div class=\\"label \\">South Dakota</div>\\n        <div class=\\"bar \\">\\n          <div\\n            class=\\"bar-item \\"\\n            style=\\"position: absolute; top: 0; width: 0.02496213565619023%; left: 0%; background-color: #0029FF; opacity: 0.7;\\"\\n          >\\n            <span\\n              class=\\"bar-caption \\"\\n              style=\\"position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;\\"\\n              >$163.00</span\\n            >\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  div.snap-component {\\n    position: relative;\\n    box-sizing: border-box;\\n    display: block;\\n    width: 100%;\\n    max-width: 450px;\\n    padding: 0.5rem;\\n    border: 0.714286px solid;\\n  }\\n  .snap-component p.text {\\n    font-size: 0.9rem;\\n    margin-bottom: 0.5rem;\\n    line-height: 160%;\\n  }\\n\\n  p.text button {\\n    appearance: none;\\n    padding: 0.3rem 0.5rem;\\n    margin: 0;\\n    border: 1px solid transparent;\\n    border-radius: var(--default-radius-desktop);\\n    font-size: 0.9rem;\\n    font-weight: var(--medium-weight);\\n    line-height: 100%;\\n    background: transparent;\\n  }\\n\\n  .snap-component .mt-0 {\\n    margin-top: 0;\\n  }\\n  .snap-component .mb-1 {\\n    margin-bottom: 0.25rem;\\n  }\\n  .w-100 {\\n    width: 100%;\\n  }\\n  .snap-component .bar-group {\\n    position: relative;\\n    width: 100%;\\n    display: flex;\\n    margin-bottom: 0.25rem;\\n  }\\n  .snap-component .bar-group.overview {\\n    font-size: 0.9rem;\\n    color: #333333;\\n  }\\n  .snap-component .bar-group.breakdown {\\n    font-size: 0.8rem;\\n    color: #666666;\\n  }\\n\\n  .snap-component .label {\\n    width: 25%;\\n    height: 100%;\\n    line-height: 100%;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    white-space: nowrap;\\n  }\\n\\n  .snap-component .bar {\\n    position: relative;\\n    width: 75%;\\n    border-radius: 3px;\\n    overflow: hidden;\\n    background-color: #f0f0f0;\\n  }\\n  .snap-component .bar-group.overview .bar {\\n    height: 1.1rem;\\n  }\\n  .snap-component .bar-group.breakdown .bar {\\n    height: 0.9rem;\\n  }\\n  .snap-component .bar .bar-item {\\n    height: 100%;\\n    line-height: 100%;\\n    border-radius: 3px;\\n  }\\n\\n  .snap-component .bar-group.overview .bar .bar-caption {\\n    font-size: 0.7rem;\\n    padding: 0.2rem;\\n    height: 1.1rem;\\n    line-height: 100%;\\n    white-space: nowrap;\\n  }\\n  .snap-component .bar-group.breakdown .bar .bar-caption {\\n    font-size: 0.7rem;\\n    padding: 0.1rem;\\n    height: 0.9rem;\\n    line-height: 100%;\\n    white-space: nowrap;\\n  }\\n\\n  @media screen and (min-width: 951px) {\\n    /* desktop */\\n    div.snap-component {\\n      border-radius: var(--default-radius-desktop);\\n    }\\n  }\\n  @media screen and (max-width: 950px) {\\n    /* mobile */\\n    div.snap-component {\\n      border-radius: var(--default-radius-mobile);\\n    }\\n  }\\n  @media print {\\n    /* print */\\n    div.snap-component {\\n      border-radius: var(--default-radius-print);\\n    }\\n  }\\n\\n  /* lightmode */\\n  @media (prefers-color-scheme: light) {\\n    div.snap-component {\\n      border-color: #dddddd;\\n      background-color: #ffffff;\\n    }\\n    .snap-component .bar-group.overview {\\n      color: #333333;\\n    }\\n    .snap-component .bar-group.breakdown {\\n      color: #666666;\\n    }\\n    .snap-component .bar {\\n      background-color: #f0f0f0;\\n    }\\n    p.text button  {\\n      color: #454545;\\n    }\\n  }\\n  /* darkmode */\\n  @media (prefers-color-scheme: dark) {\\n    div.snap-component {\\n      border-color: #878787;\\n      background-color: #263238;\\n    }\\n    .snap-component .bar-group.overview {\\n      color: #dddddd;\\n    }\\n    .snap-component .bar-group.breakdown {\\n      color: #dadada;\\n    }\\n    .snap-component .bar {\\n      background-color: #546e7a;\\n    }\\n    p.text button  {\\n      color: #dddddd;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const Template1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="snap-component svelte-1orhyhh" data-svelte-h="svelte-1u69wyr"><div class="template-wrap"><p class="text mt-0 svelte-1orhyhh">The overall Sales is $652,989.00.<br> Top 3 State(s): <br>- South
      Dakota ($163.00), <br>- Montana ($468.00), and <br>- Nebraska
      ($674.00).<br> Bottom 3 State(s): <br>- Texas ($64,944.00), <br>-
      New York ($83,787.00), and <br>- California ($124,026.00).
      <button class="system-button ms-2 svelte-1orhyhh">– Show less</button></p> <div class="annotation-origin"><div class="bar-group overview  svelte-1orhyhh"><div class="label  svelte-1orhyhh">Sales</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 100%; left: 0%; background-color: #0029FF; opacity: 1;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(0); color: white">$652,989.00</span></div></div></div> <div class="mb-1 w-100 svelte-1orhyhh"></div> <div class="mb-1 svelte-1orhyhh">Top 3 State(s)</div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">California</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 18.993581821439566%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$124,026.00</span></div></div></div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">New York</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 12.83130343696448%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$83,787.00</span></div></div></div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">Texas</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 9.945649926721584%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$64,944.00</span></div></div></div> <div class="mb-1 svelte-1orhyhh">Bottom 3 State(s)</div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">Nebraska</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 0.10321766522866388%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$674.00</span></div></div></div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">Montana</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 0.07167042630120875%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$468.00</span></div></div></div> <div class="bar-group breakdown  svelte-1orhyhh"><div class="label  svelte-1orhyhh">South Dakota</div> <div class="bar  svelte-1orhyhh"><div class="bar-item  svelte-1orhyhh" style="position: absolute; top: 0; width: 0.02496213565619023%; left: 0%; background-color: #0029FF; opacity: 0.7;"><span class="bar-caption  svelte-1orhyhh" style="position: absolute; right: 0;transform: translateX(100%); color: &quot;black&quot;">$163.00</span></div></div></div></div></div> </div>`;
});
const css$2 = {
  code: '@media screen and (min-width: 951px){table.svelte-bvkngr.svelte-bvkngr{border-collapse:collapse;border-spacing:0}td.svelte-bvkngr.svelte-bvkngr,th.svelte-bvkngr.svelte-bvkngr{padding:0.5rem 0;border-bottom:1px solid;font-size:0.9rem}.col-name.svelte-bvkngr.svelte-bvkngr{width:20%}.col-task.svelte-bvkngr.svelte-bvkngr{width:30%}.col-applicability.svelte-bvkngr.svelte-bvkngr{width:25%}.col-params.svelte-bvkngr.svelte-bvkngr{width:25%}.template-list.svelte-bvkngr button.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.svelte-bvkngr{appearance:none;width:auto;margin-bottom:0.5rem;margin-right:0.5rem;padding:0.5rem;border:0;font-size:0.9rem;border-radius:var(--default-radius-mobile);cursor:pointer;line-height:1;text-align:left}}@media screen and (max-width: 950px){tbody.svelte-bvkngr.svelte-bvkngr,tr.svelte-bvkngr.svelte-bvkngr,td.svelte-bvkngr.svelte-bvkngr,th.svelte-bvkngr.svelte-bvkngr{display:block}thead.svelte-bvkngr.svelte-bvkngr{display:none}tr.svelte-bvkngr.svelte-bvkngr{margin-bottom:0.5rem;padding-bottom:0.25rem;border-bottom:1px solid}td.svelte-bvkngr.svelte-bvkngr{padding:0.25rem 0;font-size:0.9rem}.col-name.svelte-bvkngr.svelte-bvkngr::before{content:"Name: ";font-weight:600}.col-task.svelte-bvkngr.svelte-bvkngr::before{content:"Task keywords: ";font-weight:600}.col-applicability.svelte-bvkngr.svelte-bvkngr::before{content:"Applicability: ";font-weight:600}.col-params.svelte-bvkngr.svelte-bvkngr::before{content:"Parameters: ";font-weight:600}.template-list.svelte-bvkngr button.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.svelte-bvkngr{appearance:none;width:auto;margin-bottom:0.5rem;margin-right:0.5rem;padding:0.5rem;border:0;font-size:0.9rem;border-radius:var(--default-radius-mobile);cursor:pointer;line-height:1;text-align:left}}@media print{table.svelte-bvkngr.svelte-bvkngr{border-collapse:collapse;border-spacing:0}td.svelte-bvkngr.svelte-bvkngr,th.svelte-bvkngr.svelte-bvkngr{padding-bottom:1mm;border-bottom:0.2mm solid #dddddd;font-size:2.5mm}.col-name.svelte-bvkngr.svelte-bvkngr{width:15%}.col-task.svelte-bvkngr.svelte-bvkngr{width:35%}.col-applicability.svelte-bvkngr.svelte-bvkngr{width:25%}.col-params.svelte-bvkngr.svelte-bvkngr{width:25%}.template-browser-buttons.svelte-bvkngr.svelte-bvkngr{display:none}.template-browser-buttons.svelte-bvkngr button.svelte-bvkngr,.template-list.svelte-bvkngr button.svelte-bvkngr{appearance:none;width:auto;margin:0;padding:0;border:0;text-align:left;background-color:transparent}}@media(prefers-color-scheme: light){table.svelte-bvkngr.svelte-bvkngr{color:#333333}td.svelte-bvkngr.svelte-bvkngr,th.svelte-bvkngr.svelte-bvkngr{border-bottom-color:#dddddd}tr.svelte-bvkngr.svelte-bvkngr{border-bottom-color:#dddddd}.template-list.svelte-bvkngr button.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.svelte-bvkngr{background-color:#f0f0f0;color:#333333}.template-list.svelte-bvkngr button.curr.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.curr.svelte-bvkngr{color:#ad1457;background-color:#fce4ec}}@media(prefers-color-scheme: dark){table.svelte-bvkngr.svelte-bvkngr{color:#e0e0e0}td.svelte-bvkngr.svelte-bvkngr,th.svelte-bvkngr.svelte-bvkngr{border-bottom-color:#454545}tr.svelte-bvkngr.svelte-bvkngr{border-bottom-color:#454545}.template-list.svelte-bvkngr button.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.svelte-bvkngr{background-color:#37474f;color:#f0f0f0}.template-list.svelte-bvkngr button.curr.svelte-bvkngr,.template-browser-buttons.svelte-bvkngr button.curr.svelte-bvkngr{color:#fce4ec;background-color:#880e4f}}',
  map: `{"version":3,"file":"TemplateDesignContent.svelte","sources":["TemplateDesignContent.svelte"],"sourcesContent":["<script>\\n  import Template1 from \\"./tempalteDesigns/Template1.svelte\\";\\n  import Template2 from \\"./tempalteDesigns/Template2.svelte\\";\\n  import Template3 from \\"./tempalteDesigns/Template3.svelte\\";\\n  import Template4 from \\"./tempalteDesigns/Template4.svelte\\";\\n  import Template5 from \\"./tempalteDesigns/Template5.svelte\\";\\n  import Template6 from \\"./tempalteDesigns/Template6.svelte\\";\\n  import Template7 from \\"./tempalteDesigns/Template7.svelte\\";\\n  import Template8 from \\"./tempalteDesigns/Template8.svelte\\";\\n  import Template9 from \\"./tempalteDesigns/Template9.svelte\\";\\n\\n  let templateContent = [\\n    {\\n      index: 1,\\n      name: \\"Simple breakdown\\",\\n      keywords: \\"Breakdown, ranking\\",\\n      applicability: \\"nMeasure (1), maxBreakdown (1)\\",\\n      params: \\"None\\",\\n    },\\n    {\\n      index: 2,\\n      name: \\"Ratio and two breakdowns\\",\\n      keywords: \\"Percentage, proportion, breakdown, ranking\\",\\n      applicability: \\"nMeasure (1), minBreakdown (1), maxBreakdown (2)\\",\\n      params: \\"None\\",\\n    },\\n    {\\n      index: 3,\\n      name: \\"Change over time\\",\\n      keywords: \\"Trend, breakdown, time-series\\",\\n      applicability: \\"nMeasure (1), hasTimeFrame (true), maxBreakdown (1)\\",\\n      params: \\"None\\",\\n    },\\n    {\\n      index: 4,\\n      name: \\"Time difference\\",\\n      keywords: \\"Time delta, time difference\\",\\n      applicability: \\"nMeasure (1), hasTimeFrame (true), maxBreakdown (1)\\",\\n      params: \\"None\\",\\n    },\\n    {\\n      index: 5,\\n      name: \\"Comparison to the last time\\",\\n      keywords: \\"Time comparison\\",\\n      applicability: \\"nMeasure (1), hasTimeFrame (true), maxBreakdown (1)\\",\\n      params: \\"None\\",\\n    },\\n    {\\n      index: 6,\\n      name: \\"Breakdown and goal\\",\\n      keywords: \\"Threshold, goal, progress\\",\\n      applicability: \\"nMeasure (1), maxBreakdown (1)\\",\\n      params: \\"Goal (number), goal name (string)\\",\\n    },\\n    {\\n      index: 7,\\n      name: \\"Simple threshold\\",\\n      keywords: \\"Indicator, safety\\",\\n      applicability: \\"nMeasure (1), maxBreakdown (1)\\",\\n      params: \\"Threshold range (min and max numbers), threshold name (string)\\",\\n    },\\n    {\\n      index: 8,\\n      name: \\"Time-series and threshold\\",\\n      keywords: \\"Indicator, safety, confidence\\",\\n      applicability: \\"nMeasure (1), maxBreakdown (1)\\",\\n      params:\\n        \\"Threshold range (min and max numbers), threshold name (string), per-breakdown threshold ranges (min and max numbers)\\",\\n    },\\n    {\\n      index: 9,\\n      name: \\"Trend or correlation\\",\\n      keywords: \\"Trend, correlation, bivariate\\",\\n      applicability: \\"nMeasure (2), maxBreakdown (1)\\",\\n      params: \\"None\\",\\n    },\\n  ];\\n  let template = 1;\\n<\/script>\\n\\n<h2>Template Designs</h2>\\n\\n<p>\\n  We derived a set of template designs to serve or achieve a business-oriented\\n  \\"message\\" or goal from our co-design workshop, including breaking down a\\n  value, comparing a value to a goal, or seeing a trend.\\n</p>\\n\\n<h3>Overview</h3>\\n\\n<table class=\\"template-list\\">\\n  <thead>\\n    <tr>\\n      <th class=\\"col-name\\">Name</th>\\n      <th class=\\"col-task\\">Task keywords</th>\\n      <th class=\\"col-applicability\\">Applicability</th>\\n      <th class=\\"col-params\\">Parameters</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    {#each templateContent as temp}\\n      <tr>\\n        <td class=\\"col-name\\"\\n          ><button\\n            class={template == temp.index ? \\"curr\\" : \\"\\"}\\n            on:click={() => {\\n              template = temp.index;\\n            }}>{temp.name}</button\\n          ></td\\n        >\\n        <td class=\\"col-task\\">{temp.keywords}</td>\\n        <td class=\\"col-applicability\\">{temp.applicability}</td>\\n        <td class=\\"col-params\\">{temp.params}</td>\\n      </tr>\\n    {/each}\\n  </tbody>\\n</table>\\n\\n<h3>Browse template designs</h3>\\n\\n<div class=\\"template-browser-buttons\\">\\n  {#each templateContent as temp}\\n    <button\\n      class={template == temp.index ? \\"curr\\" : \\"\\"}\\n      on:click={() => {\\n        template = temp.index;\\n      }}>{temp.name}</button\\n    >\\n  {/each}\\n</div>\\n\\n{#if template == 1}\\n  <Template1 />\\n{:else if template == 2}\\n  <Template2 />\\n{:else if template == 3}\\n  <Template3 />\\n{:else if template == 4}\\n  <Template4 />\\n{:else if template == 5}\\n  <Template5 />\\n{:else if template == 6}\\n  <Template6 />\\n{:else if template == 7}\\n  <Template7 />\\n{:else if template == 8}\\n  <Template8 />\\n{:else if template == 9}\\n  <Template9 />\\n{/if}\\n\\n<h4>Original dashbaord selection</h4>\\n\\n<img\\n  src=\\"images/original-dashboard.png\\"\\n  alt=\\"A visualization dashboard with a top left cell highlighted. The zoomed-in version of the highlighed cell is superpositioned, syaing 'Sales: $652,989.00'\\"\\n/>\\n<p>Note: before applying a time frame (i.e., Year-to-Date value).</p>\\n\\n<style>\\n  @media screen and (min-width: 951px) {\\n    /* desktop */\\n    table {\\n      border-collapse: collapse;\\n      border-spacing: 0;\\n    }\\n    td,\\n    th {\\n      padding: 0.5rem 0;\\n      border-bottom: 1px solid;\\n      font-size: 0.9rem;\\n    }\\n    .col-name {\\n      width: 20%;\\n    }\\n    .col-task {\\n      width: 30%;\\n    }\\n    .col-applicability {\\n      width: 25%;\\n    }\\n    .col-params {\\n      width: 25%;\\n    }\\n    .template-list button,\\n    .template-browser-buttons button {\\n      appearance: none;\\n      width: auto;\\n      margin-bottom: 0.5rem;\\n      margin-right: 0.5rem;\\n      padding: 0.5rem;\\n      border: 0;\\n      font-size: 0.9rem;\\n      border-radius: var(--default-radius-mobile);\\n      cursor: pointer;\\n      line-height: 1;\\n      text-align: left;\\n    }\\n  }\\n  @media screen and (max-width: 950px) {\\n    tbody,\\n    tr,\\n    td,\\n    th {\\n      display: block;\\n    }\\n    thead {\\n      display: none;\\n    }\\n    tr {\\n      margin-bottom: 0.5rem;\\n      padding-bottom: 0.25rem;\\n      border-bottom: 1px solid;\\n    }\\n    td {\\n      padding: 0.25rem 0;\\n      font-size: 0.9rem;\\n    }\\n    .col-name::before {\\n      content: \\"Name: \\";\\n      font-weight: 600;\\n    }\\n    .col-task::before {\\n      content: \\"Task keywords: \\";\\n      font-weight: 600;\\n    }\\n    .col-applicability::before {\\n      content: \\"Applicability: \\";\\n      font-weight: 600;\\n    }\\n    .col-params::before {\\n      content: \\"Parameters: \\";\\n      font-weight: 600;\\n    }\\n    .template-list button,\\n    .template-browser-buttons button {\\n      appearance: none;\\n      width: auto;\\n      margin-bottom: 0.5rem;\\n      margin-right: 0.5rem;\\n      padding: 0.5rem;\\n      border: 0;\\n      font-size: 0.9rem;\\n      border-radius: var(--default-radius-mobile);\\n      cursor: pointer;\\n      line-height: 1;\\n      text-align: left;\\n    }\\n  }\\n  @media print {\\n    /* print */\\n    table {\\n      border-collapse: collapse;\\n      border-spacing: 0;\\n    }\\n    td,\\n    th {\\n      padding-bottom: 1mm;\\n      border-bottom: 0.2mm solid #dddddd;\\n      font-size: 2.5mm;\\n    }\\n    .col-name {\\n      width: 15%;\\n    }\\n    .col-task {\\n      width: 35%;\\n    }\\n    .col-applicability {\\n      width: 25%;\\n    }\\n    .col-params {\\n      width: 25%;\\n    }\\n    .template-browser-buttons {\\n      display: none;\\n    }\\n    .template-browser-buttons button,\\n    .template-list button {\\n      appearance: none;\\n      width: auto;\\n      margin: 0;\\n      padding: 0;\\n      border: 0;\\n      text-align: left;\\n      background-color: transparent;\\n    }\\n  }\\n  /* color */\\n  /* light mode */\\n  @media (prefers-color-scheme: light) {\\n    table {\\n      color: #333333;\\n    }\\n    td,\\n    th {\\n      border-bottom-color: #dddddd;\\n    }\\n    tr {\\n      border-bottom-color: #dddddd;\\n    }\\n    .template-list button,\\n    .template-browser-buttons button {\\n      background-color: #f0f0f0;\\n      color: #333333;\\n    }\\n    .template-list button.curr,\\n    .template-browser-buttons button.curr {\\n      color: #ad1457;\\n      background-color: #fce4ec;\\n    }\\n  }\\n\\n  /* darkmode */\\n  @media (prefers-color-scheme: dark) {\\n    table {\\n      color: #e0e0e0;\\n    }\\n    td,\\n    th {\\n      border-bottom-color: #454545;\\n    }\\n    tr {\\n      border-bottom-color: #454545;\\n    }\\n    .template-list button,\\n    .template-browser-buttons button {\\n      background-color: #37474f;\\n      color: #f0f0f0;\\n    }\\n    .template-list button.curr,\\n    .template-browser-buttons button.curr {\\n      color: #fce4ec;\\n      background-color: #880e4f;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const TemplateDesignContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let templateContent = [
    {
      index: 1,
      name: "Simple breakdown",
      keywords: "Breakdown, ranking",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "None"
    },
    {
      index: 2,
      name: "Ratio and two breakdowns",
      keywords: "Percentage, proportion, breakdown, ranking",
      applicability: "nMeasure (1), minBreakdown (1), maxBreakdown (2)",
      params: "None"
    },
    {
      index: 3,
      name: "Change over time",
      keywords: "Trend, breakdown, time-series",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None"
    },
    {
      index: 4,
      name: "Time difference",
      keywords: "Time delta, time difference",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None"
    },
    {
      index: 5,
      name: "Comparison to the last time",
      keywords: "Time comparison",
      applicability: "nMeasure (1), hasTimeFrame (true), maxBreakdown (1)",
      params: "None"
    },
    {
      index: 6,
      name: "Breakdown and goal",
      keywords: "Threshold, goal, progress",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "Goal (number), goal name (string)"
    },
    {
      index: 7,
      name: "Simple threshold",
      keywords: "Indicator, safety",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "Threshold range (min and max numbers), threshold name (string)"
    },
    {
      index: 8,
      name: "Time-series and threshold",
      keywords: "Indicator, safety, confidence",
      applicability: "nMeasure (1), maxBreakdown (1)",
      params: "Threshold range (min and max numbers), threshold name (string), per-breakdown threshold ranges (min and max numbers)"
    },
    {
      index: 9,
      name: "Trend or correlation",
      keywords: "Trend, correlation, bivariate",
      applicability: "nMeasure (2), maxBreakdown (1)",
      params: "None"
    }
  ];
  let template = 1;
  $$result.css.add(css$2);
  return `<h2 data-svelte-h="svelte-813hjf">Template Designs</h2> <p data-svelte-h="svelte-y6zys0">We derived a set of template designs to serve or achieve a business-oriented
  &quot;message&quot; or goal from our co-design workshop, including breaking down a
  value, comparing a value to a goal, or seeing a trend.</p> <h3 data-svelte-h="svelte-1diyj43">Overview</h3> <table class="template-list svelte-bvkngr"><thead class="svelte-bvkngr" data-svelte-h="svelte-hnczax"><tr class="svelte-bvkngr"><th class="col-name svelte-bvkngr">Name</th> <th class="col-task svelte-bvkngr">Task keywords</th> <th class="col-applicability svelte-bvkngr">Applicability</th> <th class="col-params svelte-bvkngr">Parameters</th></tr></thead> <tbody class="svelte-bvkngr">${each(templateContent, (temp) => {
    return `<tr class="svelte-bvkngr"><td class="col-name svelte-bvkngr"><button class="${escape(null_to_empty(template == temp.index ? "curr" : ""), true) + " svelte-bvkngr"}">${escape(temp.name)}</button></td> <td class="col-task svelte-bvkngr">${escape(temp.keywords)}</td> <td class="col-applicability svelte-bvkngr">${escape(temp.applicability)}</td> <td class="col-params svelte-bvkngr">${escape(temp.params)}</td> </tr>`;
  })}</tbody></table> <h3 data-svelte-h="svelte-r0oqf7">Browse template designs</h3> <div class="template-browser-buttons svelte-bvkngr">${each(templateContent, (temp) => {
    return `<button class="${escape(null_to_empty(template == temp.index ? "curr" : ""), true) + " svelte-bvkngr"}">${escape(temp.name)}</button>`;
  })}</div> ${`${validate_component(Template1, "Template1").$$render($$result, {}, {}, {})}`} <h4 data-svelte-h="svelte-6fm44j">Original dashbaord selection</h4> <img src="images/original-dashboard.png" alt="A visualization dashboard with a top left cell highlighted. The zoomed-in version of the highlighed cell is superpositioned, syaing 'Sales: $652,989.00'"> <p data-svelte-h="svelte-1tid9s2">Note: before applying a time frame (i.e., Year-to-Date value).</p>`;
});
const Vertical = "/_app/immutable/assets/curation-vertical-stack.DL-u7kVc.png";
const css$1 = {
  code: "@media screen and (min-width: 951px){.template-browser-buttons.svelte-1u3g079 button.svelte-1u3g079{appearance:none;width:auto;margin-bottom:0.5rem;margin-right:0.5rem;padding:0.5rem;border:0;font-size:0.9rem;border-radius:var(--default-radius-mobile);cursor:pointer;line-height:1;text-align:left}}@media screen and (max-width: 950px){.template-browser-buttons.svelte-1u3g079 button.svelte-1u3g079{appearance:none;width:auto;margin-bottom:0.5rem;margin-right:0.5rem;padding:0.5rem;border:0;font-size:0.9rem;border-radius:var(--default-radius-mobile);cursor:pointer;line-height:1;text-align:left}}@media print{.template-browser-buttons.svelte-1u3g079.svelte-1u3g079{display:none}.template-browser-buttons.svelte-1u3g079 button.svelte-1u3g079{appearance:none;width:auto;margin:0;padding:0;border:0;text-align:left;background-color:transparent}}@media(prefers-color-scheme: light){.template-browser-buttons.svelte-1u3g079 button.svelte-1u3g079{background-color:#f0f0f0;color:#333333}.template-browser-buttons.svelte-1u3g079 button.curr.svelte-1u3g079{color:#ad1457;background-color:#fce4ec}}@media(prefers-color-scheme: dark){.template-browser-buttons.svelte-1u3g079 button.svelte-1u3g079{background-color:#37474f;color:#f0f0f0}.template-browser-buttons.svelte-1u3g079 button.curr.svelte-1u3g079{color:#fce4ec;background-color:#880e4f}}",
  map: `{"version":3,"file":"CurationContent.svelte","sources":["CurationContent.svelte"],"sourcesContent":["<script>\\n  import Carousel from \\"$lib/images/curation-carousel.gif\\";\\n  import MiniDash from \\"$lib/images/curation-mini-dashboard.png\\";\\n  import Slideshow from \\"$lib/images/curation-slideshow.gif\\";\\n  import Vertical from \\"$lib/images/curation-vertical-stack.png\\";\\n  let curation = 1;\\n<\/script>\\n\\n<h2>Curation methods</h2>\\n\\n<p>\\n  Philo's snapshot supports four curation methods: vertical stack, carousel,\\n  automated slideshow, and mini-dashboard.\\n</p>\\n\\n<div class=\\"template-browser-buttons\\">\\n  <button\\n    class={curation == 1 ? \\"curr\\" : \\"\\"}\\n    on:click={() => {\\n      curation = 1;\\n    }}>Vertical stack</button\\n  >\\n  <button\\n    class={curation == 2 ? \\"curr\\" : \\"\\"}\\n    on:click={() => {\\n      curation = 2;\\n    }}>Carousel</button\\n  >\\n  <button\\n    class={curation == 3 ? \\"curr\\" : \\"\\"}\\n    on:click={() => {\\n      curation = 3;\\n    }}>Automated slideshow</button\\n  >\\n  <button\\n    class={curation == 4 ? \\"curr\\" : \\"\\"}\\n    on:click={() => {\\n      curation = 4;\\n    }}>Mini-dashboard</button\\n  >\\n</div>\\n\\n{#if curation == 2}\\n  <h4>Carousel</h4>\\n  <img\\n    src={Carousel}\\n    alt=\\"Four snapshots are navigated using a carousel.\\"\\n  />\\n{:else if curation == 3}\\n  <h4>Automated slideshow</h4>\\n  <img\\n    src={Slideshow}\\n    alt=\\"Three snapshots are automatically played.\\"\\n  />\\n{:else if curation == 4}\\n  <h4>Mini-dashboard</h4>\\n  <img\\n    src={MiniDash}\\n    alt=\\"Four snapshots are arranged in a 2 by 2 grid.\\"\\n  />\\n{:else if curation == 1}\\n  <h4>Vertical stack</h4>\\n  <img\\n    src={Vertical}\\n    alt=\\"Four snapshots are vertically arranged.\\"\\n    style=\\"max-width: 350px;\\"\\n  />\\n{/if}\\n\\n<style>\\n  @media screen and (min-width: 951px) {\\n    /* desktop */\\n    .template-browser-buttons button {\\n      appearance: none;\\n      width: auto;\\n      margin-bottom: 0.5rem;\\n      margin-right: 0.5rem;\\n      padding: 0.5rem;\\n      border: 0;\\n      font-size: 0.9rem;\\n      border-radius: var(--default-radius-mobile);\\n      cursor: pointer;\\n      line-height: 1;\\n      text-align: left;\\n    }\\n  }\\n  @media screen and (max-width: 950px) {\\n    .template-browser-buttons button {\\n      appearance: none;\\n      width: auto;\\n      margin-bottom: 0.5rem;\\n      margin-right: 0.5rem;\\n      padding: 0.5rem;\\n      border: 0;\\n      font-size: 0.9rem;\\n      border-radius: var(--default-radius-mobile);\\n      cursor: pointer;\\n      line-height: 1;\\n      text-align: left;\\n    }\\n  }\\n  @media print {\\n    /* print */\\n    .template-browser-buttons {\\n      display: none;\\n    }\\n    .template-browser-buttons button {\\n      appearance: none;\\n      width: auto;\\n      margin: 0;\\n      padding: 0;\\n      border: 0;\\n      text-align: left;\\n      background-color: transparent;\\n    }\\n  }\\n  /* color */\\n  /* light mode */\\n  @media (prefers-color-scheme: light) {\\n    .template-browser-buttons button {\\n      background-color: #f0f0f0;\\n      color: #333333;\\n    }\\n    .template-browser-buttons button.curr {\\n      color: #ad1457;\\n      background-color: #fce4ec;\\n    }\\n  }\\n\\n  /* darkmode */\\n  @media (prefers-color-scheme: dark) {\\n    .template-browser-buttons button {\\n      background-color: #37474f;\\n      color: #f0f0f0;\\n    }\\n    .template-browser-buttons button.curr {\\n      color: #fce4ec;\\n      background-color: #880e4f;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsEE,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEnC,wCAAyB,CAAC,qBAAO,CAC/B,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,MAAM,CACpB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,uBAAuB,CAAC,CAC3C,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,IACd,CACF,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,wCAAyB,CAAC,qBAAO,CAC/B,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,MAAM,CACrB,YAAY,CAAE,MAAM,CACpB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,uBAAuB,CAAC,CAC3C,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,CAAC,CACd,UAAU,CAAE,IACd,CACF,CACA,OAAO,KAAM,CAEX,uDAA0B,CACxB,OAAO,CAAE,IACX,CACA,wCAAyB,CAAC,qBAAO,CAC/B,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,WACpB,CACF,CAGA,MAAO,uBAAuB,KAAK,CAAE,CACnC,wCAAyB,CAAC,qBAAO,CAC/B,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACT,CACA,wCAAyB,CAAC,MAAM,oBAAM,CACpC,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OACpB,CACF,CAGA,MAAO,uBAAuB,IAAI,CAAE,CAClC,wCAAyB,CAAC,qBAAO,CAC/B,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACT,CACA,wCAAyB,CAAC,MAAM,oBAAM,CACpC,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OACpB,CACF"}`
};
const CurationContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h2 data-svelte-h="svelte-u92sn">Curation methods</h2> <p data-svelte-h="svelte-1gsm6q2">Philo&#39;s snapshot supports four curation methods: vertical stack, carousel,
  automated slideshow, and mini-dashboard.</p> <div class="template-browser-buttons svelte-1u3g079"><button class="${escape(null_to_empty("curr"), true) + " svelte-1u3g079"}">Vertical stack</button> <button class="${escape(null_to_empty(""), true) + " svelte-1u3g079"}">Carousel</button> <button class="${escape(null_to_empty(""), true) + " svelte-1u3g079"}">Automated slideshow</button> <button class="${escape(null_to_empty(""), true) + " svelte-1u3g079"}">Mini-dashboard</button></div> ${`${`${`${`<h4 data-svelte-h="svelte-10gv2vk">Vertical stack</h4> <img${add_attribute("src", Vertical, 0)} alt="Four snapshots are vertically arranged." style="max-width: 350px;">`}`}`}`}`;
});
const InterfaceDoc = "/_app/immutable/assets/philo-interface.CVAnovrZ.pdf";
const InterfaceDocument = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-150c7o9">Interface Documentation</h2> <p data-svelte-h="svelte-sm5zlz">The below document details the interface design that we used for the
  demonstration scenario. The name of the interface, <em>Philo</em>, is only for
  reference purposes.</p> <a${add_attribute("href", InterfaceDoc, 0)} data-svelte-h="svelte-tqbbkr">Click here to access (pdf)</a>`;
});
const css = {
  code: ":root{--default-radius-desktop:0.25rem;--default-radius-mobile:0.25rem;--default-radius-print:1.5mm}html{width:100%;height:100%;margin:0;padding:0}*{box-sizing:border-box}@media screen{body{width:100%;height:100%;margin:0;padding:0}}@media print{body{width:100%;height:100%;margin:0;padding:10mm}}header.svelte-1c8rrjp.svelte-1c8rrjp,div.content-wrap.svelte-1c8rrjp.svelte-1c8rrjp,footer.svelte-1c8rrjp.svelte-1c8rrjp{width:100%;max-width:1400px;margin:auto}h1.svelte-1c8rrjp.svelte-1c8rrjp{font-weight:600}@media screen and (min-width: 951px){header.svelte-1c8rrjp.svelte-1c8rrjp{border-bottom:1px solid}header.svelte-1c8rrjp h1.svelte-1c8rrjp{padding:1rem;margin:0;font-size:2rem}}@media screen and (max-width: 950px){header.svelte-1c8rrjp h1.svelte-1c8rrjp{padding:0.5rem;margin:0;font-size:1rem}}@media print{header.svelte-1c8rrjp.svelte-1c8rrjp{padding-bottom:2mm}header.svelte-1c8rrjp h1.svelte-1c8rrjp{padding:0;margin:0;font-size:3.5mm}}@media screen and (min-width: 951px){div.content-wrap.svelte-1c8rrjp.svelte-1c8rrjp{display:flex}div.content-wrap.svelte-1c8rrjp nav.svelte-1c8rrjp{width:200px;padding:1rem 0.5rem 1rem 1rem}div.content-wrap.svelte-1c8rrjp main.svelte-1c8rrjp{width:calc(100% - 200px);padding:1rem 1rem 1rem 0.5rem}}@media screen and (max-width: 950px){div.content-wrap.svelte-1c8rrjp.svelte-1c8rrjp{display:block}div.content-wrap.svelte-1c8rrjp nav.svelte-1c8rrjp{width:100%;padding:0 0.5rem 0.5rem 0.5rem;margin-bottom:0.5rem;border-bottom:1px solid}div.content-wrap.svelte-1c8rrjp main.svelte-1c8rrjp{width:100%;padding:0 0.5rem 0.5rem 0.5rem}}@media print{nav.svelte-1c8rrjp.svelte-1c8rrjp{display:none}}@media screen and (min-width: 951px){div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp{appearance:none;width:100%;margin-bottom:0rem;padding:0.5rem;border:1px solid;border-radius:0;font-size:1rem;cursor:pointer;text-align:left}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:hover{font-weight:500}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:first-of-type{border-radius:var(--default-radius-desktop) var(--default-radius-desktop)\n				0 0}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:last-of-type{border-radius:0 0 var(--default-radius-desktop)\n				var(--default-radius-desktop)}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp{font-weight:500}}@media screen and (max-width: 950px){div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp{appearance:none;width:auto;margin-bottom:0.25rem;margin-right:0.25rem;padding:0.5rem;border:1px solid;font-size:0.9rem;border-radius:var(--default-radius-mobile);cursor:pointer}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:hover{font-weight:500}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp{font-weight:500}}@media screen and (min-width: 951px){div.content-wrap section p{font-size:0.9rem;margin:0 0 0.5rem 0;line-height:150%;max-width:700px}div.content-wrap section h2{font-size:1.2rem;font-weight:600;margin:1rem 0 0.5rem 0;line-height:150%;max-width:700px}div.content-wrap section h3{font-size:1rem;font-weight:500;margin:0.5rem 0 0.5rem 0;line-height:150%;max-width:700px}div.content-wrap section h4{font-size:0.9rem;font-weight:500;margin:0.5rem 0 0 0;line-height:150%;max-width:700px}div.content-wrap section h5{font-size:0.8rem;font-weight:700;margin:0.5rem 0 0 0;line-height:150%;max-width:700px}div.content-wrap main *:first-child{margin-top:0}div.content-wrap main ul{font-size:0.9rem;margin:0 0 0.5rem 0;padding:0 0 0 1rem;line-height:150%;max-width:700px}div.content-wrap main li{margin:0 0 0.5rem 0;max-width:500px}div.content-wrap main img{margin:0.25rem 0 0.25rem 0;max-width:600px;border-radius:var(--default-radius-desktop)}}@media screen and (max-width: 950px){div.content-wrap main p{font-size:0.9rem;margin:0 0 0.25rem 0;line-height:150%;max-width:700px}div.content-wrap main h2{font-size:1.1rem;font-weight:600;margin:1rem 0 0.5rem 0;line-height:150%;max-width:450px}div.content-wrap main h3{font-size:1rem;font-weight:500;margin:0.5rem 0 0.5rem 0;line-height:150%;max-width:450px}div.content-wrap main h4{font-size:0.9rem;font-weight:500;margin:0.5rem 0 0 0;line-height:150%;max-width:450px}div.content-wrap main h5{font-size:0.8rem;font-weight:700;margin:0.5rem 0 0 0;line-height:150%;max-width:450px}div.content-wrap main *:first-child{margin-top:0}div.content-wrap main ul{font-size:0.9rem;margin:0 0 0.5rem 0;padding:0 0 0 1rem;line-height:150%;max-width:500px}div.content-wrap main li{margin:0 0 0.5rem 0;max-width:500px}div.content-wrap main img{margin:0.25rem 0 0.25rem 0;max-width:calc(100% - 1rem);border-radius:var(--default-radius-mobile)}}@media print{div.content-wrap main p{font-size:2.5mm;color:cmyk(0, 0, 0, 0.9);margin:0 0 0.25mm 0;line-height:150%}div.content-wrap main h2{font-size:3mm;color:cmyk(0, 0, 0, 1);margin:1mm 0 0.5mm 0;line-height:150%;page-break-after:avoid}div.content-wrap main h3{font-size:2.5mm;color:cmyk(0, 0, 0, 1);margin:1mm 0 0.5mm 0;line-height:150%;page-break-after:avoid}div.content-wrap main h4{font-size:2.5mm;color:cmyk(0, 0, 0, 0.9);margin:0.5mm 0 0 0;font-weight:500;line-height:150%;page-break-after:avoid}div.content-wrap main h5{font-size:2.3mm;color:cmyk(0, 0, 0, 0.8);margin:0.5mm 0 0 0;font-weight:600;line-height:150%;page-break-after:avoid}div.content-wrap main *:first-child{margin-top:0}div.content-wrap main ul{font-size:2.5mm;color:cmyk(0, 0, 0, 0.9);margin:0 0 0.25mm 0;line-height:150%}div.content-wrap main img{margin:0.25mm 0 0.25mm 0;max-width:100%;border-radius:var(--default-radius-print)}}@media screen and (min-width: 951px){footer.svelte-1c8rrjp.svelte-1c8rrjp{border-top:1px solid}footer.svelte-1c8rrjp div.svelte-1c8rrjp{padding:1rem;font-size:0.9rem}}@media screen and (max-width: 950px){footer.svelte-1c8rrjp.svelte-1c8rrjp{border-top:1px solid}footer.svelte-1c8rrjp div.svelte-1c8rrjp{padding:0.5rem;font-size:0.9rem}}@media print{footer.svelte-1c8rrjp.svelte-1c8rrjp{padding-top:5mm}footer.svelte-1c8rrjp div.svelte-1c8rrjp{padding:0;font-size:2mm}}@media(prefers-color-scheme: light){body{background-color:#ffffff;color:#000000}header.svelte-1c8rrjp.svelte-1c8rrjp,div.content-wrap.svelte-1c8rrjp nav.svelte-1c8rrjp{border-bottom-color:#dddddd}footer.svelte-1c8rrjp.svelte-1c8rrjp{border-top-color:#dddddd;color:#999999}div.content-wrap main h2{color:#000000}div.content-wrap main h3,div.content-wrap main h4{color:#212121}div.content-wrap main h5{color:#666666}div.content-wrap main p,div.content-wrap main ul{color:#333333}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp{border-color:#f9f9f9;background-color:#f9f9f9;color:#454545}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp,div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:hover{background-color:#e0f2f1}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp{border-color:#00796b;color:#00796b}}@media(prefers-color-scheme: dark){body{background-color:#263238;color:#f0f0f0}header.svelte-1c8rrjp.svelte-1c8rrjp,div.content-wrap.svelte-1c8rrjp nav.svelte-1c8rrjp{border-bottom-color:#454545}footer.svelte-1c8rrjp.svelte-1c8rrjp{border-top-color:#454545;color:#999999}div.content-wrap main h2{color:#f0f0f0}div.content-wrap main h3,div.content-wrap main h4{color:#eaeaea}div.content-wrap main h5{color:#eaeaea}div.content-wrap main p,div.content-wrap main ul{color:#e0e0e0}a,a:visited{color:#b3e5fc}div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp{border-color:#37474f;background-color:#37474f;color:#f0f0f0}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp,div.content-wrap.svelte-1c8rrjp nav button.svelte-1c8rrjp:hover{background-color:#004d40}div.content-wrap.svelte-1c8rrjp nav button.curr.svelte-1c8rrjp{border-color:#e0f2f1;color:#e0f2f1}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from \\"svelte\\";\\n\\timport HomeContent from \\"./HomeContent.svelte\\";\\n\\timport VideoContent from \\"./VideoContent.svelte\\";\\n\\timport SnapshotContent from \\"./SnapshotContent.svelte\\";\\n\\timport ComponentContent from \\"./ComponentContent.svelte\\";\\n\\timport TemplateContent from \\"./TemplateContent.svelte\\";\\n\\timport TemplateSpecContent from \\"./TemplateSpecContent.svelte\\";\\n\\timport TextExprContent from \\"./TextExprContent.svelte\\";\\n\\timport TemplateDesignContent from \\"./TemplateDesignContent.svelte\\";\\n\\timport CurationContent from \\"./CurationContent.svelte\\";\\n\\timport InterfaceDocument from \\"./InterfaceDocument.svelte\\";\\n\\n\\tlet currMenu = \\"home\\";\\n\\tlet menus = [\\n\\t\\t{ name: \\"Home\\", type: \\"home\\" },\\n\\t\\t{ name: \\"Snapshot Formalization\\", type: \\"snapshot\\" },\\n\\t\\t{ name: \\"Component Formalization\\", type: \\"component\\" },\\n\\t\\t{ name: \\"Template Design Formalization\\", type: \\"template-formal\\" },\\n\\t\\t{ name: \\"Template Configuration Formalization\\", type: \\"template-spec\\" },\\n\\t\\t{ name: \\"Template Designs\\", type: \\"template-design\\" },\\n\\t\\t{ name: \\"Curation Methods\\", type: \\"curation\\" },\\n\\t\\t{ name: \\"Text Expressions\\", type: \\"text-expr\\" },\\n\\t\\t{ name: \\"Scenario Videos\\", type: \\"video\\" },\\n\\t\\t{ name: \\"Interface Documentation\\", type: \\"interface\\" },\\n\\t];\\n\\n\\tfunction setMenu(m) {\\n\\t\\tcurrMenu = m;\\n\\t\\tlocalStorage.setItem(\\"currMenu\\", m);\\n\\t}\\n\\tonMount(() => {\\n\\t\\tcurrMenu = localStorage.getItem(\\"currMenu\\") || \\"home\\";\\n\\t});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Dashboard Snapshot Supplementary Material</title>\\n</svelte:head>\\n\\n<header>\\n\\t<h1>Dashboard Snapshot Supplementary Material</h1>\\n</header>\\n<div class=\\"content-wrap\\">\\n\\t<nav>\\n\\t\\t{#each menus as menu}\\n\\t\\t\\t<button\\n\\t\\t\\t\\tid={\\"menu-\\" + menu.type}\\n\\t\\t\\t\\tclass={menu.type === currMenu ? \\"curr\\" : \\"\\"}\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tsetMenu(menu.type);\\n\\t\\t\\t\\t}}>{menu.name}</button\\n\\t\\t\\t>\\n\\t\\t{/each}\\n\\t</nav>\\n\\t<main>\\n\\t\\t{#if currMenu === \\"home\\"}\\n\\t\\t\\t<HomeContent goTo={setMenu} />\\n\\t\\t{:else if currMenu === \\"interface\\"}\\n\\t\\t\\t<InterfaceDocument />\\n\\t\\t{:else if currMenu === \\"video\\"}\\n\\t\\t\\t<VideoContent />\\n\\t\\t{:else if currMenu === \\"snapshot\\"}\\n\\t\\t\\t<SnapshotContent />\\n\\t\\t{:else if currMenu === \\"component\\"}\\n\\t\\t\\t<ComponentContent />\\n\\t\\t{:else if currMenu === \\"template-formal\\"}\\n\\t\\t\\t<TemplateContent />\\n\\t\\t{:else if currMenu === \\"template-spec\\"}\\n\\t\\t\\t<TemplateSpecContent />\\n\\t\\t{:else if currMenu === \\"template-design\\"}\\n\\t\\t\\t<TemplateDesignContent />\\n\\t\\t{:else if currMenu === \\"curation\\"}\\n\\t\\t\\t<CurationContent />\\n\\t\\t{:else if currMenu === \\"text-expr\\"}\\n\\t\\t\\t<TextExprContent />\\n\\t\\t{/if}\\n\\t</main>\\n</div>\\n\\n<footer>\\n\\t<div>&copy; Anonymous 2024</div>\\n</footer>\\n\\n<style>\\n\\t:root {\\n\\t\\t--default-radius-desktop: 0.25rem;\\n\\t\\t--default-radius-mobile: 0.25rem;\\n\\t\\t--default-radius-print: 1.5mm;\\n\\t}\\n\\t/* layout out */\\n\\t:global(html) {\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\t:global(*) {\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n\\t@media screen {\\n\\t\\t/* screen */\\n\\t\\t:global(body) {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\theight: 100%;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tpadding: 0;\\n\\t\\t}\\n\\t}\\n\\t@media print {\\n\\t\\t/* print */\\n\\t\\t:global(body) {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\theight: 100%;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tpadding: 10mm;\\n\\t\\t}\\n\\t}\\n\\n\\t/* layout in */\\n\\theader,\\n\\tdiv.content-wrap,\\n\\tfooter {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 1400px;\\n\\t\\tmargin: auto;\\n\\t}\\n\\th1 {\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\t/* header */\\n\\t@media screen and (min-width: 951px) {\\n\\t\\t/* desktop */\\n\\t\\theader {\\n\\t\\t\\tborder-bottom: 1px solid;\\n\\t\\t}\\n\\t\\theader h1 {\\n\\t\\t\\tpadding: 1rem;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tfont-size: 2rem;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 950px) {\\n\\t\\t/* mobile */\\n\\t\\theader h1 {\\n\\t\\t\\tpadding: 0.5rem;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t}\\n\\t}\\n\\t@media print {\\n\\t\\t/* print */\\n\\t\\theader {\\n\\t\\t\\tpadding-bottom: 2mm;\\n\\t\\t}\\n\\t\\theader h1 {\\n\\t\\t\\tpadding: 0;\\n\\t\\t\\tmargin: 0;\\n\\t\\t\\tfont-size: 3.5mm;\\n\\t\\t}\\n\\t}\\n\\t/* main */\\n\\t@media screen and (min-width: 951px) {\\n\\t\\t/* desktop */\\n\\t\\tdiv.content-wrap {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav {\\n\\t\\t\\twidth: 200px;\\n\\t\\t\\tpadding: 1rem 0.5rem 1rem 1rem;\\n\\t\\t}\\n\\t\\tdiv.content-wrap main {\\n\\t\\t\\twidth: calc(100% - 200px);\\n\\t\\t\\tpadding: 1rem 1rem 1rem 0.5rem;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 950px) {\\n\\t\\t/* mobile */\\n\\t\\tdiv.content-wrap {\\n\\t\\t\\tdisplay: block;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tpadding: 0 0.5rem 0.5rem 0.5rem;\\n\\t\\t\\tmargin-bottom: 0.5rem;\\n\\t\\t\\tborder-bottom: 1px solid;\\n\\t\\t}\\n\\t\\tdiv.content-wrap main {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tpadding: 0 0.5rem 0.5rem 0.5rem;\\n\\t\\t}\\n\\t}\\n\\t@media print {\\n\\t\\t/* print */\\n\\t\\tnav {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n\\t/* nav button */\\n\\t@media screen and (min-width: 951px) {\\n\\t\\t/* desktop */\\n\\t\\tdiv.content-wrap nav button {\\n\\t\\t\\tappearance: none;\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tmargin-bottom: 0rem;\\n\\t\\t\\tpadding: 0.5rem;\\n\\t\\t\\tborder: 1px solid;\\n\\t\\t\\tborder-radius: 0;\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t\\tcursor: pointer;\\n\\t\\t\\ttext-align: left;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button:hover {\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button:first-of-type {\\n\\t\\t\\tborder-radius: var(--default-radius-desktop) var(--default-radius-desktop)\\n\\t\\t\\t\\t0 0;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button:last-of-type {\\n\\t\\t\\tborder-radius: 0 0 var(--default-radius-desktop)\\n\\t\\t\\t\\tvar(--default-radius-desktop);\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr {\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 950px) {\\n\\t\\t/* mobile */\\n\\t\\tdiv.content-wrap nav button {\\n\\t\\t\\tappearance: none;\\n\\t\\t\\twidth: auto;\\n\\t\\t\\tmargin-bottom: 0.25rem;\\n\\t\\t\\tmargin-right: 0.25rem;\\n\\t\\t\\tpadding: 0.5rem;\\n\\t\\t\\tborder: 1px solid;\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tborder-radius: var(--default-radius-mobile);\\n\\t\\t\\tcursor: pointer;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button:hover {\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr {\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t}\\n\\t}\\n\\n\\t/* content assets */\\n\\t@media screen and (min-width: 951px) {\\n\\t\\t/* desktop */\\n\\t\\t:global(div.content-wrap section p) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap section h2) {\\n\\t\\t\\tfont-size: 1.2rem;\\n\\t\\t\\tfont-weight: 600;\\n\\t\\t\\tmargin: 1rem 0 0.5rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap section h3) {\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t\\tmargin: 0.5rem 0 0.5rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap section h4) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t\\tmargin: 0.5rem 0 0 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap section h5) {\\n\\t\\t\\tfont-size: 0.8rem;\\n\\t\\t\\tfont-weight: 700;\\n\\t\\t\\tmargin: 0.5rem 0 0 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main *:first-child) {\\n\\t\\t\\tmargin-top: 0;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main ul) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\t\\tpadding: 0 0 0 1rem;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main li) {\\n\\t\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\t\\tmax-width: 500px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main img) {\\n\\t\\t\\tmargin: 0.25rem 0 0.25rem 0;\\n\\t\\t\\tmax-width: 600px;\\n\\t\\t\\tborder-radius: var(--default-radius-desktop);\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 950px) {\\n\\t\\t/* mobile */\\n\\t\\t:global(div.content-wrap main p) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tmargin: 0 0 0.25rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h2) {\\n\\t\\t\\tfont-size: 1.1rem;\\n\\t\\t\\tfont-weight: 600;\\n\\t\\t\\tmargin: 1rem 0 0.5rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 450px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h3) {\\n\\t\\t\\tfont-size: 1rem;\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t\\tmargin: 0.5rem 0 0.5rem 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 450px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h4) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t\\tmargin: 0.5rem 0 0 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 450px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h5) {\\n\\t\\t\\tfont-size: 0.8rem;\\n\\t\\t\\tfont-weight: 700;\\n\\t\\t\\tmargin: 0.5rem 0 0 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 450px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main *:first-child) {\\n\\t\\t\\tmargin-top: 0;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main ul) {\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\t\\tpadding: 0 0 0 1rem;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tmax-width: 500px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main li) {\\n\\t\\t\\tmargin: 0 0 0.5rem 0;\\n\\t\\t\\tmax-width: 500px;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main img) {\\n\\t\\t\\tmargin: 0.25rem 0 0.25rem 0;\\n\\t\\t\\tmax-width: calc(100% - 1rem);\\n\\t\\t\\tborder-radius: var(--default-radius-mobile);\\n\\t\\t}\\n\\t}\\n\\t@media print {\\n\\t\\t/* print */\\n\\t\\t:global(div.content-wrap main p) {\\n\\t\\t\\tfont-size: 2.5mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 0.9);\\n\\t\\t\\tmargin: 0 0 0.25mm 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h2) {\\n\\t\\t\\tfont-size: 3mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 1);\\n\\t\\t\\tmargin: 1mm 0 0.5mm 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tpage-break-after: avoid;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h3) {\\n\\t\\t\\tfont-size: 2.5mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 1);\\n\\t\\t\\tmargin: 1mm 0 0.5mm 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tpage-break-after: avoid;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h4) {\\n\\t\\t\\tfont-size: 2.5mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 0.9);\\n\\t\\t\\tmargin: 0.5mm 0 0 0;\\n\\t\\t\\tfont-weight: 500;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tpage-break-after: avoid;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h5) {\\n\\t\\t\\tfont-size: 2.3mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 0.8);\\n\\t\\t\\tmargin: 0.5mm 0 0 0;\\n\\t\\t\\tfont-weight: 600;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t\\tpage-break-after: avoid;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main *:first-child) {\\n\\t\\t\\tmargin-top: 0;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main ul) {\\n\\t\\t\\tfont-size: 2.5mm;\\n\\t\\t\\tcolor: cmyk(0, 0, 0, 0.9);\\n\\t\\t\\tmargin: 0 0 0.25mm 0;\\n\\t\\t\\tline-height: 150%;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main img) {\\n\\t\\t\\tmargin: 0.25mm 0 0.25mm 0;\\n\\t\\t\\tmax-width: 100%;\\n\\t\\t\\tborder-radius: var(--default-radius-print);\\n\\t\\t}\\n\\t}\\n\\n\\t/* footer */\\n\\t@media screen and (min-width: 951px) {\\n\\t\\t/* desktop */\\n\\t\\tfooter {\\n\\t\\t\\tborder-top: 1px solid;\\n\\t\\t}\\n\\t\\tfooter div {\\n\\t\\t\\tpadding: 1rem;\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 950px) {\\n\\t\\t/* mobile */\\n\\t\\tfooter {\\n\\t\\t\\tborder-top: 1px solid;\\n\\t\\t}\\n\\t\\tfooter div {\\n\\t\\t\\tpadding: 0.5rem;\\n\\t\\t\\tfont-size: 0.9rem;\\n\\t\\t}\\n\\t}\\n\\t@media print {\\n\\t\\t/* print */\\n\\t\\tfooter {\\n\\t\\t\\tpadding-top: 5mm;\\n\\t\\t}\\n\\t\\tfooter div {\\n\\t\\t\\tpadding: 0;\\n\\t\\t\\tfont-size: 2mm;\\n\\t\\t}\\n\\t}\\n\\n\\t/* color */\\n\\t/* light mode */\\n\\t@media (prefers-color-scheme: light) {\\n\\t\\t:global(body) {\\n\\t\\t\\tbackground-color: #ffffff;\\n\\t\\t\\tcolor: #000000;\\n\\t\\t}\\n\\t\\theader,\\n\\t\\tdiv.content-wrap nav {\\n\\t\\t\\tborder-bottom-color: #dddddd;\\n\\t\\t}\\n\\t\\tfooter {\\n\\t\\t\\tborder-top-color: #dddddd;\\n\\t\\t\\tcolor: #999999;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h2) {\\n\\t\\t\\tcolor: #000000;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h3),\\n\\t\\t:global(div.content-wrap main h4) {\\n\\t\\t\\tcolor: #212121;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h5) {\\n\\t\\t\\tcolor: #666666;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main p),\\n\\t\\t:global(div.content-wrap main ul) {\\n\\t\\t\\tcolor: #333333;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button {\\n\\t\\t\\tborder-color: #f9f9f9;\\n\\t\\t\\tbackground-color: #f9f9f9;\\n\\t\\t\\tcolor: #454545;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr,\\n\\t\\tdiv.content-wrap nav button:hover {\\n\\t\\t\\tbackground-color: #e0f2f1;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr {\\n\\t\\t\\tborder-color: #00796b;\\n\\t\\t\\tcolor: #00796b;\\n\\t\\t}\\n\\t}\\n\\n\\t/* darkmode */\\n\\t@media (prefers-color-scheme: dark) {\\n\\t\\t:global(body) {\\n\\t\\t\\tbackground-color: #263238;\\n\\t\\t\\tcolor: #f0f0f0;\\n\\t\\t}\\n\\t\\theader,\\n\\t\\tdiv.content-wrap nav {\\n\\t\\t\\tborder-bottom-color: #454545;\\n\\t\\t}\\n\\t\\tfooter {\\n\\t\\t\\tborder-top-color: #454545;\\n\\t\\t\\tcolor: #999999;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h2) {\\n\\t\\t\\tcolor: #f0f0f0;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h3),\\n\\t\\t:global(div.content-wrap main h4) {\\n\\t\\t\\tcolor: #eaeaea;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main h5) {\\n\\t\\t\\tcolor: #eaeaea;\\n\\t\\t}\\n\\t\\t:global(div.content-wrap main p),\\n\\t\\t:global(div.content-wrap main ul) {\\n\\t\\t\\tcolor: #e0e0e0;\\n\\t\\t}\\n\\t\\t:global(a),\\n\\t\\t:global(a:visited) {\\n\\t\\t\\tcolor: #b3e5fc;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button {\\n\\t\\t\\tborder-color: #37474f;\\n\\t\\t\\tbackground-color: #37474f;\\n\\t\\t\\tcolor: #f0f0f0;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr,\\n\\t\\tdiv.content-wrap nav button:hover {\\n\\t\\t\\tbackground-color: #004d40;\\n\\t\\t}\\n\\t\\tdiv.content-wrap nav button.curr {\\n\\t\\t\\tborder-color: #e0f2f1;\\n\\t\\t\\tcolor: #e0f2f1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqFC,KAAM,CACL,wBAAwB,CAAE,OAAO,CACjC,uBAAuB,CAAE,OAAO,CAChC,sBAAsB,CAAE,KACzB,CAEQ,IAAM,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACV,CACQ,CAAG,CACV,UAAU,CAAE,UACb,CACA,OAAO,MAAO,CAEL,IAAM,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CACV,CACD,CACA,OAAO,KAAM,CAEJ,IAAM,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IACV,CACD,CAGA,oCAAM,CACN,GAAG,2CAAa,CAChB,oCAAO,CACN,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IACT,CACA,gCAAG,CACF,WAAW,CAAE,GACd,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,oCAAO,CACN,aAAa,CAAE,GAAG,CAAC,KACpB,CACA,qBAAM,CAAC,iBAAG,CACT,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IACZ,CACD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,qBAAM,CAAC,iBAAG,CACT,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IACZ,CACD,CACA,OAAO,KAAM,CAEZ,oCAAO,CACN,cAAc,CAAE,GACjB,CACA,qBAAM,CAAC,iBAAG,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,KACZ,CACD,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,GAAG,2CAAc,CAChB,OAAO,CAAE,IACV,CACA,GAAG,4BAAa,CAAC,kBAAI,CACpB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,IAC3B,CACA,GAAG,4BAAa,CAAC,mBAAK,CACrB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CACzB,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,MACzB,CACD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,GAAG,2CAAc,CAChB,OAAO,CAAE,KACV,CACA,GAAG,4BAAa,CAAC,kBAAI,CACpB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,MAAM,CAC/B,aAAa,CAAE,MAAM,CACrB,aAAa,CAAE,GAAG,CAAC,KACpB,CACA,GAAG,4BAAa,CAAC,mBAAK,CACrB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CAAC,MAAM,CAAC,MAAM,CAAC,MAC1B,CACD,CACA,OAAO,KAAM,CAEZ,iCAAI,CACH,OAAO,CAAE,IACV,CACD,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAO,CAC3B,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,aAAa,CAAE,CAAC,CAChB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IACb,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,MAAO,CACjC,WAAW,CAAE,GACd,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,cAAe,CACzC,aAAa,CAAE,IAAI,wBAAwB,CAAC,CAAC,IAAI,wBAAwB,CAAC;AAC7E,IAAI,CAAC,CAAC,CACJ,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,aAAc,CACxC,aAAa,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,wBAAwB,CAAC;AACnD,IAAI,IAAI,wBAAwB,CAC9B,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAM,CAChC,WAAW,CAAE,GACd,CACD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAO,CAC3B,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,OAAO,CACtB,YAAY,CAAE,OAAO,CACrB,OAAO,CAAE,MAAM,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IAAI,uBAAuB,CAAC,CAC3C,MAAM,CAAE,OACT,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,MAAO,CACjC,WAAW,CAAE,GACd,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAM,CAChC,WAAW,CAAE,GACd,CACD,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAE5B,0BAA4B,CACnC,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,2BAA6B,CACpC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACvB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,2BAA6B,CACpC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACzB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,2BAA6B,CACpC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,2BAA6B,CACpC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,mCAAqC,CAC5C,UAAU,CAAE,CACb,CACQ,wBAA0B,CACjC,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CACnB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,SAAS,CAAE,KACZ,CACQ,yBAA2B,CAClC,MAAM,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAC3B,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,wBAAwB,CAC5C,CACD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAE5B,uBAAyB,CAChC,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CACrB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACvB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACzB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACpB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,mCAAqC,CAC5C,UAAU,CAAE,CACb,CACQ,wBAA0B,CACjC,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CACnB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KACZ,CACQ,wBAA0B,CACjC,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,SAAS,CAAE,KACZ,CACQ,yBAA2B,CAClC,MAAM,CAAE,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAC3B,SAAS,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5B,aAAa,CAAE,IAAI,uBAAuB,CAC3C,CACD,CACA,OAAO,KAAM,CAEJ,uBAAyB,CAChC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,WAAW,CAAE,IACd,CACQ,wBAA0B,CACjC,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACrB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,KACnB,CACQ,wBAA0B,CACjC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACvB,MAAM,CAAE,GAAG,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACrB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,KACnB,CACQ,wBAA0B,CACjC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,KACnB,CACQ,wBAA0B,CACjC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,CACjB,gBAAgB,CAAE,KACnB,CACQ,mCAAqC,CAC5C,UAAU,CAAE,CACb,CACQ,wBAA0B,CACjC,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACpB,WAAW,CAAE,IACd,CACQ,yBAA2B,CAClC,MAAM,CAAE,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CACzB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,sBAAsB,CAC1C,CACD,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,oCAAO,CACN,UAAU,CAAE,GAAG,CAAC,KACjB,CACA,qBAAM,CAAC,kBAAI,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MACZ,CACD,CACA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CAEpC,oCAAO,CACN,UAAU,CAAE,GAAG,CAAC,KACjB,CACA,qBAAM,CAAC,kBAAI,CACV,OAAO,CAAE,MAAM,CACf,SAAS,CAAE,MACZ,CACD,CACA,OAAO,KAAM,CAEZ,oCAAO,CACN,WAAW,CAAE,GACd,CACA,qBAAM,CAAC,kBAAI,CACV,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,GACZ,CACD,CAIA,MAAO,uBAAuB,KAAK,CAAE,CAC5B,IAAM,CACb,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACA,oCAAM,CACN,GAAG,4BAAa,CAAC,kBAAI,CACpB,mBAAmB,CAAE,OACtB,CACA,oCAAO,CACN,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACQ,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,wBAAyB,CACzB,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,uBAAwB,CACxB,wBAA0B,CACjC,KAAK,CAAE,OACR,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAO,CAC3B,YAAY,CAAE,OAAO,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAK,CAChC,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,MAAO,CACjC,gBAAgB,CAAE,OACnB,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAM,CAChC,YAAY,CAAE,OAAO,CACrB,KAAK,CAAE,OACR,CACD,CAGA,MAAO,uBAAuB,IAAI,CAAE,CAC3B,IAAM,CACb,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACA,oCAAM,CACN,GAAG,4BAAa,CAAC,kBAAI,CACpB,mBAAmB,CAAE,OACtB,CACA,oCAAO,CACN,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACQ,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,wBAAyB,CACzB,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,uBAAwB,CACxB,wBAA0B,CACjC,KAAK,CAAE,OACR,CACQ,CAAE,CACF,SAAW,CAClB,KAAK,CAAE,OACR,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAO,CAC3B,YAAY,CAAE,OAAO,CACrB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACR,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAK,CAChC,GAAG,4BAAa,CAAC,GAAG,CAAC,qBAAM,MAAO,CACjC,gBAAgB,CAAE,OACnB,CACA,GAAG,4BAAa,CAAC,GAAG,CAAC,MAAM,oBAAM,CAChC,YAAY,CAAE,OAAO,CACrB,KAAK,CAAE,OACR,CACD"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currMenu = "home";
  let menus = [
    { name: "Home", type: "home" },
    {
      name: "Snapshot Formalization",
      type: "snapshot"
    },
    {
      name: "Component Formalization",
      type: "component"
    },
    {
      name: "Template Design Formalization",
      type: "template-formal"
    },
    {
      name: "Template Configuration Formalization",
      type: "template-spec"
    },
    {
      name: "Template Designs",
      type: "template-design"
    },
    {
      name: "Curation Methods",
      type: "curation"
    },
    {
      name: "Text Expressions",
      type: "text-expr"
    },
    { name: "Scenario Videos", type: "video" },
    {
      name: "Interface Documentation",
      type: "interface"
    }
  ];
  function setMenu(m) {
    currMenu = m;
    localStorage.setItem("currMenu", m);
  }
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1jjzj44_START -->${$$result.title = `<title>Dashboard Snapshot Supplementary Material</title>`, ""}<!-- HEAD_svelte-1jjzj44_END -->`, ""} <header class="svelte-1c8rrjp" data-svelte-h="svelte-8web1q"><h1 class="svelte-1c8rrjp">Dashboard Snapshot Supplementary Material</h1></header> <div class="content-wrap svelte-1c8rrjp"><nav class="svelte-1c8rrjp">${each(menus, (menu) => {
    return `<button${add_attribute("id", "menu-" + menu.type, 0)} class="${escape(null_to_empty(menu.type === currMenu ? "curr" : ""), true) + " svelte-1c8rrjp"}">${escape(menu.name)}</button>`;
  })}</nav> <main class="svelte-1c8rrjp">${currMenu === "home" ? `${validate_component(HomeContent, "HomeContent").$$render($$result, { goTo: setMenu }, {}, {})}` : `${currMenu === "interface" ? `${validate_component(InterfaceDocument, "InterfaceDocument").$$render($$result, {}, {}, {})}` : `${currMenu === "video" ? `${validate_component(VideoContent, "VideoContent").$$render($$result, {}, {}, {})}` : `${currMenu === "snapshot" ? `${validate_component(SnapshotContent, "SnapshotContent").$$render($$result, {}, {}, {})}` : `${currMenu === "component" ? `${validate_component(ComponentContent, "ComponentContent").$$render($$result, {}, {}, {})}` : `${currMenu === "template-formal" ? `${validate_component(TemplateContent, "TemplateContent").$$render($$result, {}, {}, {})}` : `${currMenu === "template-spec" ? `${validate_component(TemplateSpecContent, "TemplateSpecContent").$$render($$result, {}, {}, {})}` : `${currMenu === "template-design" ? `${validate_component(TemplateDesignContent, "TemplateDesignContent").$$render($$result, {}, {}, {})}` : `${currMenu === "curation" ? `${validate_component(CurationContent, "CurationContent").$$render($$result, {}, {}, {})}` : `${currMenu === "text-expr" ? `${validate_component(TextExprContent, "TextExprContent").$$render($$result, {}, {}, {})}` : ``}`}`}`}`}`}`}`}`}`}</main></div> <footer class="svelte-1c8rrjp" data-svelte-h="svelte-jgz0sl"><div class="svelte-1c8rrjp">© Anonymous 2024</div> </footer>`;
});
export {
  Page as default
};
