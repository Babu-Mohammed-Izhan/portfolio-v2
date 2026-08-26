const Experience = () => {
  const roles = [
    {
      role: 'Senior Full Stack Engineer',
      company: 'SILQ',
      companyUrl: 'https://silq.net',
      period: 'May 2026 — Present · Doha, Qatar',
      points: [
        'Rebuilt the Mowaridi customer app in Flutter as sole engineer — empty repository to feature-complete in five weeks, retiring two separate native codebases: 34 screens, 61 routes, 17 feature modules and Arabic RTL localisation.',
        'Extended the same Flutter codebase to a second brand, Sary, and shipped both applications to the App Store.',
        'Led development of the invoice disclosure admin tracking SAR 195M across 13,857 invoices — per-document pages with linked invoices, document-ID search, OCR row handling, draft-to-invoice conversion and approve/reject gating.',
        'Built the roles and permissions model for the operations dashboard, covering super-admin and ops roles, a permissioned Metabase analytics embed and Arabic support.',
        'Established multi-brand release engineering with a separate Play upload key per brand, QA distribution split into single-app and multi-brand workflows, and QA-triggered TestFlight builds.',
        'Completed a search platform cutover with a database-sourced Typesense backfill, rebuilding a 39,609-document index from PostgreSQL while the Algolia account was unavailable.',
        'Built internal AI development tooling, including an agent that ports a single change into sibling web, iOS and Android repositories.',
        'Mobile applications carry 70% of all marketplace orders at 100% fulfilment and 0.4% cancellation by value.',
      ],
    },
    {
      role: 'Senior Full Stack Engineer',
      company: 'ShopUp',
      companyUrl: 'https://shopup.org',
      period: 'Jun 2025 — Apr 2026 · Bengaluru, India',
      points: [
        'Migrated product search from Algolia to Typesense across a Django monolith with zero downtime — an adapter layer, a dual-write controller and a LaunchDarkly rollback flag; reduced search spend 97%, from $1,396 to $40 per month, across two tenants.',
        'Built AI delivery-area prediction across single, bulk and spreadsheet parcel creation on both frontend and backend, with partial rollout, a per-merchant kill switch and prediction logging.',
        'Delivered customer self-pickup across all three clients — Angular web, Swift on iOS and Kotlin on Android — covering cart, payment, driver selection and order list.',
        'Converted the customer webstore to multi-brand, driving logos, colours, copy and search configuration per brand from a single Angular codebase and avoiding a fork.',
        'Launched ZATCA e-invoicing onboarding behind a LaunchDarkly flag, plus RFQ packages and items in the supplier panel.',
        'Reduced infrastructure and SMS costs by ₹1 lakh per month, blocking automated abuse with rate limiting and bot checks on login and signup.',
        'Established staging CI/CD delivering QA builds to TestFlight, reducing merge-to-testable-build time on real devices.',
      ],
    },
    {
      role: 'Software Development Engineer 1',
      company: 'ShopUp',
      companyUrl: 'https://shopup.org',
      period: 'Jun 2023 — Jun 2025 · Bengaluru, India',
      points: [
        'Built merchant onboarding authentication in React and Redux Toolkit that has securely registered over 50,000 merchants.',
        'Led an authentication migration across 8 Go microservices covering KYC, reconciliation deposits, cash collection and notifications, including RBAC and app-preference migrations.',
        'Designed the gRPC service contract for the product discovery API, authoring the Protocol Buffers schema consumed by Go and Ruby clients.',
        'Owned the shared API package behind a three-app Flutter monorepo, replacing scattered per-screen error handling with a single exception type and a central notification path.',
        'Rebuilt the third-party logistics dashboard in React and Ant Design, raising Google PageSpeed to 90 and reducing initial load time by 2 seconds.',
        'Rolled out automated dependency management with Jira ticket creation across 24 repositories, standardising unit-test and coverage workflows.',
      ],
    },
    {
      role: 'Software Development Engineer, Intern',
      company: 'ShopUp',
      companyUrl: 'https://shopup.org',
      period: 'Aug 2022 — Jun 2023 · Bengaluru, India',
      points: [
        'Delivered merchant features on the RedX web panel (Next.js, Ant Design, Redux Toolkit) and the React Native application, including a notification-banner component shared by both, plus Bangla localisation.',
        'Built the national-ID update flow with a drag-and-drop document uploader, plus agent reconciliation and stagnant-parcel screens in the internal hub operations panel.',
      ],
    },
    {
      role: 'Frontend Developer, Intern',
      company: 'Edustack',
      period: 'Aug 2021 — Nov 2021 · Bengaluru, India',
      points: [
        'Built React and Redux authentication that onboarded 10 schools, with over 2,000 teachers and students registering in a single day.',
        'Rebuilt the LMS dashboard, reducing load time by 2 seconds and improving LCP by 1.5–2 seconds.',
      ],
    },
  ];

  return (
    <section
      className="w-11/12 mx-auto text-black dark:text-white"
      id="experience"
    >
      <div className="mx-auto flex flex-wrap py-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          Experience
        </h1>
        <p className="w-full text-center mt-4">
          <a
            href="https://www.linkedin.com/in/babumohammedizhan"
            className="text-purple-700 dark:text-purple-400 no-underline hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Full history on LinkedIn →
          </a>
        </p>
        <div className="w-10/12 md:w-9/12 mx-auto flex flex-col gap-8 mt-10">
          {roles.map((r) => {
            return (
              <div
                key={`${r.company}-${r.period}`}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                className="bg-white dark:bg-gray-800 rounded-md shadow-lg dark:shadow-none p-6"
              >
                <h2 className="font-bold text-xl">{r.role}</h2>
                {r.companyUrl ? (
                  <a
                    href={r.companyUrl}
                    className="font-semibold text-purple-700 dark:text-purple-400 no-underline hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {r.company}
                  </a>
                ) : (
                  <p className="font-semibold text-purple-700 dark:text-purple-400">
                    {r.company}
                  </p>
                )}
                <p className="text-sm opacity-70 mb-4">{r.period}</p>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  {r.points.map((p) => {
                    return (
                      <li key={p} className="text-base">
                        {p}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
