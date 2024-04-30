<script>
  import ExtendedVideo from "$lib/images/philo-scenario-extended.mp4";
  import ShortenedVideo from "$lib/images/philo-scenario-short.mp4";
  import ExtendedVideoVTT from "$lib/images/philo-scenario-extended.vtt";
  import ShortenedVideoVTT from "$lib/images/philo-scenario-short.vtt";
</script>

<h2>Scenario Videos</h2>

<p>
  We present demonstration scenarios as introduced in Section 5. The demonstration prototype is named "Philo."
</p>

<p>
  Note: In the video, "Component Authoring Interface" refers to <em
    >Component Creator</em
  >
  in the paper, and "Snapshot Composing and Exporting Interface" means
  <em>Snapshot Composer</em>.
</p>

<h3>Shortened scenario</h3>

<video controls width="100%" muted>
  <source src={ShortenedVideo} type="video/mp4" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src={ShortenedVideoVTT}
    default
  />
  This browser does not support the HTML5 video element.
</video>

<h3>Extended scenario</h3>

<video controls width="100%" muted>
  <source src={ExtendedVideo} type="video/mp4" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src={ExtendedVideoVTT}
    default
  />
  This browser does not support the HTML5 video element.
</video>
