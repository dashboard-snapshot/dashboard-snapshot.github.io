<script>
  import DescribedCode from "./DescribedCode.svelte";
  import CodeLegend from "./CodeLegend.svelte";
</script>

<h2>Text Template Expression</h2>

<p>
  To enable text template, we implemented a text-template expression, emulating
  other format expressions. This text expressions are intended for captions in
  template-based components.
</p>

<h3>Formal definition</h3>

<p>There are three types of expressions: plain text, index, and function</p>

<DescribedCode line={1} description={""}>
  <literal>Plain text</literal>
</DescribedCode>
<DescribedCode
  line={2}
  description={"There are predefined index names: Measure1, Dim1, etc."}
>
  @[<entity>IndexName</entity>]
</DescribedCode>
<DescribedCode
  line={3}
  description={"A function is expressed by the function name and its argument."}
>
  @<entity>FunctionName</entity>[<literal>arg1</literal>,
  <literal>arg2</literal>]
</DescribedCode>

<h3>Examples</h3>

<DescribedCode
  line={1}
  description={"Rendered: The total Sales is $32,000 for 2 months from Mach 1, 2022.<br />- West: $9,500<br/>- East: $8,300<br/>- Mid: $5,300<br/>- South: $8,900"}
>
  <literal>The total</literal> @[<entity>Measure1.name</entity>]
  <literal>is</literal> #<entity>format</entity>[#<entity>aggregate</entity
  >[@[<entity>Measure1.value</entity>], @[<entity>Measure1.aggregate</entity
  >]],'$,']#<entity>if</entity>[@[<entity>HasTimeFrame</entity>],
  <literal> for</literal>
  @[<entity>TimeFrame.displayInterval</entity>] <literal>from</literal>
  @[<entity>TimeFrame.displayStartDate</entity>]]. <br />#<entity>if</entity
  >[@[<entity>hasBreakdown</entity>], #<entity>repeat</entity>[<literal
    >-
  </literal>#<entity>format</entity>[#<entity>aggregate</entity>[@[<entity
    >Measure1.value</entity
  >], @[<entity>Measure1.aggregate</entity>], @[<enity>datum</enity
  >]],'$,.2']<literal>\n</literal>]]
</DescribedCode>
