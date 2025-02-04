import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Rumy",
  seo: {
    title: "Rumy",
    description: "Roommate Finder App for College Students",
  },
  backgroundGrid: false,
  logo: "/logos/Rumy_LogoMark_Green.png",
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
          image: "/3D/sheild-front-color.webp",
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
          image: "/stock/07.jpg",
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
          icon: "/3D/chess-front-color.webp",
        },
        {
          title: "Student Verification",
          subtitle:
            "All users are verified college students, ensuring a safe and trustworthy community",
          icon: "/3D/medal-front-color.webp",
        },
        {
          title: "Secure Chat",
          subtitle:
            "Connect with potential roommates through our safe, in-app messaging system",
          icon: "/3D/lock-front-color.webp",
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
            "We verify all users through their college email addresses and student verification process. This helps ensure a safe and trusted community of genuine college students.",
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
  
  **Effective Date:** january 31, 2025
  
  ## Introduction
  
  Welcome to Rumy ("App", "we", "our", or "us"). Your privacy is fundamental to our service. This Privacy Policy explains how we collect, use, store, protect, and share your personal information when you use our roommate-matching platform.
  
  ## Information We Collect
  
  ### 1. Information You Provide
  
  #### Account Information
  We collect basic information necessary to create and verify your account, including:
  - Full name
  - College/university email address
  - Date of birth
  - Student ID number
  - Password (encrypted)
  - Phone number for verification
  
  #### Profile Information
  To facilitate better matching, we collect information about your:
  - Lifestyle preferences and habits
  - Study schedules and patterns
  - Sleep schedule and routines
  - Cleanliness preferences
  - Social habits and preferences
  - Hobbies and interests
  - Major/field of study
  - Expected graduation date
  - Budget range for housing
  - Pet preferences
  - Smoking preferences
  - Guest policy preferences
  
  #### Verification Data
  To ensure platform safety, we verify:
  - Student enrollment status
  - College/university identification
  - Government-issued ID (for verification only)
  - Profile photo
  
  #### Communication Data
  We maintain records of:
  - In-app messages and chat history
  - Reported issues or concerns
  - Support ticket communications
  - Feedback and ratings
  - Saved or blocked user lists
  
  ### 2. Information We Collect Automatically
  
  #### Usage Data
  We collect data about how you use our platform:
  - App access times and duration
  - Feature interaction patterns
  - Matching preferences and history
  - Search criteria and filters used
  - Profile view history
  - Message response times
  - Match acceptance/rejection patterns
  
  #### Device Information
  For security and functionality, we collect:
  - Device type and model
  - Operating system and version
  - IP address
  - Browser type (if applicable)
  - Mobile carrier information
  - Device identifiers
  - App version being used
  
  #### Location Data
  With your consent, we collect:
  - General location (city/campus level)
  - Time zone
  - Campus proximity data
  - Housing area preferences
  
  ## How We Use Your Information
  
  We use your information to:
  - Provide and improve roommate matching services
  - Verify student status and identity
  - Process and manage user communications
  - Maintain user profiles and preferences
  - Generate and manage matches
  - Provide customer support
  - Ensure platform safety and security
  - Analyze user behavior to improve our service
  - Prevent fraudulent activities
  - Conduct research and analytics
  - Test and develop new features
  
  ## Security Measures
  
  We implement robust security measures including:
  - End-to-end encryption for messages
  - Secure data storage systems
  - Regular security audits
  - Employee access controls
  - Incident response procedures
  - Backup and recovery systems
  - Student verification systems
  
  ## Your Rights
  
  You have the right to:
  - Access and view your personal information
  - Update your profile data
  - Control privacy settings
  - Manage notification preferences
  - Block other users
  - Request data deletion
  - Export your data
  - Opt-out of communications
  - Delete your account
  
  ## Updates to Privacy Policy
  
  We may update this Privacy Policy from time to time. We will notify you of any significant changes and obtain consent where required by law.
  
  ## Contact Information
  
  Support Team: support@favesco.tech
  `
    },
    cookiesPolicy: {
      seo: {
        title: "Cookies Policy - Rumy",
        description: "Cookies Policy for Rumy Roommate Finding App",
      },
      content: `# Cookies Policy
  
  **Effective Date:** October 30, 2024
  
  ## Introduction
  
  Cookies are small text files stored on your device that help us provide and improve our services. This policy explains how Rumy uses cookies and similar technologies.
  
  ## Types of Cookies We Use
  
  ### Essential Cookies
  These cookies are necessary for basic app functionality:
  - User authentication and session management
  - Security features and fraud prevention
  - Error prevention and system stability
  - Account verification processes
  - Basic platform operations
  
  ### Functional Cookies
  These cookies enhance your experience:
  - Remember your preferences
  - Customize your experience
  - Save your settings
  - Language preferences
  - Theme settings
  - Matching preferences
  
  ### Analytics Cookies
  These cookies help us improve our service:
  - Understanding user behavior
  - Improving app performance
  - Tracking feature usage
  - Analyzing matching patterns
  - Monitoring error rates
  - Service optimization
  
  ### Performance Cookies
  These cookies ensure optimal app performance:
  - Load balancing
  - Response time monitoring
  - Error tracking
  - Bandwidth optimization
  - Cache management
  - System stability
  
  ## How We Use Cookies
  
  We use cookies to:
  - Enable core platform functionality
  - Maintain your sessions securely
  - Remember your preferences
  - Enhance user experience
  - Monitor platform performance
  - Improve our services
  - Ensure system security
  - Prevent fraud
  
  ## Your Cookie Choices
  
  You can manage cookies through:
  
  ### In-App Controls
  - Privacy settings
  - Cookie preferences
  - Feature opt-outs
  - Tracking preferences
  - Data collection settings
  
  ### Device Settings
  - Browser cookie controls
  - App permissions
  - Storage management
  - Cache clearing
  - Privacy settings
  
  ## Updates to Cookie Policy
  
  We may update this Cookie Policy periodically. We will notify you of any significant changes through the app or email.
  
  ## Contact Information
  
  For questions about cookies:
  
  Support: support@favesco.tech`
    },
    termsAndConditions: {
      seo: {
        title: "Terms and Conditions - Rumy",
        description: "Terms and Conditions for Rumy",
      },
      content: `# Terms and Conditions
  
  **Effective Date:** October 30, 2024
  
  ## Eligibility
  
  To use Rumy, you must:
  - Be 18 years of age or older
  - Be currently enrolled at an accredited college/university
  - Provide and maintain accurate information
  - Maintain a valid college email address
  - Comply with all local laws and regulations
  
  ## User Conduct
  
  ### Required:
  Users must:
  - Maintain accurate and up-to-date profile information
  - Engage in respectful communication
  - Report any safety concerns or violations
  - Use appropriate language and conduct
  - Keep contact information current
  - Follow platform guidelines
  
  ### Prohibited:
  Users must not:
  - Provide false or misleading information
  - Engage in harassment or intimidation
  - Share private user data
  - Create multiple accounts
  - Engage in commercial solicitation
  - Display discriminatory behavior
  - Impersonate others
  - Share explicit content
  - Attempt to circumvent security measures
  
  ## Safety Guidelines
  
  Users must follow these safety protocols:
  - Complete student verification
  - Use in-app communication only
  - Report suspicious activity immediately
  - Meet new contacts in public places
  - Follow recommended safety procedures
  - Enable two-factor authentication
  - Keep login credentials secure
  - Use campus safety resources when available
  
  ## Additional Terms
  
  ### Platform Updates
  We reserve the right to:
  - Modify the platform
  - Update these terms
  - Change service features
  - Adjust user requirements
  - Implement new safety measures
  
  ### Account Termination
  We may terminate accounts that:
  - Violate these terms
  - Engage in prohibited activities
  - Fail to maintain eligibility
  - Threaten platform safety
  - Provide false information
  
  ## Contact Us
  
  For assistance or to report issues:
  Email: support@favesco.tech
  `
    }
  };

export default templateConfig;