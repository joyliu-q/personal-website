import { Flex, Text, Link } from "@chakra-ui/react";

export interface Project {
  title: string; // name of project
  short?: string; // short description
  description: string | JSX.Element; // short description
  image: string; // image displayed for project
  link?: string; // url for project
  github?: string; // github link
}

export const PROJECT_LIST: Project[] = [
  {
    title: 'CIS1905',
    short:
      "Taught UPenn's Rust Class",
    description:
      'I created the course materials and taught the Rust class at the University of Pennsylvania.',
    link: "https://cis1905.org",
    image: 'https://www.cis1905.org/assets/ferris.svg',
  },
  {
    title: 'Kittyhawk',
    short: "K8s Manifest Generator",
    description:
      <Text>
        Designed as an in-house cdk to simplify the CI/CD workflow, Kittyhawk is the automated Kubernetes YAML generator for <Link variant="ghost" href="https://pennlabs.org/" isExternal textDecor="underline">Penn Labs</Link>, used across all 11 products serving all Penn students.
      </Text>,
    image: '/projects/pennlabs.png',
    link: 'https://kittyhawk.pennlabs.org/',
    github: 'https://github.com/pennlabs/infrastructure/tree/master/cdk/kittyhawk',
  },
  {
    title: 'Eddy',
    short: "Best NLP Hack @ TreeHacks",
    description: <Flex flexDir="column">
      <Text>
        <b>Best Natural Language Processing Hack at Stanford TreeHacks</b>
      </Text>
      <Text>
        Eddy is a brainstorming tool that brings autopilot to ideation. Sit down. Speak. And watch Eddy organize your ideas for you into a live mindmap.
      </Text>
    </Flex>,
    image: '/projects/eddy.png',
    github: 'https://github.com/joyliu-q/eddy',
    link: 'https://devpost.com/software/eddy-zx9uto',
  },
  {
    title: 'PennApps',
    short:
      "Directed UPenn's hackathon",
    description:
      'Co-directed PennApps 2023, the nation\'s first student-run college hackathon with 50 organizers and hundreds of attendees.',
    image: '/projects/pennapps.png',
  },
  {
    title: 'Beatris',
    short: 'Tetris solving bot in Rust',
    description:
      'A Tetris solving bot developed and trained for Jstris battles (Rust model/view, Python controller).',
    image: '/projects/beatris.png',
    github: 'https://github.com/Amarantheum/Beatris',
  },

  {
    title: 'Joymart',
    short: 'Gamified online shopping',
    description: `Joymart is an imaginary online shopping platform where I explored 
     bringing the personal touch of in-person shopping into a convenient virtual
     experience.`,
    image: '/projects/joymart.png',
    link: 'https://joymart.joyliu.dev/',
    github: 'https://github.com/joyliu-q/joymart',
  },
  {
    title: 'in-toto-rs',
    short: 'GSoC @ CNCF (in-toto)',
    description:
      <Text>
        Google Summer of Code project - A native Rust implementation of <Link variant="ghost" href="https://in-toto.io/" isExternal>in-toto</Link>, a framework to secure the integrity of software supply chains.
      </Text>,
    image: '/projects/gsoc.png',
    github: 'https://github.com/in-toto/in-toto-rs',
    link: 'https://in-toto.io/',
  },
  {
    title: 'Evoluxion',
    short: 'Sports Analytics Platform',
    description:
      `Solo Contractor for sports analytics startup to develop a multi-page platform for NFL games, with Stripe integration, user authentication, and admin content management system.`,
    image: '/projects/evoluxion.png',
    link: 'https://www.evoluxionsports.com',
  },
]