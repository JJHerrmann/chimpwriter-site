import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Chimpwriter',
  description: 'What Chimpwriter collects, why, and your rights. Short version: your recordings and transcripts never leave your machine.',
};

export default function Privacy() {
  return <main className="legal">
    <div className="wrap legal-wrap">
      <a className="legal-back" href="/">← Chimpwriter</a>
      <h1>Privacy Policy</h1>
      <p className="legal-date">Last updated: 10 September 2026</p>

      <p>Chimpwriter is published by <strong>Jacob Herrmann, doing business as Rook Works</strong> ("Rook Works", "we", "us"), a sole proprietorship in the State of [STATE], United States. This policy explains what personal data we collect when you visit <a href="https://chimpwriter.rook.works">chimpwriter.rook.works</a>, buy a licence, or activate the software — and what we do not collect.</p>

      <p><strong>We have never sold personal data and never will.</strong></p>

      <h2>The short version</h2>
      <p>Chimpwriter is desktop software that runs on your computer. The audio, video, transcripts, articles, subtitles, and citations you create with it are <strong>never transmitted to us</strong>. Transcription happens locally. The optional cleanup step sends text only to the language-model endpoint <em>you</em> configure, never through our servers. The only thing that talks to us is licence activation.</p>

      <h2>What we collect and why</h2>

      <h3>Website visits</h3>
      <p>The website is a set of static files hosted on GitHub Pages. We run no analytics and set no cookies of our own. GitHub, as our hosting provider, may log request metadata (including IP addresses) for security and operational purposes under <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub's privacy statement</a>.</p>

      <h3>Buying a licence</h3>
      <p>Purchases are handled by <strong>Lemon Squeezy</strong>, which acts as the merchant of record and the seller of your licence. Lemon Squeezy collects your name, email address, billing location, payment details, and any tax information it needs to complete and tax the sale. Payment card details go directly to Lemon Squeezy and its processors and never reach us. From Lemon Squeezy we receive your name, email address, country, and a record of the purchase (plan, amount, date, licence key) — used for licensing, receipts, and support. Lemon Squeezy's handling of checkout data is governed by <a href="https://www.lemonsqueezy.com/privacy">its own privacy policy</a>.</p>

      <h3>Activating the software</h3>
      <p>When you activate Chimpwriter Pro, the application contacts our licensing service (a Cloudflare Worker) and sends: your <strong>licence key</strong>, a <strong>random identifier generated on your device</strong> for that installation, and — inherent to any internet request — your <strong>IP address</strong>. We use these to enforce the limit of three activations per licence, to issue your signed licence file, and to detect abuse. We keep this activation record while the licence is active. We do not fingerprint your hardware.</p>

      <h3>Contacting us</h3>
      <p>If you email <a href="mailto:chimpwriter@rook.works">chimpwriter@rook.works</a>, we keep that correspondence and your address so we have context if you write again.</p>

      <h2>Who we share it with</h2>
      <p>We use a small number of service providers to operate Chimpwriter. They process data only to provide their service to us:</p>
      <ul>
        <li><strong>Lemon Squeezy</strong> — payments, tax, and licence-key issuance (merchant of record).</li>
        <li><strong>Cloudflare</strong> — hosts the licensing service and its database.</li>
        <li><strong>GitHub</strong> — hosts this website and the software downloads.</li>
      </ul>
      <p>We will disclose information if required by valid legal process, to protect our rights or the safety of others, or in connection with a sale or transfer of the business — in which case we would give notice before any personal data became subject to a different policy.</p>

      <h2>Your rights</h2>
      <p>Regardless of where you live, you may ask us to:</p>
      <ul>
        <li>tell you what personal data we hold about you;</li>
        <li>correct it;</li>
        <li>delete it — note that deleting your activation records will deactivate your licences;</li>
        <li>send you a copy in a portable form;</li>
        <li>stop or restrict certain processing.</li>
      </ul>
      <p>Email <a href="mailto:chimpwriter@rook.works">chimpwriter@rook.works</a> and we will respond within the time your local law requires (and promptly regardless). We may need to verify your identity first. For purchase or billing data, you can also contact Lemon Squeezy directly. You have the right to complain to your local data-protection authority.</p>

      <h2>Data retention</h2>
      <p>We keep activation records while a licence is active and for a short period afterward for support and fraud prevention. We keep purchase records as long as needed for accounting, tax, and dispute resolution. Support email is kept until it is no longer useful for support.</p>

      <h2>Location of data</h2>
      <p>Rook Works operates in the United States and our service providers store data in the United States and other countries where they operate. If you are outside the United States, using Chimpwriter or buying a licence means your information will be transferred to and processed in the United States.</p>

      <h2>Changes</h2>
      <p>We will update this policy as our practices or the law change, and refresh the date above. Material changes will be noted on this page.</p>

      <h2>Questions</h2>
      <p>Email <a href="mailto:chimpwriter@rook.works">chimpwriter@rook.works</a>.</p>

      <p className="legal-attr">Adapted from the <a href="https://github.com/basecamp/policies">37signals open-source policies</a>, used under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</p>
    </div>
  </main>;
}
