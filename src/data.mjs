// ── Kunal Singh — portfolio content data ─────────────────────────────────
// Image keys map to files in assets/img/ (real project covers + shared imagery).

export const IM = (f) => `assets/img/${f}`;

export const IMG = {
  logo: 'yuSBhWzncQQLYrSCf4hrwt1lAA.svg',          // unused — wordmark renders as text now
  circle: 'kFaemw9EZxCk6m3YKTlCmCwJUr4.svg',       // orange ® circle
  tick: 'CzPAA8KcrutTg8kNY1lHbENRc.svg',
  signature: 'CX8WFD6NUa3fzc79lvCzEZaZo.svg',
  quote: '5pXNN0nOEKyuh5SSnsdP1bwaO5M.svg',
  globe: 'tqgXM197t5ZDFG1DAlzGCUj7Qzk.svg',
  coreIcon: 'ZPy0TdYRL1qLmBkkPn8LzAbPuc.svg',
  proIcon: 'GUKyzoGtbPZZB136CVTm1l7vooE.svg',
  chevR: '2OrmE1ODdWjOvroOeBgoXWvvdNQ.svg',
  chevL: 'gxUJuIJwqIX497gqbnUCAFDws.svg',
  chevUp: 'Lh3MWNuiBEGLnUBkP8iQRDgwI.svg',
  backArrow: '6tTbkXggWgQCAJ4DO2QEdXXmgM.svg',
  nextArrow: '11KSGbIZoRSg4pjdnUoif6MKHI.svg',
  heroInk: 'ZONJFsb6qvHbr3qYd9EEQmWTI0.jpg',
  reelVideo: 'JvsYQ6i2XehdtVamXDEovL33lw.mp4',
  reelPoster: '9eQKpPIeztUchjcLRF5ICXXzg.jpg',
  kunalPhoto: 'LV4BkTPj1LQpf0si6qEEQ5Y0pUQ.jpg',    // professional portrait
  kunalSelfie: '0mkemfSXIH4Wf0zC0sFnrpEGM.jpg',    // casual photo
  kunalHero: 'EH7EtyX9fbPEc0XD4XNHeDvo.png',       // dark gradient hero shot
  kLogo: 'vaIrdQ4VOxQoTtPBgMAPtQ8SLVw.png',        // K mark
  adagioShot: '5H6KFTiV6BVRPsYoW8Ks94rgA.png',     // AdagioVR homepage screenshot
  carboneroAlt: '1UHtONHbPEJbPDbYM1tnYSbSU.png',   // Carbonero alt cover
  corePlan: 'PIxpbFpiHq656ZNK0IU4R8BLA.jpg',
  proPlan: 'AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg',
  teamTable: 'XN31s0Ju8VCVbBMDRixiXvZKxfc.jpeg',
  teamOffice: 'ijL9Q3PG9g3R6PTARFjsLesDBU.jpeg',
  teamProject: 'unpcfPKrlRLYdJispJjMEXzbgM.jpeg',
  teamPresent: 'Zl5VwPMnVv9Fdse4ezcp9OQmk.jpeg',
  handCard: 'kMKd9NTvf9O2me1pvCl9a31nIXc.jpg',
  legsLedge: 'dYt9qWfUVyoLg8A9R9c2qRsm1OI.jpeg',
  catHoodie: 'IghUEBaXpIGtCVxOruDBuHtavPA.jpeg',
  manGlasses: 'UP9ORSaaYAEHN06xAtN9IfOZEg.jpeg',
  bwArt: 'm2fx9hnfkcanKhogi1JvDymBSBk.jpeg',
  desert: 'N0lrntiEAPNEks9bTNwgzah6o8.jpeg',
};

// Pinned hero scene (home): video + scattered mosaic of Kunal's project covers
export const MOSAIC = [
  'cyVVsCyvuw1osVe3IFKvXzgokk.png', // Cyberminds
  'UobVxvjFROfmTZ4VO2Qklg8LgE.png', // Everything Culture
  'YGro3KcHQwmDpWuJV4FpfCUVXws.png', // Carbonero
  '1ykOBIshPZJynMCjUubwAbLAx3M.png', // AdagioVR
  'RRiMZYbnv3nAJmJR0BdCcsWG8.png',  // Deep Lure
  'pWnQVJTyAeoEfCLFw2f9W9JhBk.png', // Ignite Now
];

export const SOCIALS = [
  ['WA', 'https://wa.me/916266750520'],
  ['BE', 'https://www.behance.net'],
  ['LI', 'https://www.linkedin.com'],
  ['EMAIL', 'mailto:kusing51@gmail.com'],
];

export const NAV = [
  ['Home', 'index.html'], ['About', 'about.html'], ['Work', 'work.html'],
  ['Journal', 'journal.html'], ['Contact', 'contact.html'],
];

export const LEGAL_LINKS = [
  ['Privacy Policy', 'legal/privacy-policy.html'],
  ['Terms of Service', 'legal/terms-of-service.html'],
  ['Disclaimer', 'legal/disclaimer.html'],
  ['Resume', 'assets/kunal-resume.pdf'],
  ['404', '404.html'],
];

// CTA band marquee — tools as text items
export const TOOLS = ['Figma', 'Framer', 'FigJam', 'Notion', 'Photoshop', 'Illustrator', 'Miro', 'Zeplin'];

// Achievements marquee — brands & companies worked with
export const BRAND_WORDS = ['Cyberminds', 'Everything Culture', 'Carbonero', 'AdagioVR', 'Deep Lure', 'Ignite Now', 'Phimetric', 'Creowis', 'Riverhouse'];

