<script>
  import DescribedCode from "./DescribedCode.svelte";
  import CodeLegend from "./CodeLegend.svelte";
</script>

<h2>Template Configuration</h2>

<p>A template spec is a way to send data to a template design.</p>

<CodeLegend dataTypesToShow={["colorScheme", "scaleType"]} />

<h3>Formal definition</h3>
<DescribedCode
  line={1}
  description={"A template configuration consists of appearance information, parameters, custom text, data, measure(s), a time frame, breakdown(s), filter(s), and scale(s). For data, measure, time frame, breakdown, and filter, see the Component Configuration."}
>
  <entity>TemplateConfig</entity> :=
  <entity>Appearance</entity>&lt;<type>String</type>&gt;, (<entity
    >Parameter</entity
  >&lt;<type>Key: Value</type>&gt;,
  <entity>CustomText</entity>&lt;<type>String</type>&gt;,)
  <entity>Data</entity>,
  <entity>Measure</entity>, (<entity>Breakdown</entity>,
  <entity>TimeFrame</entity>,
  <entity>Filter</entity>,
  <entity>Scale</entity>&lt;[<type>ScaleItem</type>]&gt;)
</DescribedCode>
<DescribedCode
  line={2}
  description={"The appearance information of a template spec controls the use of graphic, text, caption, tooltip, and so on."}
>
  <entity>Appearance</entity> :=
  <entity>UseGraphic</entity>&lt;<type>Boolean</type>&gt;,
  <entity>UseText</entity>&lt;<type>Boolean</type>&gt;,
  <entity>UseCaption</entity>&lt;<type>Boolean</type>&gt;,
  <entity>UseTooltip</entity>&lt;<type>Boolean</type>&gt;, ...
</DescribedCode>
<DescribedCode
  line={3}
  description={"A scale item is defined by a channel (mark property), field, domain, range (or scheme), and type (see above)"}
>
  <entity>ScaleItem</entity> :=
  <entity>Channel</entity>&lt;<literal>"color"</literal> |
  <literal>"fill"</literal> | <literal>"stroke"</literal> |
  <literal>"opacity"</literal> | <literal>"shape"</literal>
  | ...&gt;,
  <entity>Field</entity>&lt;<type>DataField</type>&gt;,
  <entity>Domain</entity>&lt;[<type>Any</type>]&gt;, &#123;
  <entity>Range</entity>&lt;[<type>Any</type>]&gt; |
  <entity>Scheme</entity>&lt;<type>ColorScheme</type>&gt; &#125;,
  <entity>Type</entity>&lt;<literal>"Linear"</literal> |
  <literal>"Log"</literal> | <literal>"Band"</literal> | ...&gt;
</DescribedCode>
