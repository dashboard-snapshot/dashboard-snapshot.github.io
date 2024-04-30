<script>
  import Modal from "./Modal.svelte";
  export let close;
</script>

<Modal {close}>
  <span slot="header"> Time frame periodicity filter expression</span>
  <div slot="body">
    <p>
      Periodicity filter for your time frame. This filters in 'every X' from
      your time frame. For instance, a periodicity filter for "every weekend"
      only filters in the weekend data given your time frame.
    </p>
    <h4>How to write a periodicity filter expression</h4>
    <p>
      A periodicity filter (<code>string</code>) consists of
      <code>index</code>
      (<code>integer</code>/<code>string</code>) and <code>unit</code> (<code
        >string</code
      >), or is a shortcut (<code>string</code>). A <code>unit</code> can NOT
      have a plural form. For instance, every 30 minute can be stated as
      <code>30minute</code> (exact expression) or <code>halfhour</code>
      (shortcut). An <code>index</code> can be a range using <code>-</code>. For
      instance, every 10 to 20 minute o'clock can be expressed as
      <code>10-20minute</code>. Multiple periodicity filters can be concatenated
      using a semicolon (<code>;</code>) for different units, such as
      <code>0day;0month</code> for 'every Sunday in January', a comma (<code
        >,</code
      >) for the same unit, such as <code>0,6day</code> for weekends, or a dash
      (<code>-</code>) for a range of the same unit, such as
      <code>1-5day</code> for weekdays. Using the same unit for multiple times will
      cause a parsing error.
    </p>
    <h4>Possible units</h4>
    <p>
      <code>minute</code> (alias: <code>min</code>)
      <br />
      <code>hour</code> (alias: <code>h</code>)
      <br />
      <code>date</code> (for calendar date in a month) <br />For
      <code>index</code>, Sunday is 0, and Saturday is 6.
      <br />
      <code>day</code> (for week days)

      <br />
      <code>month</code> (alias: <code>mo</code>)
    </p>
    <h4>Shortcuts</h4>
    <h5>Week</h5>
    <p>
      <code>weekend</code>: <code>0day;6day</code><br />
      <code>weekday</code>: <code>1-5day</code><br />
      <code>sunday</code> (alias: <code>sun</code>): <code>0day</code><br />
      <code>monday</code> (alias: <code>mon</code>): <code>1day</code><br />
      <code>tuesday</code> (alias: <code>tue</code>): <code>2day</code><br />
      <code>wednesday</code> (alias: <code>wed</code>): <code>3day</code><br />
      <code>thursday</code> (alias: <code>thu</code>): <code>4day</code><br />
      <code>friday</code> (alias: <code>fri</code>): <code>5day</code><br />
      <code>saturday</code> (alias: <code>sat</code>): <code>6day</code>
    </p>
    <h5>Month</h5>
    <p>
      <code>january</code> (alias: <code>jan</code>): <code>0month</code><br />
      <code>february</code> (alias: <code>feb</code>): <code>1month</code><br />
      <code>march</code> (alias: <code>mar</code>): <code>2month</code><br />
      <code>april</code> (alias: <code>apr</code>): <code>3month</code><br />
      <code>may</code>: <code>4month</code><br />
      <code>june</code> (alias: <code>jun</code>): <code>5month</code><br />
      <code>july</code> (alias: <code>jul</code>): <code>6month</code><br />
      <code>august</code> (alias: <code>aug</code>): <code>7month</code><br />
      <code>september</code> (alias: <code>sep</code>): <code>8month</code><br
      />
      <code>october</code> (alias: <code>oct</code>): <code>9month</code><br />
      <code>november</code> (alias: <code>nov</code>): <code>10month</code><br
      />
      <code>december</code> (alias: <code>dec</code>): <code>11month</code>
    </p>
    <h5>Hour/minute</h5>
    <p>
      <code>halfhour</code>: <code>30minute</code> (exact match)<br />
      <code>firsthalfhour</code>: <code>0-29minute</code> (range match)<br />
      <code>secondhalfhour</code>: <code>30-59minute</code> (range match)
    </p>
  </div>
</Modal>
