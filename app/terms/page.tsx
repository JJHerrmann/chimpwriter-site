import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Chimpwriter',
  description: 'The terms you agree to when you download or license Chimpwriter.',
};

export default function Terms() {
  return <main className="legal">
    <div className="wrap legal-wrap">
      <a className="legal-back" href="/">← Chimpwriter</a>
      <h1>Terms of Service</h1>
      <p className="legal-date">Last updated: 10 September 2026</p>

      <p>These terms govern your use of <strong>Chimpwriter</strong> — the desktop application and the website at <a href="https://chimpwriter.rook.works">chimpwriter.rook.works</a> — published by <strong>Jacob Herrmann, doing business as Rook Works</strong> ("Rook Works", "we", "us"), a sole proprietorship in the State of [STATE], United States. By downloading, installing, or using Chimpwriter, you agree to these terms. <strong>They contain a limitation of our liability.</strong></p>

      <h2>Licence to use Chimpwriter</h2>
      <ol>
        <li><strong>Free edition.</strong> We grant you a personal, non-exclusive, non-transferable licence to install and use the free edition at no charge, on devices you own or control.</li>
        <li><strong>Pro.</strong> When you purchase Chimpwriter Pro, that licence additionally unlocks the Pro features and is valid on up to <strong>three</strong> activations across devices you own or control. Your licence is verified locally against a signed licence file; you are responsible for keeping your licence key private.</li>
        <li><strong>Restrictions.</strong> You may not resell, rent, sublicense, or redistribute Chimpwriter or licence keys; remove or circumvent the licensing mechanism; or use Chimpwriter to build a competing product. You must be a human — licences obtained by automated means are void.</li>
        <li><strong>Our rights.</strong> Rook Works and its licensors retain all right, title, and interest in Chimpwriter, including the name, branding, website design, and the licensing service. Nothing in these terms transfers those rights to you.</li>
      </ol>

      <h2>Your content</h2>
      <p>Chimpwriter processes your recordings, transcripts, and other files entirely on your own computer. We claim no rights over anything you create with it, and we never receive it. You are solely responsible for having the rights to transcribe or process the material you feed into Chimpwriter, and for how you use the output.</p>

      <h2>Third-party models and services</h2>
      <p>Chimpwriter's optional cleanup step connects to a language-model endpoint that you choose and configure. Any accounts, API keys, fees, rate limits, availability, or output quality of that endpoint are between you and its provider. We are not responsible for third-party services or their results.</p>

      <h2>Payment, refunds, and cancellation</h2>
      <ol>
        <li><strong>Merchant of record.</strong> Purchases are processed by Lemon Squeezy, which is the seller of record and collects and remits applicable taxes.</li>
        <li><strong>Free edition</strong> is free — no card, no trial clock.</li>
        <li><strong>Subscriptions</strong> (monthly or annual) renew automatically until cancelled. You can cancel any time from the customer portal linked in your purchase email. Cancellation stops future charges; Pro keeps working until the end of the period you have already paid for. We do not prorate or refund a partial period on cancellation.</li>
        <li><strong>14-day money-back guarantee.</strong> Email <a href="mailto:chimpwriter@rook.works">chimpwriter@rook.works</a> within 14 days of any purchase for a full refund, no questions asked. Pro access ends when a refund is issued.</li>
        <li><strong>Price changes.</strong> We may change prices. Existing subscribers get at least 30 days' notice by email before a change affects them.</li>
      </ol>

      <h2>Perpetual licence</h2>
      <ol>
        <li>After <strong>365 cumulative days of paid Pro access</strong> (whether via monthly or annual billing), you are issued a signed <strong>certificate</strong> granting a perpetual licence to the major version of Chimpwriter current at that time (for example, 1.x). If you stop paying after that, Pro keeps working for that major version; you simply stop receiving updates.</li>
        <li>The <strong>one-time purchase</strong> grants that perpetual licence for the current major version. The certificate is issued after a short period following purchase (currently up to 60 days) to allow for the refund window; Pro itself works immediately.</li>
        <li>A perpetual licence covers the entire major-version line and its updates. A future major version (for example, 2.x) is a separate, optional paid upgrade.</li>
        <li>A refund requested <strong>before</strong> a perpetual licence has been earned or issued ends Pro access. A refund does <strong>not</strong> revoke a perpetual licence that has already been earned (365 paid days) or issued (a one-time purchase past its refund window).</li>
        <li>A perpetual certificate is a signed file verified on your own machine. It continues to validate even if the licensing service is discontinued.</li>
      </ol>

      <h2>Changes to the software</h2>
      <p>We may modify, add, or discontinue features, and we may end sales of a version. We aim to keep issued perpetual licences working for the major version they cover. Security and licence-validation infrastructure for supported versions will be maintained on a reasonable-effort basis.</p>

      <h2>Warranty disclaimer</h2>
      <p>Chimpwriter is provided <strong>"as is" and "as available"</strong>, without warranty of any kind, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that Chimpwriter will meet your requirements, that transcription or citation output will be accurate or complete, or that the software will be uninterrupted or error-free. You use it at your own risk.</p>

      <h2>Limitation of liability</h2>
      <p><strong>To the maximum extent permitted by law, Rook Works shall not be liable to you or any third party for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, goodwill, or other intangible losses, arising out of or relating to your use of or inability to use Chimpwriter, the results it produces, third-party services you connect to it, or these terms — whether based in contract, tort, negligence, strict liability, or any other theory, and even if we have been advised of the possibility of such damages. Our total liability for any claim arising out of or relating to Chimpwriter or these terms shall not exceed the amount you paid us for Chimpwriter in the twelve months before the event giving rise to the claim, or 50 US dollars, whichever is greater.</strong> Some jurisdictions do not allow certain exclusions; in those places our liability is limited to the smallest extent permitted by law.</p>

      <h2>Termination</h2>
      <p>You may stop using Chimpwriter at any time. We may suspend or terminate a licence if you materially breach these terms — for example, by circumventing the licensing mechanism or reselling keys. Abuse or threats directed at us or anyone assisting us will result in immediate termination. Termination does not entitle you to a refund except as provided above.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of [STATE], United States, without regard to its conflict-of-laws rules. The courts located in that state have exclusive jurisdiction over any dispute that is not resolved informally, and you consent to their jurisdiction.</p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms. When we make a significant change we will refresh the date above and, where practical, notify licence holders by email. Continuing to use Chimpwriter after a change means you accept the updated terms.</p>

      <h2>Contact</h2>
      <p><a href="mailto:chimpwriter@rook.works">chimpwriter@rook.works</a>.</p>

      <p className="legal-attr">Adapted from the <a href="https://github.com/basecamp/policies">37signals open-source policies</a>, used under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</p>
    </div>
  </main>;
}