// ── Projects (6) ─────────────────────────────────────────────────────────
// img tuples: [file, alt, object-position?]
export const PROJECTS = [
  {
    slug: 'cyberminds',
    name: 'Cyberminds',
    tagline: 'Master cybersecurity through interactive learning',
    category: 'Mobile App Design',
    services: ['Mobile Design', 'User Experience', 'Prototyping'],
    client: 'Self-initiated',
    date: 'January 2025',
    timeframe: '10 weeks',
    tech: ['Figma', 'Prototyping', 'Gamification', 'Mobile UX'],
    blurb: 'An educational platform designed to teach cybersecurity concepts to students in a gamified manner — engaging, interactive, and accessible to all skill levels.',
    cover: 'cyVVsCyvuw1osVe3IFKvXzgokk.png',
    coverAlt: 'Cyberminds app screens',
    link: 'https://www.behance.net/gallery/225507547/Cyberminds',
    overview: [
      'Cyberminds reimagines cybersecurity education as a game. Instead of dense textbooks and passive video courses, students progress through interactive missions, challenges and streaks that make learning security concepts genuinely engaging.',
      'The goal was to make cybersecurity accessible to students of all skill levels — from beginners learning what phishing is, to advanced learners practicing real attack-and-defence scenarios. The app balances education with motivation through progression systems designed around how students actually learn.'],
    overviewImgs: [['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds case study cover', '50% 15%'], ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds mobile screens', '50% 80%']],
    challenge: 'Cybersecurity education suffers from low engagement — traditional courses are dense, intimidating and hard to finish. Students abandon courses early, and gamified competitors often sacrifice educational depth for entertainment value.',
    challengeImgs: [['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds UI detail', '15% 30%'], ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds screens', '85% 30%'], ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds interface', '50% 55%']],
    challengeAfter: 'The product needed to keep students motivated over weeks of learning while still teaching real, transferable security skills — a balance of fun and rigour that most edtech fails to achieve.',
    solution: 'I designed a mission-based learning system where concepts unlock progressively, reinforced by interactive challenges, streaks and a clear skill map. Each module pairs a short lesson with a hands-on scenario so learners practise instead of just reading.',
    solutionImgs: [['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds app detail', '20% 70%'], ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds design', '80% 60%'], ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds design system', '50% 40%']],
    solutionAfter: 'The visual language leans into the cybersecurity theme — dark, electric and energetic — while staying friendly enough for younger students. A full component library keeps the system consistent across missions and future content.',
    results: 'Cyberminds demonstrates how gamification can carry real educational weight. The prototype validated the concept through usability testing, and the case study showcases the full process from research to high-fidelity screens.',
        resultsImg: ['cyVVsCyvuw1osVe3IFKvXzgokk.png', 'Cyberminds screens', '50% 85%'],
    stats: [['Usability Score', 'Improvement across testing rounds', '34%'], ['Engagement', 'Students completing trial modules', '78%'], ['Prototype', 'Interactive screens designed', '40+']],
    statsAfter: 'The full case study — research, flows, wireframes and final screens — is available on Behance.',
    final: 'Cyberminds shows the design direction I care about most: taking a complex, intimidating subject and making it approachable through structure, play and clear information hierarchy.',
    credits: [['Kunal Singh', 'UX Design & Research'], ['Kunal Singh', 'Visual Design'], ['Kunal Singh', 'Prototyping']],
    next: 'everything-culture',
  },
  {
    slug: 'everything-culture',
    name: 'Everything Culture',
    tagline: 'Building a company review platform people can trust',
    category: 'Web Design',
    services: ['Web Design', 'User Experience', 'UX Research'],
    client: 'Self-initiated',
    date: 'February 2025',
    timeframe: '12 weeks',
    tech: ['Figma', 'UX Research', 'Information Architecture', 'Web UX'],
    blurb: 'A platform providing team-level insights into workplace dynamics and leadership — helping professionals make informed career decisions through candid feedback from current and former team members.',
    cover: 'UobVxvjFROfmTZ4VO2Qklg8LgE.png',
    coverAlt: 'Everything Culture web platform',
    link: 'https://www.behance.net/gallery/226144105/Everything-Culture',
    overview: [
      'Everything Culture answers a question every job-seeker has but few platforms answer honestly: "what is it actually like to work in this specific team?" Company-wide ratings hide team-level reality, so this platform surfaces dynamics at the team and leadership level.',
      'The design centres on trust — how reviews are written, moderated and presented. A carefully structured review flow keeps feedback candid but constructive, while the browsing experience helps candidates evaluate fit before they apply.'],
    overviewImgs: [['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture cover', '50% 15%'], ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture screens', '50% 80%']],
    challenge: 'Existing review platforms aggregate sentiment at the company level — too broad to be useful. Candidates need insight into the team they\'d actually join, and existing tools either lack that granularity or feel untrustworthy and unmoderated.',
    challengeImgs: [['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture UI', '15% 30%'], ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture detail', '85% 30%'], ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture layout', '50% 60%']],
    challengeAfter: 'The deeper problem was credibility: anonymous reviews skew negative, while verified-only systems chill honesty. The platform had to balance anonymity with accountability.',
    solution: 'I designed a structured review system that guides users toward balanced feedback — rating dimensions like leadership, communication and growth separately rather than one vague score. Team-level pages aggregate these dimensions into a clear culture profile.',
    solutionImgs: [['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture interface', '20% 75%'], ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture design', '80% 70%'], ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture system', '50% 45%']],
    solutionAfter: 'The visual identity uses a confident purple palette with generous white space — trustworthy and modern without feeling corporate. Typography carries most of the hierarchy so data stays readable.',
    results: 'The concept reframes employer review as decision support rather than complaint board. The structured approach produces more actionable insight per review and a cleaner browsing experience.',
        resultsImg: ['UobVxvjFROfmTZ4VO2Qklg8LgE.png', 'Everything Culture', '50% 85%'],
    stats: [['Review Depth', 'Dimensions captured per review', '5'], ['Flow Efficiency', 'Shorter time to submit a review', '40%'], ['Research', 'Professional workflows mapped', '12']],
    statsAfter: 'The complete case study, including research findings and the full screen set, is live on Behance.',
    final: 'Everything Culture is about honest design — building systems that encourage useful truth-telling while protecting the people who share it.',
    credits: [['Kunal Singh', 'UX Design & Research'], ['Kunal Singh', 'Information Architecture'], ['Kunal Singh', 'Visual Design']],
    prev: 'cyberminds', next: 'carbonero',
  },
  {
    slug: 'carbonero',
    name: 'Carbonero',
    tagline: 'Turning emissions into solutions',
    category: 'Web Design',
    services: ['Web Design', 'User Experience', 'Product Design'],
    client: 'Self-initiated',
    date: 'March 2025',
    timeframe: '9 weeks',
    tech: ['Figma', 'Web UX', 'Marketplace Design', 'Data Viz'],
    blurb: 'A web app that lets users easily list, buy and track verified carbon credits — with built-in proof of ownership and retirement to support real, trustworthy climate impact.',
    cover: 'YGro3KcHQwmDpWuJV4FpfCUVXws.png',
    coverAlt: 'Carbonero carbon credit marketplace',
    link: 'https://www.behance.net/gallery/227699441/Carbonero',
    overview: [
      'Carbonero makes carbon offsetting understandable and trustworthy. Users can browse verified carbon credit projects, purchase credits, and track exactly where their money goes — including proof of retirement so impact is real, not claimed.',
      'The marketplace model needed to serve two audiences: project owners listing credits and buyers looking to offset. Both flows were designed around transparency — every credit carries its certification and ownership history.'],
    overviewImgs: [['YGro3KcHQwmDpWuJV4FpfCUVXws.png', 'Carbonero cover', '50% 15%'], ['1UHtONHbPEJbPDbYM1tnYSbSU.png', 'Carbonero platform', '50% 50%']],
    challenge: 'Carbon credit markets are opaque and full of jargon. Buyers distrust credits they can\'t verify, while smaller project owners struggle to reach buyers. Existing platforms feel built for institutions, not people.',
    challengeImgs: [['YGro3KcHQwmDpWuJV4FpfCUVXws.png', 'Carbonero UI', '15% 35%'], ['1UHtONHbPEJbPDbYM1tnYSbSU.png', 'Carbonero detail', '85% 30%'], ['YGro3KcHQwmDpWuJV4FpfCUVXws.png', 'Carbonero screens', '50% 65%']],
    challengeAfter: 'The key design problem: how do you make "did my money actually remove carbon?" legible to a non-expert — without drowning them in certification minutiae?',
    solution: 'I designed a credit profile that translates certification data into plain language — what the project does, where it is, and its verification status at a glance. Purchase flows lead with impact summaries, and a personal dashboard tracks ownership and retirement over time.',
    solutionImgs: [['YGro3KcHQwmDpWuJV4FpfCUVXws.png', 'Carbonero interface', '20% 75%'], ['1UHtONHbPEJbPDbYM1tnYSbSU.png', 'Carbonero design', '80% 70%'], ['YGro3KcHQwmDpWuJV4FpfCUVXws.png', 'Carbonero system', '50% 45%']],
    solutionAfter: 'The green-forward identity keeps the product feeling ecological and optimistic, while data-heavy screens stay disciplined through a strict type and spacing system.',
    results: 'Carbonero demonstrates how transparency-first UX can make a complex market approachable — turning trust from a promise into an interface feature.',
        resultsImg: ['1UHtONHbPEJbPDbYM1tnYSbSU.png', 'Carbonero platform', '50% 60%'],
    stats: [['Flows Designed', 'End-to-end marketplace journeys', '6'], ['Clarity', 'Users could explain credit retirement', '85%'], ['Screens', 'High-fidelity views delivered', '30+']],
    statsAfter: 'The full case study with research and all screens is available on Behance.',
    final: 'Good climate tech starts with trust. Carbonero was an exercise in designing credibility into every screen.',
    credits: [['Kunal Singh', 'UX Design & Research'], ['Kunal Singh', 'Visual Design'], ['Kunal Singh', 'Prototyping']],
    prev: 'everything-culture', next: 'adagiovr',
  },
  {
    slug: 'adagiovr',
    name: 'AdagioVR',
    tagline: 'VR-based mental wellbeing, designed to feel safe',
    category: 'Web & Product Design',
    services: ['Web Design', 'User Experience', 'Brand Design'],
    client: 'AdagioVR',
    date: '2025',
    timeframe: '14 weeks',
    tech: ['Figma', 'Framer', 'Health Tech UX', 'Webflow Thinking'],
    blurb: 'A VR-based mental-wellbeing platform that uses immersive therapy to help people overcome stress, anxiety, phobias and build high-performance habits.',
    cover: '1ykOBIshPZJynMCjUubwAbLAx3M.png',
    coverAlt: 'AdagioVR website',
    link: 'https://adagiovr.com/',
    overview: [
      'AdagioVR is a real, live product — a mental-wellbeing platform using virtual reality for immersive therapy. I designed the web experience that introduces the product, explains its approach and converts visitors into users.',
      'Mental health products carry a special design burden: they must feel safe, credible and calm before a user commits. The site balances clinical trustworthiness with the warmth a wellbeing product needs.'],
    overviewImgs: [['1ykOBIshPZJynMCjUubwAbLAx3M.png', 'AdagioVR case study cover', '50% 15%'], ['5H6KFTiV6BVRPsYoW8Ks94rgA.png', 'AdagioVR homepage', '50% 50%']],
    challenge: 'Mental-health platforms face a credibility gap — visitors arrive sceptical and anxious. The site needed to explain an unfamiliar technology (VR therapy) without hype, while making the first step feel easy and safe.',
    challengeImgs: [['1ykOBIshPZJynMCjUubwAbLAx3M.png', 'AdagioVR UI', '15% 35%'], ['5H6KFTiV6BVRPsYoW8Ks94rgA.png', 'AdagioVR design detail', '50% 30%'], ['1ykOBIshPZJynMCjUubwAbLAx3M.png', 'AdagioVR screens', '50% 70%']],
    challengeAfter: 'Beyond comprehension, the design had to handle emotional weight — many visitors arrive in distress. Every interaction needed to reduce friction and anxiety rather than add to it.',
    solution: 'I designed a calm, editorial page structure that introduces the therapy gradually — what it is, who it helps, how it works — before any call to action. Soft colour, generous spacing and patient pacing make the product feel like the experience it promises.',
    solutionImgs: [['1ykOBIshPZJynMCjUubwAbLAx3M.png', 'AdagioVR interface', '20% 75%'], ['5H6KFTiV6BVRPsYoW8Ks94rgA.png', 'AdagioVR website detail', '50% 70%'], ['1ykOBIshPZJynMCjUubwAbLAx3M.png', 'AdagioVR system', '50% 45%']],
    solutionAfter: 'The site was built and shipped — it is live at adagiovr.com today, serving as the product\'s primary public face.',
    results: 'The launched site gives AdagioVR a credible digital home — communicating a novel therapy clearly enough that visitors understand and trust it within one scroll.',
        resultsImg: ['5H6KFTiV6BVRPsYoW8Ks94rgA.png', 'AdagioVR live site', '50% 55%'],
    stats: [['Launch', 'Site live in production', '100%'], ['Clarity', 'Visitors understanding the offer in testing', '82%'], ['Sections', 'Designed & shipped', '15']],
    statsAfter: 'Visit the live product at adagiovr.com.',
    final: 'AdagioVR taught me that some products need design to be quiet — that calm is itself a feature.',
    credits: [['Kunal Singh', 'UX & Visual Design'], ['Rohan Malhotra', 'Founder, AdagioVR'], ['Phimetric', 'Studio Collaboration']],
    prev: 'carbonero', next: 'deep-lure',
  },
  {
    slug: 'deep-lure',
    name: 'Deep Lure',
    tagline: 'A next-gen image editor powered by AI',
    category: 'Product Design',
    services: ['Product Design', 'UI Design', 'Web Design'],
    client: 'Phimetric',
    date: '2025',
    timeframe: '8 weeks',
    tech: ['Figma', 'UI Design', 'AI Tool UX', 'Editor Workflows'],
    blurb: 'A next-generation image editor that uses AI to understand and transform visuals with precision — powerful tools wrapped in an interface professionals actually enjoy.',
    cover: 'RRiMZYbnv3nAJmJR0BdCcsWG8.png',
    coverAlt: 'Deep Lure editor interface',
    link: 'https://www.behance.net',
    overview: [
      'Deep Lure brings AI-driven editing to a professional-grade image tool. The design challenge: dense functionality, exposed cleanly — an interface that feels powerful on first use, not overwhelming.',
      'The editor organises tools around intent (enhance, transform, generate) rather than technical function, so users describe what they want to achieve and the interface surfaces the right capability.'],
    overviewImgs: [['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure cover', '50% 15%'], ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure screens', '50% 80%']],
    challenge: 'Image editors accumulate complexity — every new AI feature risks another buried menu. The product needed to expose genuinely novel capability while remaining faster to learn than established tools.',
    challengeImgs: [['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure UI', '15% 35%'], ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure detail', '85% 35%'], ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure layout', '50% 65%']],
    challengeAfter: 'The hard part wasn\'t the AI — it was making non-deterministic results feel controllable and reviewable inside a professional workflow.',
    solution: 'I designed an intent-first toolbar with progressive disclosure: core edits stay one click deep, while AI operations open focused panels with preview, history and fine control. A layered sidebar keeps the canvas as the visual centre at all times.',
    solutionImgs: [['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure interface', '20% 75%'], ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure design', '80% 70%'], ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure system', '50% 45%']],
    solutionAfter: 'A dark, cinema-style interface keeps focus on the image itself — UI chrome recedes so colours and edits read accurately.',
    results: 'Deep Lure shows how AI features can be integrated without breaking established editing mental models — innovation that respects the craft.',
        resultsImg: ['RRiMZYbnv3nAJmJR0BdCcsWG8.png', 'Deep Lure', '50% 80%'],
    stats: [['Tool Areas', 'Core workflow zones designed', '4'], ['AI Flows', 'Generation & transform paths', '8'], ['Depth', 'Max clicks to any AI feature', '2']],
    statsAfter: 'Designed with the Phimetric studio team.',
    final: 'Deep Lure reinforced a principle I keep returning to: powerful tools earn complexity by hiding it well.',
    credits: [['Kunal Singh', 'UI/UX Design'], ['Phimetric', 'Studio Collaboration']],
    prev: 'adagiovr', next: 'ignite-now',
  },
  {
    slug: 'ignite-now',
    name: 'Ignite Now',
    tagline: 'AI-powered transformation plans in under 24 hours',
    category: 'Web Design',
    services: ['Web Design', 'User Experience', 'AI Product UX'],
    client: 'Phimetric',
    date: '2025',
    timeframe: '6 weeks',
    tech: ['Figma', 'Web UX', 'AI Workflows', 'Landing Design'],
    blurb: 'A fast, AI-powered way for businesses to plan their transformation in under 24 hours — turning a vague ambition into a structured, actionable roadmap.',
    cover: 'pWnQVJTyAeoEfCLFw2f9W9JhBk.png',
    coverAlt: 'Ignite Now platform',
    link: 'https://www.behance.net',
    overview: [
      'Ignite Now sells speed: a business transformation plan generated by AI within a day. The site\'s job is to make "24 hours" feel credible rather than gimmicky — showing enough process that the promise lands.',
      'The design uses a deep blue, confident palette with energetic motion — fast and premium, matching a product whose entire pitch is velocity.'],
    overviewImgs: [['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now cover', '50% 15%'], ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now screens', '50% 80%']],
    challenge: '"A plan in 24 hours" reads as over-promising. The site needed to convert scepticism into curiosity — explaining what the AI does, what the human experts add, and what a customer actually receives.',
    challengeImgs: [['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now UI', '15% 35%'], ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now detail', '85% 35%'], ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now layout', '50% 65%']],
    challengeAfter: 'The flow had to feel effortless up front (a short intake, one payment) while hinting at the depth waiting on the other side.',
    solution: 'I structured the page as a proof sequence: promise → process → sample output → social proof → CTA. A visual timeline shows what happens in those 24 hours, demystifying the AI\'s role and setting honest expectations.',
    solutionImgs: [['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now interface', '20% 75%'], ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now design', '80% 70%'], ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now system', '50% 45%']],
    solutionAfter: 'Sharp, dark styling with electric accents sells speed and intelligence; the content structure sells trust.',
    results: 'Ignite Now got a launch-ready presence that makes a bold promise feel structured and believable.',
        resultsImg: ['pWnQVJTyAeoEfCLFw2f9W9JhBk.png', 'Ignite Now', '50% 80%'],
    stats: [['Intake', 'Questions before generation', '6'], ['Turnaround', 'Promised plan delivery', '24h'], ['Sections', 'Conversion flow blocks', '5']],
    statsAfter: 'Designed with the Phimetric studio team.',
    final: 'When a product sells speed, design\'s job is to make speed believable. Ignite Now does that by showing its working.',
    credits: [['Kunal Singh', 'UX & Visual Design'], ['Phimetric', 'Studio Collaboration']],
    prev: 'deep-lure', next: 'cyberminds',
  },
];

