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
  username: "Jimmy Tan",
  title: "Hi all, I'm Jimmy",
  subTitle: emoji(
    "I am a passionate Machine Learning Engineer 🤖 with experience in building production-ready chatbots using the Rasa Framework and Amazon Web Services (AWS). Additionally, I have developed the Gen-AI Multi-Agent Spin-Off project leveraging Microsoft AutoGen and LLMs. Currently learning Data Science 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HnmN8S8CuDqh2bECr1Z6gTItnHlKFu_b/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JimmyTan2000",
  linkedin: "https://www.linkedin.com/in/jimmy-tan-503431233/",
  gmail: "tanjimmy2000@gmail.com",
  // gitlab: "https://mygit.th-deg.de/jt27296",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skill Sets",
  subTitle: "Here are the skill sets I currently possess and am actively improving. (Those without icons are included in the list below).",
  skills: [
    emoji("⚡ PyTorch"),
    emoji("⚡ TensorFlow"),
    emoji("⚡ Keras"),
    emoji("⚡ Scikit-learn"),
    emoji("⚡ Pandas"),
    emoji("⚡ Matplotlib"),
    emoji("⚡ Seaborn"), 
    emoji("⚡ Power BI"),
    emoji("⚡ Kubernetes")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }, 
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }, 
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }, 
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    }
    ,
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }, 
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "SQL/NoSQL",
      fontAwesomeClassname: "fas fa-database"
    }
    ,
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    }
    ,
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Deggendorf Institute of Technology",
      logo: require("./assets/images/thd.jpg"),
      subHeader: "B.Sc in Artificial Intelligence (German Stream)",
      duration: "Oct 2020 - May 2024",
      desc: "Grade: 1.9 (German System)"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sunway College",
      logo: require("./assets/images/sunway-college.png"),
      subHeader: "Cambridge GCE A-Level",
      duration: "Jan 2018 - Jun 2019",
      desc: "Took Physics, Chemistry, Maths and Further Maths"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Engineer - Thesis Research",
      company: "Mercedes-Benz Consulting GmbH",
      companylogo: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      date: "Oct 2023 – July 2024",
      desc: "Worked in the Machine Learning team for my thesis research and some other projects.",
      descBullets: [
        "Conducted the research for my thesis titled \"Automatic Evaluation of Question-Generation Models.\"",
        "Performed data quality check of the manually annotated data from Amazon MTurk.",
        "Engaged in the development of the Gen-AI Multi-Agent Spin-Off project leveraging LLMs.",
        "Presented the Gen-AI project showcase company-wide at Mercedes-Benz."
      ]
    },
    {
      role: "Working Student - Data Analytics and AI",
      company: "Mercedes-Benz Consulting GmbH",
      companylogo: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      date: "Mar 2023 – Aug 2023",
      desc: "Continuation of my internship",
      descBullets: [
        "Led the architectural design of a new Rasa chatbot for a specific use case.",
        "Coordinated product requirements clarification and procedural synchronization among cross-functional teams during implementation.",
        "Developed comprehensive step-by-step instructions and demonstrated the implementation of the Rasa system with Kubernetes on AWS EKS (knowledge transfer)."
      ]
    },
    {
      role: "Intern - Data Analytics and AI",
      company: "Mercedes-Benz Consulting GmbH",
      companylogo: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      date: "Sep 2022 – Feb 2023",
      desc: "Internship",
      descBullets: [
        "Led strategy planning for the implementation of a dialogue-oriented AI chatbot utilizing Rasa technology.",
        "Designed and implemented a robust cloud infrastructure using Docker, Kubernetes, Helm Charts, and multiple AWS services such as Lambda, EC2, EKS, ECR, CodeCommit, Cloud9, DynamoDB, Cognito, and SES.",
        "Independently deployed the chatbot in a production environment with load balancing for optimal performance and scalability.",
        "Collaborated closely with the frontend team to seamlessly integrate the chatbot into the user interface.",
        "Documented the entire chatbot comprehensively."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: false // Set false to hide this section, defaults to true
// };

// Duplicate of the bigProjects Section. Used to display my Bachelor's Thesis
const bigProjects = {
  title: "Thesis",
  subtitle: "My bachelor thesis in the field of NLP (Natural Language Processing)",
  projects: [
    {
      image: require("./assets/images/thesis.webp"),
      projectName: "Automatic Evaluation of Question-Generation Models",
      projectDesc: "Evaluating generative AI models like Question-Generation is challenging; read on to learn how to address this.",
      footerLink: [
        {
          name: "View Paper",
          url: "https://drive.google.com/file/d/1Joj25afWGE17E2mznhqC9eL32ihZCRzq/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ML Engineer - Thesis Research Certificate",
      subtitle:
        "Recommendation letter",
      image: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      imageAlt: "Mercedes-Benz Consulting Logo",
      footerLink: [
        {
          name: "View Recommendation Letter",
          url: "https://drive.google.com/file/d/1Gcl4gXyAPEGEVFBQqFZ1YeK7l_iKsghq/view?usp=drive_link"
        }
      ]
    },
    {
      title: "CERN GridWars Hackathon - 1st Runner Up",
      subtitle:
        "Hackathon held by CERN during the CERN Spring Campus 2024",
      image: require("./assets/images/CERN_logo.png"),
      imageAlt: "CERN Logo",
      footerLink: [
        {
          name: "Hackathon Award",
          url: "https://drive.google.com/file/d/1uSvT3-qaLFqX_4LBoK1sLmy53hYMN3tG/view?usp=drive_link"
        }, 
        {
          name: "Certificate of Participation",
          url: "https://drive.google.com/file/d/1ejZOVQl-8TU_AApGoCAOnVaDKfc8bBmX/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Working Student Certificate",
      subtitle:
        "Recommendation letter",
      image: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      imageAlt: "Mercedes-Benz Consulting Logo",
      footerLink: [
        {
          name: "View Recommendation Letter",
          url: "https://drive.google.com/file/d/1jvbJ9Alb_meZaAXeNR4lZNBtRygO0_9F/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Internship Certificate",
      subtitle: "Recommendation letter",
      image: require("./assets/images/mercedes_benz_consulting_gmbh_logo.jpeg"),
      imageAlt: "Mercedes-Benz Consulting Logo",
      footerLink: [
        {
          name: "View Recommendation Letter",
          url: "https://drive.google.com/file/d/1kE4ZAalXnou-t9Oro-VPCJKrvqXuR6sC/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Duplicate of the Blogs Section. Repurposed to put my bachelor thesis paper
const blogSection = {
  title: "Live Projects, Reports & Blogs",
  subtitle:
    "Here you can find some of my live projects, project reports and blogs.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://jimmytan2000.github.io/thd-robot-programming-report-webserver/",
      title: "Robot Programming Report",
      description:
        "Report for robot programming project for maze solving using ROS2 and Python."
    },
    {
      url: "https://tanjimmy.itch.io/the-quest-for-a-cleaner-world",
      title: "EcoQuest Game - Platformer",
      description:
        "Try out this platformer game that I have created!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+491774061215",
  email_address: "tanjimmy2000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
