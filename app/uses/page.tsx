export const metadata = {
  title: 'Uses',
  description: 'Tools and technologies I use for automation and AI solutions.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 space-y-8 md:px-0">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold md:text-4xl">Tools &amp; Stack</h1>
        <p className="text-base md:text-lg">
          As a Manual Automation &amp; AI Solutions Engineer, I focus on tools that help me replace
          repetitive work with reliable, observable, AI-powered automation.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">Automation &amp; Orchestration</h2>
        <ul className="list-disc space-y-1 pl-5 text-base">
          <li>
            <strong>n8n</strong> – build end-to-end workflows that connect APIs, schedule jobs, and
            power email / notification automations.
          </li>
          <li>
            <strong>Zapier</strong> – quick integrations between SaaS tools for lightweight
            automations and prototypes.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">Languages</h2>
        <ul className="list-disc space-y-1 pl-5 text-base">
          <li>
            <strong>Python</strong> – scripting, data processing, API integrations, and automation
            logic.
          </li>
          <li>
            <strong>JavaScript</strong> – browser automation, small utilities, and front-end logic.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">Browser Automation &amp; Testing</h2>
        <ul className="list-disc space-y-1 pl-5 text-base">
          <li>
            <strong>Puppeteer</strong> – headless Chrome automation for scraping, checks, and UI
            flows.
          </li>
          <li>
            <strong>Selenium</strong> – cross-browser automation for regression flows and end-to-end
            scenarios.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold md:text-2xl">Web &amp; Supporting Stack</h2>
        <ul className="list-disc space-y-1 pl-5 text-base">
          <li>
            <strong>Next.js, React, Tailwind CSS</strong> – build dashboards and UIs on top of
            automation pipelines.
          </li>
          <li>
            <strong>Git, GitHub, REST APIs, JSON</strong> – version control and integrations with
            external services.
          </li>
        </ul>
      </section>
    </main>
  );
}
