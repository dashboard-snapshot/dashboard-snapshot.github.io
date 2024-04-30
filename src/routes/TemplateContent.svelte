<script>
  import DescribedCode from "./DescribedCode.svelte";
  import CodeLegend from "./CodeLegend.svelte";
</script>

<h2>Template Design</h2>

<p>
  A user may choose a template to transform the snapshot design from the
  original representation. A template (design) is the definition of a
  representation design to serve or achieve a business-oriented "message" or
  goal like breaking down a value, comparing a value to a goal, or seeing a
  trend. Here, we show how a template design is formalized. You can find the
  template configuration and individual designs in the corresponding menu.
</p>

<CodeLegend dataTypesToShow={["svelte"]} />

<h4>Formal definition</h4>
<DescribedCode
  line={1}
  description={"A template (design) is defined as a tuple of a name, task keyword(s), applicability information, a reactive design file, a text template, and parameter definitions. For <code>TextExpression</code>, see the corresponding menu."}
>
  <entity>TemplateDesign</entity> :=
  <entity>Name</entity>&lt;<type>String</type>&gt;,
  <entity>TaskKeyword</entity>&lt;[<type>String</type>]&gt;,
  <entity>Applicability</entity>,
  <entity>Design</entity>&lt;<type>ReactiveDesignFile</type>&gt;,
  <entity>TextTemplate</entity>&lt;<type>Expression</type>&gt;,
  <entity>ParameterDefinition</entity>&lt;[<type>ParameterDefItem</type>]&gt;
</DescribedCode>
<DescribedCode
  line={2}
  description={"The applicability information of a tempalte design is used to compute whether a component spec is applicable for the template. The prefix 'n' means the exact number, and the prefixes 'Max' and 'Min' mean less than or equal to and greater than or equal to, respectively."}
>
  <entity>Applicability</entity> := (<entity>MaxMeasure</entity>&lt;<type
    >Number</type
  >&gt;,
  <entity>nMeasure</entity>&lt;<type>Number</type>&gt;,
  <entity>MinMeasure</entity>&lt;<type>Number</type>&gt;,
  <entity>MaxDimension</entity>&lt;<type>Number</type>&gt;,
  <entity>nDimension</entity>&lt;<type>Number</type>&gt;,
  <entity>MinDimension</entity>&lt;<type>Number</type>&gt;,
  <entity>HasTimeFrame</entity>&lt;<type>Boolean</type>&gt;)
</DescribedCode>
<DescribedCode
  line={3}
  description={"A component feeds the template configuration to a template design file written in a reactive grammar."}
>
  <entity>Design</entity> &lt;- <entity>TemplateConfiguration</entity>
</DescribedCode>
<DescribedCode
  line={4}
  description={"A parameter is defined as a tuple of a name, token (an identifier), type (data type), and whether it is for each breakdown value."}
>
  <entity>ParameterDefItem</entity> :=
  <entity>Name</entity>&lt;<type>String</type>&gt;,
  <entity>Token</entity>&lt;<type>String</type>&gt;,
  <entity>Type</entity>&lt;<literal>"number"</literal> |
  <literal>"string"</literal>
  | ...&gt;,
  <entity>PerBreakdown</entity>&lt;<type>Boolean</type>&gt;
</DescribedCode>
