const outputs = ["Transcript JSON", "Clean text", "Readable article", "SRT + VTT", "APA / MLA / Chicago", "BibTeX"];
const pro = ["Speaker identification", "LLM transcript cleanup", "Readable research packets", "Batch queues"];

// Lemon Squeezy checkout URLs (store: rookworks).
const CHECKOUT = {
  monthly: "https://rookworks.lemonsqueezy.com/checkout/buy/15c598e3-67a2-4378-a066-3ec04c0d0efa?enabled=2107053",
  annual: "https://rookworks.lemonsqueezy.com/checkout/buy/15c598e3-67a2-4378-a066-3ec04c0d0efa?enabled=2107056",
  lifetime: "https://rookworks.lemonsqueezy.com/checkout/buy/b0d00482-ce43-47ad-b973-d95e2921c184?enabled=2107078",
};
const DOWNLOAD = "#download";
// GitHub Releases — "latest/download/<asset>" always tracks the newest release.
// NOTE: these resolve for anonymous visitors only once JJHerrmann/chimpwriter is public.
const REL = "https://github.com/JJHerrmann/chimpwriter/releases";
const DL = {
  windows: `${REL}/latest/download/Chimpwriter-windows-x86_64.zip`,
  linux: `${REL}/latest/download/Chimpwriter-linux-x86_64.tar.gz`,
  releases: `${REL}/latest`,
};
const SUPPORT = "mailto:chimpwriter@rook.works";

