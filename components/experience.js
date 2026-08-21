const Experience = () => {
  const roles = [
    {
      role: 'Senior Full Stack Engineer',
      company: 'SILQ',
      period: 'May 2026 — Present · Doha, Qatar',
      points: [
        'Sole engineer on the Mowaridi customer app, built in Flutter from an empty repository to production in 10 weeks: 34 screens, 61 routes and 17 feature modules with Arabic RTL support.',
        'The mobile apps now carry 70% of all marketplace orders at 100% fulfilment and 0.4% cancellation by value.',
        'Built the live operations dashboard and invoice disclosure workflows behind it, tracking SAR 195M across 13,857 invoices.',
        'Set up multi-brand Android release engineering, shipping signed builds for two brands from a single Kotlin codebase.',
      ],
    },
    {
      role: 'Senior Full Stack Engineer',
      company: 'ShopUp',
      period: 'Jun 2025 — Apr 2026 · Bengaluru, India',
      points: [
        'Shipped features into both native codebases in parallel, Swift on iOS and Kotlin on Android, while owning release builds and App Store versioning.',
        'Stood up staging CI/CD delivering QA builds to TestFlight, cutting merge-to-testable-build time on real devices.',
        'Built secure cash-flow tracking across logistics hubs handling over ₹5M per month, and cut infrastructure and SMS costs by ₹1 lakh per month with rate limiting and bot checks.',
      ],
    },
    {
      role: 'Frontend Engineer',
      company: 'ShopUp',
      period: 'Jun 2023 — Jun 2025 · Bengaluru, India',
      points: [
        'Built merchant onboarding authentication in React and Redux Toolkit that has securely registered over 50,000 merchants.',
        'Rolled out automated dependency management with Jira ticket creation across 24 repositories and standardised unit-test and coverage workflows.',
        'Designed the gRPC service contract for the product discovery API, authoring the protobuf schema consumed by Go and Ruby clients.',
        'Built and maintained the shared UI framework and React Native component kit used across products.',
      ],
    },
    {
      role: 'Frontend Developer, Intern',
      company: 'Edustack',
      period: 'Aug 2021 — Nov 2021 · Bengaluru, India',
      points: [
        'Built React and Redux authentication that onboarded 10 schools, with over 2,000 teachers and students registering in a single day.',
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
                <p className="font-semibold text-purple-700 dark:text-purple-400">
                  {r.company}
                </p>
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
