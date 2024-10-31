import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Rumy",
  seo: {
    title: "Rumy",
    description: "Smart Roommate Finder for College Students",
  },
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  forceTheme: false,
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/rumy",
      facebook: "https://facebook.com/rumy",
      twitter: "https://x.com/rumy",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Find Your Roommates",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Find Your Perfect Roommates Today!",
    subtitle:
      "Match with students who share your lifestyle. Connect safely with verified college students and find your ideal living Partners.",
    screenshots: [
      "/screenshots/1.jpg",
      "/screenshots/2.jpg",
      "/screenshots/3.jpg",
    ],
  },
  home: {
    seo: {
      title: "Rumy - Smart College Roommate Matching app",
      description: "Find your perfect college roommate with swipe matching",
    },
    testimonials: {
      id: "testimonials",
      title: "Success Stories",
      subtitle: "Hear from students who found their perfect match",
      cards: [
        {
          name: "Marcus Johnson",
          comment:
            "Rumy made finding a compatible roommate so easy! The matching system really works - my roommate and I have similar study habits and sleeping schedules.",
        },
        {
          name: "Aiden Thompson",
          comment:
            "As a transfer student, I was worried about finding a roommate mid-semester. Rumy's verification system made me feel safe.",
        },
        {
          name: "Sofia Patel",
          comment:
            "The lifestyle matching on Rumy is spot-on! My roommate and I both are clean, quiet during study hours, and enjoy occasional movie nights. ",
        },
        {
          name: "Dana White",
          comment:
            "I love how Rumy lets you match based on specific preferences. Found a roommate who shares my studying schedule and cleaning habits.",
        },
        {
          name: "Eve Adams",
          comment:
            "The detailed profiles and preference matching made it easy to find a roommate who respects my cultural background and lifestyle choices. Thank you, Rumy!",
        },
      ],
    },
    partners: {
      title: "Trusted by Leading Universities",
      logos: [
        "/misc/universities/asu.png",
        "/misc/universities/uoa.png",
        "/misc/universities/usc.png",
        "/misc/universities/penn.png",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How Rumy Works",
      subtitle:
        "",
      steps: [
        {
          title: "Create Your Profile",
          subtitle:
            "Sign up with your college email and tell us about your lifestyle, study habits, and roommate preferences.",
          image: "/stock/01.webp",
        },
        {
          title: "Get Verified",
          subtitle:
            "Complete our student verification process to ensure a safe and trusted community.",
          image: "/stock/02.webp",
        },
        {
          title: "Start Swiping",
          subtitle:
            "Start meeting potential roommates based on your preferences and life habits.",
          image: "/stock/03.webp",
        },
        {
          title: "Chat Safely",
          subtitle:
            "Get to know your future roommates through our in-app messaging system before making your decision.",
          image: "/stock/04.webp",
        },
        {
          title: "Find Your Match",
          subtitle:
            "Connect with your perfect roommate and start planning your shared living experience.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Why Choose Rumy",
      subtitle:
        "Smart features designed for college students",
      cards: [
        {
          title: "Smart Matching",
          subtitle:
            "Our algorithm pairs you with compatible roommates based on lifestyle, study habits, and personal preferences",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Student Verification",
          subtitle:
            "All users are verified college students, ensuring a safe and trustworthy community",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Secure Chat",
          subtitle:
            "Connect with potential roommates through our safe, in-app messaging system",
          icon: "/3D/sheild-front-color.webp",
        },
        {
          title: "Preference Matching",
          subtitle:
            "Find roommates who match your specific criteria for cleanliness, quiet hours, and lifestyle",
          icon: "/3D/roll-brush-front-color.webp ",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "How does Rumy verify students?",
          answer:
            "We verify all users through their college email addresses and student ID verification process. This helps ensure a safe and trusted community of genuine college students.",
        },
        {
          question: "If I'm transferring to another university can I use it for that area?",
          answer: "Yes! You can update your university and location preferences anytime. Just change your campus location in your profile, and Rumy will start showing you potential roommates in your new university area. You can even start searching up to 6 months before your transfer to get a head start on finding the perfect roommate.",
        },
        {
          question: "Can I use Rumy for off-campus housing?",
          answer:
            "Yes! Rumy works for both on-campus and off-campus housing. You can specify your housing situation in your preferences and match with others looking for similar arrangements.",
        },
        {
          question: "How does the matching algorithm work?",
          answer:
            "Our algorithm considers multiple factors including lifestyle habits, study preferences, sleep schedules, and personal interests to suggest compatible roommate matches.",
        },
        {
          question: "Is my information safe?",
          answer:
            "Yes, we take privacy seriously. Your personal information is protected, and you control what's visible on your profile. We never share sensitive details without your permission.",
        },
      ],
    },
    header: {
      headline: "Find Your Perfect Roomates",
      subtitle:
        "Match with students who share your lifestyle. Our smart algorithm connects you with compatible roommates based on your habits, preferences, and schedule.",
      screenshots: [
        "/screenshots/3.jpg",
        "/screenshots/2.jpg",
        "/screenshots/1.jpg",
      ],
      rewards: ["Most Secure \nRoommate Finder App", "#1 College \nHousing App"],
      usersDescription: "1,000+ students already matched",
      headlineMark: [1, 3],
    },


    pricing: {
  id: "pricing",
  title: "Connect Students with Perfect Housing",
  subtitle: "The easiest way to list and lease properties to verified students",
  actionText: "Get Started",
  plans: [
    {
      title: "For Students",
      price: "Free",
      rows: [
        "Browse verified properties",
        "Roommate matching",
        "Easy lease processing",
        "Schedule viewings",
        "Roommates grouping"
      ],
    },
    {
      title: "Individual Landlords",
      price: "$49/month",
      featured: true,
      rows: [
        "List up to 3 properties",
        "Verified student leads",
        "Easy lease processing",
      ],
    },
    {
      title: "Property Companies",
      price: "$199/month + 2% per lease",
        rows: [
        "Unlimited property listings",
        "Priority placement",
        "Bulk lease management",
        "Commission at only 2%",
      ],
    },
  ],
}
  },


  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Rumy",
      description: "Privacy Policy for Rumy Roommate Finding App",
    },
    content: `# Privacy Policy

**Effective Date:** October 30, 2024

## Introduction

Welcome to Rumy (the "App"). This Privacy Policy explains how we collect, use, and protect your personal information when you use our roommate-matching platform.

## Information We Collect

### 1. Information You Provide
- **Account Information:** Name, college email address, student ID (for verification)
- **Profile Information:** Lifestyle preferences, study habits, sleep schedule
- **Verification Data:** Student status verification
- **Communication Content:** Messages and chat history

### 2. Information We Collect Automatically
- **Usage Data:** App interactions and matching preferences
- **Device Information:** Device type, IP address, operating system
- **Location Data:** General location for matching purposes (with consent)

## How We Use Your Information

- To provide roommate matching services
- To verify student status
- To ensure platform safety
- To improve our matching algorithm
- To communicate with users
- To provide customer support

## Security Measures

- Student verification systems
- Secure messaging platform
- Data encryption
- Regular security audits

## Your Rights

- Access and update your information
- Control your privacy settings
- Request data deletion
- Opt-out of communications

## Contact Us

Email: privacy@rumyfinder.com
Support: support@rumyfinder.com
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Rumy",
      description: "Cookies Policy for Rumy Roommate Finding App",
    },
    content: `# Cookies Policy

**Effective Date:** October 30, 2024

## What We Use Cookies For

- User authentication
- Matching preferences
- Chat functionality
- App performance
- Security measures

## Types of Cookies

- Essential cookies for app functionality
- Preference cookies for user settings
- Analytics cookies for improvement
- Security cookies for protection

## Your Cookie Choices

Manage cookies through:
- App settings
- Device settings
- Browser settings

## Contact Us

Email: privacy@rumyfinder.com`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and Conditions - Rumy",
      description: "Terms and Conditions for Rumy",
    },
    content: `# Terms and Conditions

**Effective Date:** October 30, 2024

## Eligibility

- Must be 18 or older
- Must be an enrolled college student
- Must provide accurate information
- Must maintain valid college email

## User Conduct

### Required:
- Accurate profile information
- Respectful communication
- Report safety concerns

### Prohibited:
- False information
- Harassment
- Sharing private data

## Safety Guidelines

- Student verification required
- In-app communication only
- Report suspicious activity
- Follow safety protocols

## Contact Us

Email: legal@rumyfinder.com
Support: 1-800-RUMY-HELP`,
  },
};

export default templateConfig;