export const CATEGORIES = ['Mobile Design', 'Web Design', 'User Experience', 'Product Design', 'Prototyping', 'Framer Development'];

// ── Journal articles (6) ─────────────────────────────────────────────────
export const ARTICLES = [
  {
    slug: 'the-evolution-of-micro-interactions-in-2025',
    title: 'The Evolution of Micro-Interactions',
    sub: 'Small animations, big impact: how subtle movements shape user experience',
    date: 'Wednesday, February 26, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: 'zXlDZ1dgrl8tuApqqAo8e6Utumo.jpeg',
    card: 'zXlDZ1dgrl8tuApqqAo8e6Utumo.jpeg',
    intro: 'Digital experiences are becoming increasingly nuanced, with micro-interactions playing a crucial role in how users engage with interfaces. These tiny, purposeful animations do more than just delight—they provide essential feedback, guide user behavior, and create memorable experiences that keep users coming back.',
    midImg: 'EgtonaJYDvFaTHIdHN6xXZ7yg.jpeg',
    sections: [
      ['The Power of Subtle Feedback', ['Micro-interactions have evolved from simple hover states to sophisticated, context-aware animations that respond to user behavior. Today\'s successful digital products use these subtle movements to communicate status, confirm actions, and guide users through complex interactions. The key lies in finding the perfect balance between functionality and delight.', 'Modern micro-interactions incorporate haptic feedback, sound, and motion to create multi-sensory experiences. These elements work together to make interfaces feel more responsive and alive, while providing crucial feedback that helps users understand the results of their actions.']],
      ['Implementation Strategy', ['The most effective micro-interactions are those that users barely notice but would miss if they were gone. They should feel natural and intuitive, enhancing the user experience without calling attention to themselves. This requires careful consideration of timing, easing, and context.']],
    ],
    bestPractices: ['Keep animations under 400ms', 'Ensure consistency across platforms', 'Test performance impact', 'Consider reduced motion preferences', 'Maintain purposeful design'],
    afterList: 'Successful micro-interactions require collaboration between designers, developers, and UX researchers to ensure they enhance rather than hinder the user experience. When done right, they become an integral part of the product\'s personality and user experience strategy.',
    takeaways: ['Enhances user engagement by 34%', 'Reduces user error rates', 'Improves interface learnability', 'Strengthens brand personality', 'Increases user satisfaction metrics'],
    endImg: 'e2sfmaFqMNpyslgq4hZwrnEYiw.jpeg',
    next: 'design-systems-the-bridge-between-creativity-and-consistency',
  },
  {
    slug: 'design-systems-the-bridge-between-creativity-and-consistency',
    title: 'Creativity and Consistency',
    sub: 'How modern design systems are reshaping brand experiences',
    date: 'Tuesday, February 25, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: 'ksOW7K4psADT1hEhnBj9nwnmGE.jpeg',
    card: 'ksOW7K4psADT1hEhnBj9nwnmGE.jpeg',
    intro: 'In today\'s fast-paced digital landscape, design systems have become the backbone of successful product development. They\'re not just a trend—they\'re a fundamental shift in how we approach digital design and development. As organizations scale their digital presence, the need for systematic, efficient, and consistent design practices has never been more critical.',
    midImg: 'opNRRVfvLgcIjnQlBNMCDq7B9R0.jpeg',
    sections: [
      ['Understanding Design Systems', ['Design systems have evolved beyond simple style guides and pattern libraries. Today, they serve as the foundation of digital product development, enabling teams to work faster and smarter. By providing a single source of truth for design decisions, these systems help organizations scale their digital presence while maintaining brand consistency.', 'Modern design systems include not just visual elements but also design principles, component libraries, and documentation. They act as a bridge between designers and developers, streamlining the implementation process and reducing the time from concept to deployment. This systematic approach allows teams to focus on solving unique challenges rather than rebuilding common elements.']],
      ['Impact on Business Growth', ['The business impact of a well-implemented design system extends far beyond visual consistency. Organizations using design systems report significant improvements in development speed, with some teams seeing up to 50% reduction in design-to-development time. This efficiency translates directly to cost savings and faster time-to-market for new features and products.']],
    ],
    bestPractices: ['Start with core components', 'Document everything', 'Plan for scalability', 'Regular maintenance and updates', 'Include accessibility guidelines'],
    afterList: 'Moreover, design systems facilitate better collaboration between teams. When designers and developers speak the same language and work from the same component library, projects move forward more smoothly. This alignment reduces miscommunication, minimizes revisions, and ultimately leads to better digital products.',
    takeaways: ['Reduces development time by up to 50%', 'Streamlines designer-developer collaboration', 'Ensures brand consistency across platforms', 'Scales design operations efficiently', 'Improves product quality and speed to market'],
    endImg: 'DjbSXlq8k8qRjSDOtwhzSP9I00w.jpg',
    prev: 'the-evolution-of-micro-interactions-in-2025', next: 'ai-driven-design-beyond-the-basics',
  },
  {
    slug: 'ai-driven-design-beyond-the-basics',
    title: 'AI-Driven Design',
    sub: 'How artificial intelligence is transforming the creative process',
    date: 'Tuesday, February 4, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: '9Z5aXfRedzw4zQn06M31oVPQ8.jpg',
    card: '9Z5aXfRedzw4zQn06M31oVPQ8.jpg',
    intro: 'Artificial intelligence is no longer a futuristic concept in design—it\'s a practical tool reshaping how we create, iterate, and deliver digital experiences. From generating design variations to predicting user behavior, AI is becoming an indispensable part of the modern designer\'s toolkit. But beyond the hype, what does AI-driven design actually look like in practice?',
    midImg: 'QWsGysP0E5zaNsPhd1kurrtUhg.jpeg',
    sections: [
      ['Where AI Adds Value', ['AI excels at augmenting designer capabilities rather than replacing them. In the ideation phase, AI tools can generate dozens of layout variations in seconds, giving designers a broader palette of directions to explore. This rapid prototyping capability accelerates the early stages of design, where exploring multiple concepts traditionally consumed significant time.', 'Perhaps most importantly, AI helps bridge the gap between design and data. By analyzing user behavior patterns, AI can suggest design adjustments that improve conversion rates, accessibility, and user satisfaction—turning design decisions from subjective preferences into informed choices.']],
      ['Human Creativity Remains Central', ['The most successful AI-driven design workflows maintain a clear division of labor: AI handles repetitive tasks and data analysis, while designers focus on creative strategy, emotional resonance, and contextual understanding. This partnership amplifies human creativity rather than diminishing it.']],
    ],
    bestPractices: ['Use AI for iteration, not final decisions', 'Maintain human oversight on brand-critical elements', 'Test AI-generated designs with real users', 'Keep accessibility standards non-negotiable', 'Document AI tool usage transparently'],
    afterList: 'AI-driven design isn\'t about replacing designers—it\'s about giving them superpowers. The best outcomes emerge when designers treat AI as a collaborative tool that expands their capabilities while they focus on the nuanced, contextual, and emotional aspects of design that machines can\'t replicate.',
    takeaways: ['AI accelerates iteration without replacing creativity', 'Data-informed design improves user outcomes', 'Human oversight ensures quality and ethics', 'Transparency builds trust in AI workflows', 'Continuous learning maximizes AI benefits'],
    endImg: 'EgtonaJYDvFaTHIdHN6xXZ7yg.jpeg',
    prev: 'design-systems-the-bridge-between-creativity-and-consistency', next: 'typography-trends-reshaping-digital-experiences',
  },
  {
    slug: 'typography-trends-reshaping-digital-experiences',
    title: 'Typography Trends',
    sub: 'How modern typefaces are transforming digital communication',
    date: 'Tuesday, January 28, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: 'fhzk6SLsvsdAQCWSJfM5OXQTERg.png',
    card: 'fhzk6SLsvsdAQCWSJfM5OXQTERg.png',
    intro: 'Typography has always been the silent workhorse of design, but recent innovations in variable fonts, responsive type systems, and expressive display faces are elevating type from supporting element to starring role. As screens become our primary reading environment, typography is evolving to meet new technical demands while rediscovering its expressive potential.',
    midImg: 'kEN8Z3RmSIaUolb0SFQR5nLtDc.png',
    sections: [
      ['Variable Fonts and Responsive Type', ['Variable fonts have moved from experimental technology to production standard. By allowing continuous adjustment along axes like weight, width, and optical size, they enable typography that responds fluidly to viewport changes, user preferences, and content hierarchy—without loading multiple font files.', 'Responsive type systems take this further, treating typography as a dynamic component that adapts to context. Font sizes that scale with container queries, line lengths that optimize for readability, and type scales that adjust for accessibility needs are becoming standard practice in modern design systems.']],
      ['The Return of Expressive Type', ['After years of minimalist sans-serif dominance, designers are rediscovering the power of expressive typography. Custom display faces, hand-drawn letterforms, and bold experimental type are appearing in digital products, bringing personality and memorability to brand experiences.']],
    ],
    bestPractices: ['Prioritize readability over trend', 'Test type across devices and contexts', 'Use variable fonts for performance', 'Maintain accessible contrast ratios', 'Design a type system, not just type choices'],
    afterList: 'Typography is experiencing a renaissance driven by technical capability and creative ambition. The designers who understand both the expressive potential and the technical constraints of modern type will create the most compelling digital experiences of the next decade.',
    takeaways: ['Variable fonts enable responsive typography', 'Expressive type returns to digital design', 'Accessibility must guide type decisions', 'Type systems beat individual type choices', 'Context-aware type improves readability'],
    endImg: 'fhzk6SLsvsdAQCWSJfM5OXQTERg.png',
    prev: 'ai-driven-design-beyond-the-basics', next: 'sustainable-design-digital-ecology-in-practice',
  },
  {
    slug: 'sustainable-design-digital-ecology-in-practice',
    title: 'Sustainable Design',
    sub: 'How digital products can reduce their environmental footprint',
    date: 'Tuesday, January 21, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: 'rqCVfLnFzHvBhssFlJGSeSIff4U.jpeg',
    card: 'rqCVfLnFzHvBhssFlJGSeSIff4U.jpeg',
    intro: 'Sustainability in digital design is often overlooked—after all, software doesn\'t consume physical resources like products do. But every digital experience has a carbon footprint: data centers consume energy, devices require charging, and inefficient code wastes electricity. As designers and developers, we have both the opportunity and responsibility to build greener digital products.',
    midImg: '9ckn2rzeQnsXbbEG34qq4tqjDhE.jpeg',
    sections: [
      ['The Hidden Cost of Digital', ['Every page load, every image, every animation consumes energy. Multiply that by billions of users and the environmental impact becomes significant. Studies estimate that digital technologies account for 2-4% of global greenhouse gas emissions—comparable to the aviation industry. Yet most digital products are designed without considering their energy footprint.', 'Sustainable design addresses this through efficiency: optimizing assets, minimizing data transfer, choosing efficient rendering techniques, and designing experiences that achieve goals with less code and fewer resources.']],
      ['Design Decisions That Matter', ['Color choices affect energy consumption—dark mode can reduce battery drain on OLED screens by up to 40%. Image optimization, lazy loading, and efficient code reduce data transfer and processing requirements. Even UX decisions matter: intuitive flows reduce user time-on-task, lowering the energy cost per interaction.']],
    ],
    bestPractices: ['Optimize images and use modern formats', 'Implement dark mode for OLED efficiency', 'Minimize JavaScript and animation complexity', 'Choose green hosting providers', 'Design for longevity over novelty'],
    afterList: 'Sustainable design isn\'t about sacrifice—it\'s about intention. Efficient code runs faster, optimized assets load quicker, and thoughtful design creates better experiences. The environmental benefits are a bonus to already-good engineering and design practice.',
    takeaways: ['Digital products have real environmental impact', 'Efficiency improves performance and sustainability', 'Dark mode and optimization reduce energy use', 'Sustainable choices often mean better UX', 'Every design decision has an environmental cost'],
    endImg: 'rqCVfLnFzHvBhssFlJGSeSIff4U.jpeg',
    prev: 'typography-trends-reshaping-digital-experiences', next: 'the-rise-of-subscription-based-design',
  },
  {
    slug: 'the-rise-of-subscription-based-design',
    title: 'Subscription Design',
    sub: 'Why the subscription model is transforming creative services',
    date: 'Tuesday, January 14, 2025',
    author: 'Kunal Singh',
    role: 'UX Designer',
    hero: 'IBM5TuphV3SFeoHj0Sc93XmRAjY.jpeg',
    card: 'IBM5TuphV3SFeoHj0Sc93XmRAjY.jpeg',
    intro: 'The subscription economy has transformed software, entertainment, and even physical products. Now it\'s reshaping creative services. Instead of project-based engagements with unpredictable costs and timelines, subscription design offers continuous access to design expertise for a flat monthly fee. This model is gaining traction among startups and established companies alike.',
    midImg: 'QYxsjTsjYGmf2RuhxQWuIHTw2WQ.jpeg',
    sections: [
      ['Why Subscriptions Work', ['Traditional agency relationships involve lengthy procurement processes, scope negotiations, and unpredictable invoicing. Subscription design eliminates this friction: clients pay a predictable monthly fee and submit requests as needed. For businesses with ongoing design needs—marketing materials, product iterations, content creation—this model provides cost certainty and faster turnaround.', 'For designers, subscriptions offer stable income and deeper client relationships. Working continuously with the same brand builds context that produces better work faster, eliminating the ramp-up time that plagues project-based engagements.']],
      ['Challenges and Considerations', ['Subscription design isn\'t universally superior. Very large projects may still benefit from dedicated project teams, and clients with sporadic needs might find subscriptions wasteful. The model works best when both parties understand its constraints and communicate expectations clearly.']],
    ],
    bestPractices: ['Define clear scope and deliverable expectations', 'Establish efficient request and feedback processes', 'Maintain consistent communication', 'Track time and value transparently', 'Review and adjust the subscription regularly'],
    afterList: 'Subscription design represents a maturation of the creative services market. As businesses increasingly view design as an ongoing need rather than a one-time purchase, models that support continuous collaboration will continue to grow.',
    takeaways: ['Subscriptions provide cost predictability', 'Continuous relationships improve design quality', 'Clear processes prevent scope creep', 'Not every project fits the subscription model', 'Communication is essential to success'],
    endImg: 'IBM5TuphV3SFeoHj0Sc93XmRAjY.jpeg',
    prev: 'sustainable-design-digital-ecology-in-practice',
  },
];

