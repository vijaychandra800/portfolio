import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>I work on Custom ROMs & Android Apps using Java.</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Currently working with Dart & Flutter for app development. </>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I can code in Java. But I mainly use it for Android app development.</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written Scripts for various purposes.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
  {
    slug: "digitalmarketing",
    Component: digitalmarketing,
    title: "Blogging",
    Description: () => <>I have built several websites and ranked them on Google First Page. I have implemented all the SEO Stratergies on all of my blogs.
    I also worked on Amazon, Flipkart Affiliate Niches.</>,
  },
  
  {
    slug: "cloud",
    Component: cloud,
    title: "Cloud Computing",
    Description: () => <>I have been managing all of my VPS on my own since many years. I have hands on experience on Google Cloud and AWS, Digital Ocean etc.</>,
  },
];
