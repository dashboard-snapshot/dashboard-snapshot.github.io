<script>
  import DescribedCode from "./DescribedCode.svelte";
  import CodeLegend from "./CodeLegend.svelte";
</script>

<h2>Component Formalization</h2>

<p>
  We provide a formalization of snapshot component. A component is a building
  block for a dashboard snapshot.
</p>

<CodeLegend
  dataTypesToShow={["uuid", "pointer", "datetime", "interval", "periodicity"]}
/>

<h3>Formal definition</h3>
<DescribedCode
  line={1}
  description={"A Snapshot consists of a component ID (UUID), name (string), owner(a unique ID of a owner), the date of creation and last update, the ID/pointers of originating dashboard and selection (any format of unique IDs), data, static filter, time frame, content type, original representation (worksheet), text message, template design, template configuration, interactive filters, and annotation. Data, staic filters, and worksheet should be expressed in whiever format that is supported by the dashboard tool. For template design and configuration, see the corresponding formalizations."}
>
  <entity>ComponentSpec</entity> :=
  <entity>ComponentID</entity>&lt;<type>UUID</type>&gt;,
  <entity>Name</entity>&lt;<type>String</type>&gt;,
  <entity>Owner</entity>&lt;<type>ID</type>&gt;,
  <entity>DateCreated</entity>&lt;<type>DateTime</type>&gt;,
  <entity>DateLastUpdated</entity>&lt;<type>DateTime</type>&gt;,
  <entity>DashboardID</entity>&lt;<type>ID</type>&gt;,
  <entity>SelectionID</entity>&lt;<type>ID</type>&gt;,
  <entity>Data</entity>,
  <entity>Measure</entity>&lt;[<entity>MeasureItem</entity>]&gt;,
  <entity>Breakdown</entity>&lt;[<entity>BreakdownItem</entity>]&gt;,
  <entity>Data</entity>, (<entity>Filter</entity>, <entity>TimeFrame</entity>,)
  <entity>ContentType</entity>,
  <entity>Worksheet</entity>, (<entity>TextMessage</entity>&lt;<type
    >String</type
  >&gt;, <entity>TemplateDesign</entity>,
  <entity>TemplateConfig</entity>,) (<entity>InteractiveFilter</entity
  >&lt;[<entity>InteractiveFilterItem</entity>]&gt;,
  <entity>Annotation</entity>&lt;[<entity>AnnotationItem</entity>]&gt;)
</DescribedCode>
<DescribedCode
  line={2}
  description={"A measure item consists of a data field, whether it is the primary field of the component, an aggregate method (e.g., sum, mean), and a format string."}
>
  <entity>MeasureItem</entity> :=
  <entity>Field</entity>&lt;<type>DataField</type>&gt;,
  <entity>IsPrimary</entity>&lt;<type>Boolean</type>&gt;, (<entity
    >Aggregate</entity
  >&lt;<type>String</type>&gt;,
  <entity>Format</entity>&lt;<type>FormatString</type>&gt;)
</DescribedCode>
<DescribedCode
  line={3}
  description={"A breakdown item consists of a dimension data field, a measure field to rank the items by, top and bottom N items to show, and ordering."}
>
  <entity>BreakdownItem</entity> :=
  <entity>Dimension</entity>&lt;<type>DataField</type>&gt;, (<entity
    >RankBy</entity
  >&lt;<type>DataField</type>&gt;,
  <entity>TopN</entity>&lt;<type>Number</type>&gt;,
  <entity>BottomN</entity>&lt;<type>Number</type>&gt;,
  <entity>Ordering</entity>&lt;<type
    ><literal>"ascending"</literal> |
    <literal>"descending"</literal></type
  >&gt;)
</DescribedCode>
<DescribedCode
  line={4}
  description={"A time frame consists of a reference time field, either an interval with a start date or a start date with an end date, a periodicity filter."}
>
  <entity>TimeFrame</entity> :=
  <entity>Reference</entity>&lt;<type>DataField</type>&gt;, &#123;
  <entity>Interval</entity>&lt;<type>Interval</type>&gt;,
  <entity>Start</entity>&lt;<type>Date</type>&gt; |
  <entity>Start</entity>&lt;<type>Date</type>&gt;,
  <entity>End</entity>&lt;<type>Date</type>&gt;, &#125;
  <entity>TimeUnit</entity>&lt;<literal>"Minute"</literal> |
  <literal>"Hour"</literal> | <literal>"Day"</literal> |
  <literal>"Week"</literal>
  | ...&gt;
  <entity>PeriodicityFilter</entity>&lt;<type>Periodicity</type>&gt;