// 7th card shown in "More articles" grids
export const NEW_WAVE_CARD = {
  title: 'The New Wave of Design Animation',
  sub: 'How motion design is transforming user interfaces in 2025',
  date: 'Thursday, December 19, 2024',
  author: 'Kunal Singh',
  img: 'J4hPBh76v0HS3m5ufHg6VjLqo0M.jpeg',
  href: 'journal.html',
};

// ── Home ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  ['{01}', 'UX Design & Research —', 'I uncover what users actually need through research and testing, then translate those insights into experiences that feel effortless.', ['User Research', 'Usability Testing', 'User Psychology', 'User Flows', 'Journey Mapping', 'Wireframing']],
  ['{02}', 'Visual & Interaction —', 'I craft clean, engaging interfaces and meaningful interactions that bring products to life and keep people coming back.', ['Interaction Design', 'UI Design', 'Story-Telling', 'Art Direction', 'Prototyping', 'Micro-interactions']],
  ['{03}', 'Systems & Framer —', 'I build scalable design systems and ship polished, animated sites — from component libraries to live Framer builds.', ['Design Systems', 'Component Libraries', 'Framer Development', 'Design Ops', 'Dev Handoff', 'Documentation']],
];

export const SNAPSHOT = [
  ['Projects Shipped', '6+'], ['Companies Worked With', '3'],
  ['Behance Case Studies', '3'], ['Happy Collaborators', '8+'],
  ['Cups of chai per design sprint', '21'],
];

