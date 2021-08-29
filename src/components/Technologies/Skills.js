import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaCloud } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaBlogger } from "react-icons/fa";

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
    Component: FaBlogger,
    title: "Blogging",
    Description: () => <>I have implemented many SEO Stratergies to rank my websites. I also worked on Amazon, Flipkart Affiliate Niches.</>,
  },
  {
    slug: "cloud",
    Component: FaCloud,
    title: "Cloud Computing",
    Description: () => <>I have been managing all of my VPS on my own since many years. I have hands on experience on GCloud, AWS, Digital Ocean etc.</>,
  },
  {
    slug: "python",
    Component: SiPython,
    title: "Python",
    Description: () => <>I mostly use Python to code. I use Python for most of my Projects and also for Web Automation.</>,
  },
];