export default function Home() {
  return <main>
    <nav className="nav wrap" aria-label="Main navigation">
      <a className="brand" href="#top"><span className="brand-mark">CW</span><span>Chimpwriter</span></a>
      <div className="nav-links"><a href="#workflow">How it works</a><a href="#plans">Plans</a><a href="#download">Download</a><a className="nav-cta" href="#download">Get Chimpwriter</a></div>
    </nav>

    <section className="hero wrap" id="top">
      <div className="eyebrow"><span/> LOCAL-FIRST RESEARCH TRANSCRIPTION</div>
      <h1>Turn recordings into<br/><em>research you can cite.</em></h1>
      <p className="hero-copy">Chimpwriter turns YouTube videos and local audio or video files into clean transcripts, readable articles, subtitles, and properly formatted citations—on your own machine.</p>
      <div className="hero-actions"><a className="button primary" href="#plans">Get Chimpwriter <span>↗</span></a><a className="text-link" href="#workflow">See the workflow <span>↓</span></a></div>

      <div className="app-window" aria-label="Chimpwriter application preview">
        <div className="window-bar"><div className="dots"><i/><i/><i/></div><strong>Chimpwriter 1.5</strong><span>1000 monkeys, 1000 typewriters</span></div>
        <div className="app-body">
          <div className="source-row"><label>Source</label><div className="input">https://youtube.com/watch?v=lecture-07</div><button>File…</button></div>
          <div className="app-grid"><label>Speed</label><div className="select">Dolphin — small.en <span>⌄</span></div><label>Language</label><div className="select">auto <span>⌄</span></div><label>Topic</label><div className="input">Thermodynamics</div></div>
          <div className="checks"><span><i>✓</i> Multi-speaker</span><span><i>✓</i> Clean up with LLM</span><span><i>✓</i> Readable article</span><span><i>✓</i> APA citation</span></div>
          <div className="run-row"><button className="run">Transcribe</button><div className="bar"><i/></div><span>Building research packet… 72%</span></div>
          <div className="packet"><div><small>RESEARCH / THERMODYNAMICS / LECTURE 07</small><strong>Your packet is ready</strong></div><div className="file-stack"><span>transcript.json</span><span>article.txt</span><span>citation.txt</span><span>subtitles.srt</span></div></div>
        </div>
      </div>
    </section>

    <section className="manifesto"><div className="wrap split"><p className="section-label">ONE INPUT. A USEFUL PACKET.</p><div><h2>Stop scrubbing through video.<br/>Start working with the source.</h2><p>Drop in a lecture, interview, meeting, podcast, or YouTube URL. Chimpwriter keeps word-level timing and source metadata, then produces files you can search, quote, cite, edit, and archive.</p></div></div></section>

    <section className="output-section wrap"><div><p className="section-label">WHAT YOU GET</p><h2>Not just a wall of text.</h2><p>Every run creates a structured transcript as the source of truth. Generate new formats later without downloading or transcribing the media again.</p></div><div className="output-grid">{outputs.map((item,index)=><div key={item}><span>0{index+1}</span>{item}</div>)}</div></section>

    <section className="workflow" id="workflow"><div className="wrap"><p className="section-label">THE PIPELINE</p><div className="flow"><article><span>01</span><h3>Add a source</h3><p>Paste a YouTube link or choose a local audio or video file.</p></article><b>→</b><article><span>02</span><h3>Transcribe locally</h3><p>Choose speed and language. Models are cached for fast repeat work.</p></article><b>→</b><article><span>03</span><h3>Use the packet</h3><p>Open clean text, article, captions, citations, or the complete JSON record.</p></article></div></div></section>

    <section className="details wrap"><article><p className="section-label">MADE FOR REAL SOURCES</p><h2>Names, jargon, and multiple speakers included.</h2></article><div className="detail-list"><div><strong>Your terminology</strong><p>Add specialist terms and corrections once. Chimpwriter uses them during transcription and cleanup.</p></div><div><strong>Who said what</strong><p>Optional speaker diarization labels turns in interviews, panels, meetings, and lectures.</p></div><div><strong>Cleanup without rewriting</strong><p>Connect an OpenAI-compatible model to fix obvious transcription errors while preserving wording and meaning.</p></div><div><strong>Offline where it matters</strong><p>Transcription runs locally. Once optional models are downloaded, core processing does not require a hosted transcription service.</p></div></div></section>

    <section className="plans" id="plans"><div className="wrap plan-layout"><div><p className="section-label">CHOOSE YOUR WORKFLOW</p><h2>Start free.<br/>Unlock the full packet.</h2><p>Bring your own model or API key—Pro never bills you for compute. Each licence includes up to three activations.</p><div className="ownership"><strong>Subscriptions earn ownership.</strong><p>After 365 paid days, the version you have becomes permanently yours. Cancel after that and Pro keeps working; only future updates stop.</p></div></div><div className="cards"><article><span>FREE</span><strong>$0</strong><p>Transcription<br/>All export formats<br/>Terminology library<br/>No account required</p><a className="button secondary" href={DOWNLOAD}>Get the free edition</a></article><article className="pro"><span>PRO</span><div className="price-options"><b>$12 <small>/ month</small></b><b>$79 <small>/ year</small></b><b>$99 <small>/ once</small></b></div><p>{pro.join("\n")}</p><div className="plan-buttons"><a className="button primary" href={CHECKOUT.monthly}>Subscribe monthly</a><a className="button primary" href={CHECKOUT.annual}>Subscribe yearly</a><a className="button primary" href={CHECKOUT.lifetime}>Buy once</a></div><small>14-day money-back guarantee.</small></article></div></div></section>

    <section className="download wrap" id="download"><p className="section-label">DOWNLOAD</p><h2>Get the free edition.</h2><p>Transcription, every export format, and the terminology library — no account. Pro features unlock with a licence key in <strong>Settings</strong>.</p><div className="dl-buttons"><a className="button primary" href={DL.windows}>Windows 10 / 11 (x64)</a><a className="button secondary" href={DL.linux}>Linux (x64)</a></div><p className="dl-note"><strong>First launch on Windows:</strong> new apps trigger a SmartScreen notice — click <em>More info → Run anyway</em>. The build is unsigned for now; code signing arrives with the first sales. The first run downloads the speech model (~500&nbsp;MB), so be online once.</p><p className="dl-note">macOS: an unsigned Apple-Silicon build is on the <a href={DL.releases}>releases page</a> — right-click the app and choose <em>Open</em> the first time. A signed, notarised build is planned.</p></section>

    <section className="faq wrap"><div><p className="section-label">LICENSING, PLAINLY</p><h2>Yours means yours.</h2></div><div className="faq-list"><details><summary>Do I need a subscription? <span>+</span></summary><p>No. The free tier is fully functional for transcription. Pro adds speaker diarization, LLM cleanup, research packets, and batch processing.</p></details><details><summary>What happens if I cancel? <span>+</span></summary><p>Pro runs until the end of your paid period. If you have accumulated 365 paid days, your current version stays Pro permanently.</p></details><details><summary>Annual or one-time? <span>+</span></summary><p>The $99 one-time purchase makes the current major version permanently yours immediately. The annual plan earns the same permanent ownership after its first paid year, with updates and support along the way.</p></details><details><summary>Does my audio leave my machine? <span>+</span></summary><p>No. You supply your own transcription runtime and optional LLM endpoint. Only licence activation communicates with the Chimpwriter licensing service.</p></details></div></section>

    <section className="trust wrap"><p>Chimpwriter is downloadable software from Rook Works. Digital access and licence instructions are delivered electronically after purchase. Lemon Squeezy acts as merchant of record for paid orders.</p><div className="policy-grid"><details><summary>14-day refund policy <span>+</span></summary><p>Email chimpwriter@rook.works within 14 days of any monthly, annual, or one-time purchase for a full refund, no questions asked. Pro access ends after a refund. A permanent licence already earned after 365 paid days—or a one-time purchase past its refund window—is not revoked.</p></details><details><summary>Cancel anytime <span>+</span></summary><p>Cancel a subscription from the customer portal in your purchase email or by contacting support. Future charges stop and Pro continues to the end of the paid period. Paid days still count toward permanent ownership. There are no partial-period cancellation refunds.</p></details><details><summary>Permanent means offline <span>+</span></summary><p>A permanent licence is a signed file verified on your machine. If the licensing service disappears, it keeps working. It covers the current major version permanently; a future major version is an optional paid upgrade.</p></details><details><summary>Support <span>+</span></summary><p>Email chimpwriter@rook.works for billing, activation, or technical help. A real person usually replies within a couple of days.</p></details></div></section>

    <footer><div className="wrap footer-inner"><div><a className="brand" href="#top"><span className="brand-mark">CW</span><span>Chimpwriter</span></a><p>Recording in. Research packet out.</p></div><div className="footer-links"><a href={SUPPORT}>Support</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="#plans">Plans</a><a href="#top">Back to top ↑</a></div></div><div className="wrap legal">© 2026 Rook Works. All rights reserved.<span>chimpwriter.rook.works</span></div></footer>
  </main>;
}