export const FAQS = [
  ['Are you open to work right now?', 'Yes — I\'m open to freelance projects, contract work and full-time UX roles. Email me at kusing51@gmail.com and I\'ll reply within 24 hours.'],
  ['What does your design process look like?', 'Discover → Research → Design → Prototype → Test → Handoff. I start with the problem, not the pixels, and iterate on real feedback at every stage.'],
  ['How long does a typical project take?', 'A focused screen or landing page runs 1–2 weeks. A full product UX case study or site redesign typically takes 4–8 weeks depending on scope.'],
  ['What tools do you work with?', 'Figma for design and prototyping, Framer for shipping sites, FigJam and Notion for process — plus a growing toolkit for motion and 3D when the project calls for it.'],
  ['Do you work remotely?', 'I\'m based in India and work remotely across time zones — most collaboration happens async with regular check-ins in your timezone.'],
  ['Can I see your resume?', 'Absolutely — there\'s a resume link in the menu and a download button pinned at the bottom-right of every page.'],
];

export const TESTIMONIALS = [
  { quote: 'The team delivered a clean, modern website with an impressively smooth process. Communication was clear throughout, and the final outcome exceeded our expectations.', name: 'Rohan Malhotra', role: 'Founder', company: 'AdagioVR', img: 'LQE9zAV3E0j3FdIaWQHoNPoYcs.jpeg' },
  { quote: 'Exceptional UI/UX thinking. Kunal helped streamline our user flows, improved usability, and elevated the overall product experience. Truly professional from start to finish.', name: 'Sarah D\'Souza', role: 'CEO & CTO', company: 'TechCorp', img: 'VW5U5r7eyAbBwu5vKp9TIZFxzlk.png' },
  { quote: 'Brilliant Framer execution. The animations, responsiveness, and attention to micro-interactions gave our brand a premium digital presence. Highly recommended for modern web builds.', name: 'Kevin Ross', role: 'Marketing Director', company: 'Scale', img: 'bTiA8lcD9mDhGq0Wl9d2pRny3s.jpg' },
  { quote: 'Our new logo and brand system finally feel cohesive and meaningful. He explored multiple directions and delivered a refined identity we\'re proud to use across all platforms.', name: 'Ananya Jain', role: 'Co-founder', company: 'Studio', img: 'x1xayW7zRResLg5DruxcERc3Xw.jpg' },
  { quote: 'Extremely reliable and organized. Every milestone was met on time, revisions were handled effortlessly, and the final designs significantly improved our digital presence. Fantastic experience.', name: 'Michael Chen', role: 'Operations Manager', company: 'Ops Group', img: 'iPOHoy2h1Qc5n8G5ICwcHNkbmQ.png' },
  { quote: 'What impressed us most was how well he understood our business. The website not only looks great but also communicates our value clearly and boosts conversions. A great long-term partner.', name: 'Priya Nair', role: 'CEO', company: 'Startup', img: 'XiIfSvRwRK70JwYw4eKJvLe31TQ.jpeg' },
];

