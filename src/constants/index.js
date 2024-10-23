import { web, mobile, backend, creator } from "@/assets";

const words = [
    "Frontend Designer. ",
    "Web Designer. ",
    "UI / UX Designer. ", 
    "Web Developer. ", 
    "Software Tester."
];

const socialsData = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritamsaha137",
        icon: "bx bxl-linkedin"
    },
    {
        name: "GitHub",
        url: "https://github.com/Ritam369",
        icon: "bx bxl-github"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/r_i_t_a_m_s_a_h_a/profilecard/?igsh=OWFuNDU2cmd3ZmU0",
        icon: "bx bxl-instagram-alt"
    },
    {
        name: "Twitter",
        url: "https://x.com/saharitam963",
        icon: "bx bxl-twitter"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100080013277806&mibextid=ZbWKwL",
        icon: "bx bxl-facebook"
    }
];

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  

export {
    socialsData,
    words,
    navLinks,
    services
};

