/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayyanar M",
  title: "Hi, I'm Ayyanar",
  subTitle: emoji(
    "Electrical Engineer (Student) — passionate about Drone Technology, AI Tools, MATLAB, IoT projects and embedded C programming."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "textayyanar07@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Electrical Engineering student — Drone Technology, AI Tools, MATLAB, IoT, C Programming, Communication",
  skills: [
    emoji("⚡ Drone Technology — flight systems, autopilot basics, payload integration"),
    emoji("⚡ AI Tools — prompt engineering and practical tooling for automation"),
    emoji("⚡ MATLAB — simulation, signal processing and control systems"),
    emoji("⚡ IoT Projects — sensors, microcontrollers and data telemetry"),
    emoji("⚡ C Programming — embedded systems and firmware development"),
    emoji("⚡ Communication — technical documentation and team collaboration")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Drone Technology",
      fontAwesomeClassname: "fas fa-drone"
    },
    {
      skillName: "AI Tools",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-calculator"
    },
    {
      skillName: "IoT",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "C Programming",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Communication",
      fontAwesomeClassname: "fas fa-comments"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Asian Christian High School, Hosur",
      subHeader: "Pre-Schooling to Grade 9",
      duration: "2011 - 2022",
      desc: "Completed foundational schooling up to Grade 9.",
      descBullets: []
    },
    {
      schoolName: "Dolphin Matric Higher Secondary School",
      subHeader: "Grade 10–12",
      duration: "2022 - 2024",
      desc: "Completed Higher Secondary Education — 75% in Grade 12.",
      descBullets: []
    },
    {
      schoolName: "NPR College of Engineering & Technology",
      subHeader: "B.E. Electrical Engineering",
      duration: "2024 - 2028",
      desc: "Pursuing B.E. Electrical Engineering (CGPA: 8.13).",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Drone Technology", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "MATLAB",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Internship",
      company: "JK Fenner Group of Industries",
      companylogo: require("./assets/images/jkFennerLogo.svg"),
      date: "15 days",
      desc: "15 days of internship at JK Fenner Group of Industries, Madurai",
      descBullets: [
        "Industrial training and hands-on experience",
        "Exposure to manufacturing processes and technologies"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS AND INNOVATIONS",
  projects: [
    {
      projectName: "Quadcopter",
      projectDesc: "A multi-rotor rotorcraft with advanced flight capabilities",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and awards",

  achievementsCards: [
    {
      title: "Certified Drone Pilot — DGNCC",
      subtitle: "Authorized and certified drone pilot under DGNCC",
      imageAlt: "DGNCC Certificate",
      footerLink: []
    },
    {
      title: "C Programming Certification",
      subtitle: "Completed certification in C Programming",
      imageAlt: "C Programming Certificate",
      footerLink: []
    },
    {
      title: "Overall 2nd Place — Centrally Organised Camp (COC)",
      subtitle: "Awarded Overall 2nd Place by Central NCC",
      imageAlt: "COC Award",
      footerLink: []
    },
    {
      title: "MediTech Attendee",
      subtitle: "Participated in MediTech inter-institutional technology event",
      imageAlt: "MediTech",
      footerLink: []
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 86374 88463",
  email_address: "textayyanar07@gmail.com",
  address: "No.15/17 Vanamamalai Nagar, Madurai"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