export const PLANS = {
  'Freelance Project': {
    price: 'Custom', per: '/project', note: '* Scoped together — usually 2–8 weeks',
    img: 'PIxpbFpiHq656ZNK0IU4R8BLA.jpg', badge: 'ZPy0TdYRL1qLmBkkPn8LzAbPuc.svg',
    feats: [
      ['Discovery & research sprint', 'Understand the problem before touching pixels'],
      ['User flows & wireframes', 'Structure validated before visual design'],
      ['High-fidelity UI design', 'Pixel-perfect screens in your brand language'],
      ['Interactive prototype', 'Clickable flows to test with real users'],
      ['Dev-ready handoff', 'Organised files and specs your engineers can build from'],
    ],
  },
  'Full-time Role': {
    price: 'Open', per: 'to offers', note: '* Remote-first · flexible timezone overlap',
    img: 'AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg', badge: 'GUKyzoGtbPZZB136CVTm1l7vooE.svg',
    feats: [
      ['End-to-end UX ownership', 'Research, flows, UI and iteration — I own the journey'],
      ['Design system maintenance', 'Component libraries that keep teams fast and consistent'],
      ['Cross-functional collaboration', 'Comfortable working with PMs, engineers and founders'],
      ['User testing & iteration', 'Continuous feedback loops baked into the process'],
      ['Framer & prototyping', 'High-fidelity prototypes and shipped sites'],
    ],
  },
};

