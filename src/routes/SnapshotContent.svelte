<script>
  import DescribedCode from "./DescribedCode.svelte";
  import CodeLegend from "./CodeLegend.svelte";
</script>

<h2>Snapshot Formalization</h2>

<p>
  We provide a formalization of dashboard snapshots. A dashboard snapshot
  consists of one or more components in a certain curation method.
</p>

<CodeLegend
  dataTypesToShow={["uuid", "pointer", "datetime", "interval", "grid"]}
/>

<h3>Formal definition</h3>
<DescribedCode
  line={1}
  description={"A Snapshot consists of a snpashot ID (UUID), name (string), owner(a unique ID of a owner),  components (a list of component IDs), text message (string, optional), curation, export options, auto-recurrence options, freshness status, and completeness status."}
>
  <entity>SnapshotSpec</entity> :=
  <entity>SnapshotID</entity>&lt;<type>UUID</type>&gt;,
  <entity>Name</entity>&lt;<type>String</type>&gt;,
  <entity>Owner</entity>&lt;<type>UUID</type>&gt;,
  <entity>Components</entity>&lt;[<entity>ComponentID</entity>&lt;<type
    >String</type
  >&gt;]&gt; (<entity>TextMessage</entity>&lt;<type>String</type>&gt;,)
  <entity>Curation</entity>, <entity>Export</entity>,
  <entity>AutoRecur</entity>, <entity>Freshness</entity>,
  <entity>Completeness</entity>
</DescribedCode>
<DescribedCode
  line={2}
  description={"A curation property consists of type, timing (optional for the 'slideshow' type), and layout template written as a CSS grid template definition (optional for the 'mini-dashboard' type)."}
>
  <entity>Curation</entity> :=
  <entity>CurationType</entity>, (<entity>Timing</entity>&lt;<type>Second</type
  >&gt;,
  <entity>Layout</entity>&lt;<type>CSS-Template-Definition</type>&gt;)
</DescribedCode>
<DescribedCode
  line={3}
  description={"A curation is either vertical stacking, carousel, slide show, or mini-dashboard. "}
>
  <entity>CurationType</entity> := &#123; <literal>"stack"</literal> |
  <literal>"carousel"</literal>,
  <literal>"slideshow"</literal>
  | <literal>"miniDashboard"</literal> &#125;
</DescribedCode>
<DescribedCode
  line={4}
  description={"An export option property consists of the channel to share the snapshot to, date of publication, and whether to allow others to share the snapshot to other channels."}
>
  <entity>Export</entity> :=
  <entity>Channel</entity>&lt;<type>URI</type>&gt;,
  <entity>DatePublished</entity>&lt;<type>Datetime</type>&gt;,
  <entity>AllowSharing</entity>&lt;<type>Boolean</type>&gt;
</DescribedCode>
<DescribedCode
  line={5}
  description={"An auto-recurrence property consists of whether to auto-recur, an interval by which to auto-recur, a date until which to auto-recur, and the time of a day for the publication."}
>
  <entity>AutoRecur</entity> :=
  <entity>IsAutoRecur</entity>&lt;<type>Boolean</type>&gt;,
  <entity>Interval</entity>&lt;<type>Interval</type>&gt;,
  <entity>AutoRecurBy</entity>&lt;<type>Date</type>&gt;,
  <entity>Time</entity>&lt;<type>Time</type>&gt;
</DescribedCode>
<DescribedCode
  line={5}
  description={"The freshness state of a snapshot consists of the fresh-until date and the permission for others to update."}
>
  <entity>Freshness</entity> :=
  <entity>FreshUntil</entity>&lt;<type>Date</type>&gt;,
  <entity>AllowOthersToUpdate</entity>&lt;<type>Boolean</type>&gt;
</DescribedCode>
<DescribedCode
  line={6}
  description={"The completeness state of a snapshot indicates whether a snapshot's data has missing data points."}
>
  <entity>Completeness</entity> :=
  <entity>IsIncomplte</entity>&lt;<type>Boolean</type>&gt;
</DescribedCode>
