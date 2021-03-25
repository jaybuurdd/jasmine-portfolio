/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Jasmine Obas",
  title: "Hey Guys, I'm Jasmine",
  subTitle: emoji(
    "A passionate & versitile programmer from Virginia. I've exposed myself to multiple areas in the tech world from DevOps and CySec to Software Engineering and Game Dev. I live off taking on challanges and growing my capabilities as a person and a programmer! 😎"
  ),
  resumeLink:
    "https://1drv.ms/w/s!Augqret9u_SAh6UcIKKZOrx2f5BzMg?e=BaaloD",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaybuurdd",
  linkedin: "https://www.linkedin.com/in/jasmine-obas-burdette/",
  //gmail: "contact@davidrakosi.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/therealjaso/',
  twitter: 'https://twitter.com/therealjaso',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Nerdy Software Engineer, who codes Machine Learning apps during the day and creates\
  Emulators with my classmates at night.",
  skills: [
    emoji(
      "🧬 Create ground-breaking advanced technologies in Device Forensics, Airborn Cyber Defense, and Anonymmous Interent.  "
    ),
    emoji("📊 Fluent Data Science Dev in Python with a current focus in Natural Language Processing."),
    emoji("🎥 Content creator for social medias and animating and video editing freelancer."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Game Dev",
      fontAwesomeClassname:"fas fa-gamepad"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "R&D",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Content Creator",
      fontAwesomeClassname: "fas fa-magic"
    },
    {
      skillName: "Git",
      fontAwesomeClassname:"fas fa-code-branch"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname:"fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname:"fab fa-css3-alt"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname:"fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname:"fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Mason Unversity",
      logo: require("./assets/images/gmu.png"),
      subHeader: "Pursuing Bachelors in Applied Computer Science w/ Concetraion in Computer Game Design",
      duration: "August 2019 - May 2022",
      desc: "Participated in the research of Natural Language Processing and Data Mining.",

      
      
    },
    {
      schoolName: "Montgomery College",
      logo: require("./assets/images/mc-trans.png"),
      subHeader: "Two Associates of Scince Degrees in:",
      subHeader: "Computer Science",
      subHeader: "&",
      subHeader: "Computer Gaming and Simulations",
      duration: "August 2015 - May 2019",
      desc: "Participated in Collegiate Athletics and graduated under Phi Theta Kappa.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Content Creation",
      progressPercentage: "70%"
    },
    {
      Stack: "Full Stack Dev",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Grier Forensics",
      companylogo: require("./assets/images/grier.png"),
      date: "January 2021 – Present",
      desc:
        "We invite the unknown.",
      descBullets: [
        "Advanced technology development",
        "Security and forensics",
        "Machine Learning application development"
      ]
    },
    {
      role: "Jr. Sys. Engineer Intern",
      company: "Roka Security",
      companylogo: require("./assets/images/roka.png"),
      date: "March 2020 – January 2021",
      desc:
        "Stay ahead of the curve with your security.",
      descBullets: [
          "R&D on cyber security methods and forensics tools",
          "Building classes based on client requests on CySec related topics.",
          "Web application automated testing using Selenium"
        ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jaybuurdd", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "The world leaves a lot to talk about, lets chat.",
  number: "(703) 589 9255",
  email_address: "jobas@gmu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "therealjaso", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