// ── About ────────────────────────────────────────────────────────────────
export const SKILLS = [
  ['User Research', 'Employing diverse methods to uncover user needs and behaviors, informing user-centric design solutions.'],
  ['Usability Testing', 'Conducting rigorous testing to identify pain points and iterate designs for intuitive, seamless experiences.'],
  ['User Psychology', 'Applying psychological principles to understand motivations and create engaging, effective interactions.'],
  ['Interaction Design', 'Crafting intuitive and engaging digital experiences through meaningful user interactions.'],
  ['Story-Telling', 'Crafting compelling narratives around user journeys and design rationale to communicate insights effectively.'],
  ['Art Direction', 'Guiding visual language to ensure aesthetic appeal and brand consistency across all touchpoints.'],
  ['Design Systems', 'Building and maintaining scalable component libraries for consistent, efficient design processes.'],
  ['User Flows', 'Mapping journeys to optimize navigation and identify opportunities for better interaction and efficiency.'],
];

export const EXPERIENCE = [
  ['UI/UX Designer', 'Riverhouse Technologies', 'June 2025 — Present', 'Designing product experiences end-to-end'],
  ['UX Designer', 'Creowis', 'April — June 2024', 'Research, flows and interface design'],
  ['Product Designer', 'Phimetric Studio', '2025 — Present', 'Brand, web and Framer work for clients'],
  ['Freelance UX Designer', 'Independent', '2024 — Present', 'Case studies and product design'],
];