</DescribedCode>
<DescribedCode
  line={5}
  description={"A weekly time frame by Order Date for a month starting from March 1, 2022."}
>
  &#123; <entity>Reference</entity>: <literal>"Order Date"</literal>,
  <entity>Interval</entity>: <literal>"1month"</literal>,
  <entity>Start</entity>: <literal>"2022-03-01"</literal>,
  <entity>TimeUnit</entity>: <literal>"week"</literal>
  &#125;
</DescribedCode>
<DescribedCode
  line={6}
  description={"A daily time frame by Order Date for a quarter starting from March 1, 2022, filtered by every Monday."}
>
  &#123; <entity>Reference</entity>: <literal>"Order Date"</literal>,
  <entity>Interval</entity>: <literal>"1quarter"</literal>,
  <entity>Start</entity>: <literal>"2022-03-01"</literal>,
  <entity>TimeUnit</entity>: <literal>"day"</literal>
  <entity>Periodicity</entity>: <literal>"monday"</literal>
  &#125;
</DescribedCode>
<DescribedCode
  line={7}
  description={"A user can choose worksheet (the original content) or template for the representation type. Default is worksheet."}
>
  <entity>ContentType</entity> :=
  <literal>"Worksheet"</literal> | <literal>"Template"</literal>
</DescribedCode>

<DescribedCode
  line={8}
  description={"An interactive filter consists of name, type, and corresponding options. For an 'Auto' type, a user only needs to specify the field. For a 'dropdown' or 'slider' type, a user can provide the selectable values or a lmiit range, respectively. For a 'Macro' type interactive filter, a user should provide a filter expression written in a supported format."}
>
  <entity>InteractiveFilterItem</entity> :=
  <entity>Name</entity>,
  <entity>Field</entity>&lt;<type>DataField</type>&gt;,
  <entity>Type</entity>&lt;<literal>"Auto"</literal> |
  <literal>"Dropdown"</literal> | <literal>"Slider"</literal> |
  <literal>"Macro"</literal>&gt;, <br /> &#123;
  <entity>Type</entity> ==
  <literal>"Dropdown"</literal>
  ? (<entity>Values</entity>&lt;[<type>Any</type>]&gt;) &#125;, <br />
  &#123; <entity>Type</entity>
  ==
  <literal>"Slider"</literal>
  ? (<entity>Range</entity>&lt;[<entity>Min</entity>&lt;<type>Number</type>&gt;,
  <entity>Max</entity>&lt;<type>Number</type>&gt;]&gt;) &#125;,<br />
  &#123; <entity>Type</entity> ==
  <literal>"Macro"</literal>
  ? <entity>Filter</entity> &#125;,
</DescribedCode>

<DescribedCode
  line={9}
  description={"An annotation item is defined by its shape, position (top-left: x, y; bottom-right: x2, y2), stroke color/opacity/dashed, and fill color/opacity."}
>
  <entity>AnnotationItem</entity> :=
  <entity>Shape</entity>&lt;<literal>"Circle"</literal> |
  <literal>"Rectangle"</literal> | <literal>"Arrow"</literal> |
  <literal>"Line"</literal>&gt;,
  <entity>X</entity>&lt;<type>Number</type>&gt;,
  <entity>Y</entity>&lt;<type>Number</type>&gt;,
  <entity>X2</entity>&lt;<type>Number</type>&gt;,
  <entity>Y2</entity>&lt;<type>Number</type>&gt;,
  <entity>StrokeColor</entity>&lt;<type>Color</type>&gt;, (<entity
    >StrokeOpacity</entity
  >&lt;<type>Number(0-1)</type>&gt;,
  <entity>StrokeDash</entity>&lt;<type>DashExpression</type>&gt;,)
  <entity>FillColor</entity>&lt;<type>Color</type>&gt;, (<entity
    >FillOpacity</entity
  >&lt;<type>Number(0-1)</type>&gt;,)
</DescribedCode>
