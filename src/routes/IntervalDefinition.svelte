<script>
  import Modal from "./Modal.svelte";
  export let close;
</script>

<Modal {close}>
  <span slot="header">Interval data type</span>
  <div slot="body">
    <p>
      A semantic interval for your time frame. If both interval and start date
      are set, then the end date is ignored.
    </p>
    <h4>How to write an interval expression</h4>
    <p>
      An interval expression (string) consists of <code>length</code>
      (integer) and <code>unit</code> (string). For example,
      <code>1day</code>
      means a single day, <code>2week</code> is for two weeks. If the
      <code>length</code>
      is <code>1</code>, then you can omit it. You can use the plural form of
      <code>unit</code>
      (e.g., <code>days</code>, <code>weeks</code>). Floating point is not
      currently supported. For instance
      <code>0.5h</code> is NOT valid.
    </p>
    <h4>Possible units</h4>
    <p>
      <code>minute</code> (alias: <code>minutes</code>, <code>min</code>,
      <code>mins</code>)
    </p>
    <p>
      <code>hour</code> (alias: <code>hours</code>, <code>h</code>)
    </p>
    <p>
      <code>day</code> (alias: <code>days</code>, <code>d</code>)
    </p>
    <p>
      <code>week</code> (alias: <code>weeks</code>, <code>w</code>)
    </p>
    <p>
      <code>month</code> (alias: <code>months</code>, <code>mo</code>,
      <code>mos</code>)
    </p>
    <p>
      <code>quarter</code> (alias: <code>quarters</code>, <code>q</code>)
    </p>
    <p>
      <code>year</code> (alias: <code>years</code>, <code>y</code>)
    </p>
  </div>
</Modal>