export const APPROACH_POSTERS = ['k4KCCwAbmM0CRPyQedVe2krpWw4.jpg', 'HhByQLWQr0n8tRaqlssxlQgSK10.jpg', 'ykHTsyDEDereF371cPavVK4SjI.jpg'];

export const APPROACH_STEPS = [
  ['01/', 'I start with the problem, not the pixels — understanding user needs, business goals and constraints before designing anything.'],
  ['02/', 'Research meets craft: findings become flows, flows become wireframes, wireframes become interactive prototypes tested with real people.'],
  ['03/', 'Test, refine, ship. I iterate on feedback and hand off organised, dev-ready files that teams can actually build from.'],
];

export const CONTACT_CHECKLIST = ['Response within 24 hours', 'Clear, transparent process', 'Iterative design reviews', 'English & Hindi', 'Works across time zones', 'Regular progress updates'];

export const CONTACT_CARDS = [
  ['bolt', 'Book a Call', 'Prefer talking it through? Let\'s grab 15 minutes', 'schedule now', 'mailto:kusing51@gmail.com?subject=Call%20request'],
  ['chat', 'Chat with Me', 'Get quick answers on WhatsApp', 'start chat', 'https://wa.me/916266750520'],
  ['send', 'Shoot an Email', 'Skip the form and drop a quick email', 'send email', 'mailto:kusing51@gmail.com'],
  ['pin', 'Where I Am', 'Based in India · working remotely', '+91 62667 50520', 'tel:+916266750520'],
];

const LEGAL_TAIL = 'Questions? Email: kusing51@gmail.com — Kunal Singh, India.';

export const LEGAL_PAGES = {
  'privacy-policy': {
    title: 'Privacy Policy', sub: 'How your information is handled here.', date: 'February 5, 2025',
    intro: 'This portfolio is a personal showcase of my design work. It outlines how any information you share — mostly through the contact links — is handled.',
    sections: [
      ['Information Collected', 'Name and email if you write to me • Project details you choose to share • Basic site usage data'],
      ['How It\'s Used', 'Replying to your message • Discussing potential work • Nothing else — no lists, no resale'],
      ['Data Protection', 'Standard email security • No databases on this site • Nothing stored beyond our conversation'],
      ['Sharing', 'Never sold • Never shared with third parties • Portfolio work shown only with client approval'],
      ['Your Rights', 'Ask what I hold • Request deletion • Opt out of any future contact'],
      ['Contact', LEGAL_TAIL],
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service', sub: 'Simple terms for working together.', date: 'February 5, 2025',
    intro: 'These terms cover engagements for design work arranged through this portfolio or direct contact.',
    sections: [
      ['Services', 'UX design & research • UI and visual design • Prototyping • Framer site development'],
      ['Engagements', 'Scoped per project • Fixed milestones agreed up front • Revisions within scope'],
      ['Client Responsibilities', 'Clear briefs and timely feedback • Access to required assets • One decision-maker per project'],
      ['Deliverables & Ownership', 'Full ownership transfers on final payment • Source files included • Portfolio display rights retained unless agreed otherwise'],
      ['Timeline', 'Agreed per project • Delays communicated early • Rush work may be possible'],
      ['Contact', LEGAL_TAIL],
    ],
  },
  'disclaimer': {
    title: 'Disclaimer', sub: 'A few honest notes about this site.', date: 'February 5, 2025',
    intro: 'This is a personal portfolio. Case studies represent real projects and explorations; some were self-initiated concept work designed to demonstrate process.',
    sections: [
      ['Portfolio Work', 'Case studies reflect their project context • Concept projects are labelled as self-initiated • Metrics shown are design-stage results'],
      ['External Links', 'Behance, LinkedIn and client sites are external • I\'m not responsible for their content'],
      ['Changes', 'This site evolves as I do • Content may be updated periodically'],
      ['Contact', LEGAL_TAIL],
    ],
  },
};
