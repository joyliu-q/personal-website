import { Text, Link, Flex } from "@chakra-ui/react";

export enum ProjectLabel {
  FULL_STACK = 'full stack',
  IOS = 'ios',
  SYSTEMS = 'systems',
  RUST = 'rust',
  RESEARCH = 'research',
  TEACHING = 'teaching',
  HACKATHON = 'hackathon',
  OPEN_SOURCE = 'open source',
}

export interface Project {
  title: string; // name of project
  description: string | JSX.Element; // short description
  image?: string; // image displayed for project
  link?: string; // url for project
  github?: string; // github link
  colorOverride?: string; // color for project
  labels?: ProjectLabel[]; // categorization labels using enum
}

export const PROJECT_LIST: Project[] = [
  {
    title: 'ricebar - custom MacOS menubar',
    description:
      'I created a drop-in menubar replacement, except you can ALSO play pong with the menubar itself, check weather, send notifications, and more! Written in SwiftUI and Metal.',
    image: '/projects/ricebar.gif',
    github: 'https://github.com/joyliu-q/ricebar',
    labels: [ProjectLabel.IOS, ProjectLabel.SYSTEMS],
  },
  {
    title: 'Scheduler for ML-inferred DB',
    description:
      'Working with Dr. Ryan Marcus on a new Rust database system that uses adaptive query execution.',
    labels: [ProjectLabel.RUST, ProjectLabel.RESEARCH, ProjectLabel.SYSTEMS],
  },
  {
    title: 'CIS1905 Rust',
    description:
      'Taught and created curriculum from scratch for CIS 1905 Rust, an undergraduate course at Penn.',
    image: '/projects/cis1905.png',
    github: 'https://github.com/cis1905',
    link: "https://cis1905.org/",
    labels: [ProjectLabel.TEACHING, ProjectLabel.RUST],
  },
  {
    title: 'Kepler',
    description:
      'enter your git multiverse (a multi-award winning project at hackprinceton)',
    image: '/projects/kepler.gif',
    github: 'https://github.com/joyliu-q/kepler',
    link: "https://devpost.com/software/otis-gitgraph",
    labels: [ProjectLabel.HACKATHON, ProjectLabel.FULL_STACK],
  },
  {
    title: 'Music Graph',
    description:
      'Re-imagining music creation through nodes and networks. 1st place Winner at SunHacks.',
    image: '/projects/music-graph.jpg',
    github: 'https://github.com/joyliu-q/MusicGraph',
    link: "https://devpost.com/software/music-graph-dpm1cy",
    labels: [ProjectLabel.HACKATHON, ProjectLabel.FULL_STACK],
  },
  {
    title: 'Draw Constellations',
    description:
      'Cute cozy hackathon project that lets you draw constellations and share them with friends :D',
    image: '/projects/constellations.gif',
    github: 'https://github.com/joyliu-q/constellations',
    labels: [ProjectLabel.HACKATHON, ProjectLabel.FULL_STACK],
  },
  {
    title: 'PennApps',
    description:
      'Co-directed PennApps 2023 with 50 organizers and hundreds of attendees.',
    image: '/projects/pennapps.png',
    labels: [ProjectLabel.TEACHING],
  },
  {
    title: 'CIS1880 DevOps',
    description:
      'Taught CIS 1880 DevOps, an undergraduate course at Penn.',
    image: '/projects/cis1880.png',
    github: 'https://github.com/cis1880',
    link: "https://cis1880.org/",
    labels: [ProjectLabel.TEACHING, ProjectLabel.SYSTEMS],
  },
  {
    title: 'Beatris',
    description:
      'A Rust Tetris solving bot developed and trained for Jstris battles (Rust model/view, Python controller).',
    image: '/projects/beatris.png',
    github: 'https://github.com/Amarantheum/Beatris',
    labels: [ProjectLabel.RUST, ProjectLabel.SYSTEMS],
  },
  {
    title: 'Eddy',
    description: <Flex flexDir="column">
      <Flex>
        <b>Best Natural Language Processing Hack at Stanford TreeHacks</b>
      </Flex>
      <Flex>
        One-click brainstorming tool for ideation, note-taking, and more.
      </Flex>
    </Flex>,
    image: '/projects/eddy.png',
    github: 'https://github.com/joyliu-q/eddy',
    link: 'https://devpost.com/software/eddy-zx9uto',
    labels: [ProjectLabel.HACKATHON, ProjectLabel.FULL_STACK],
  },
  {
    title: 'Joymart',
    description: `Gamified online shopping platform (Winner of GWC-Walmart Grace Hopper Scholarship)`,
    image: '/projects/joymart.png',
    link: 'https://joymart.joyliu.dev/',
    github: 'https://github.com/joyliu-q/joymart',
    labels: [ProjectLabel.FULL_STACK],
  },
  {
    title: 'in-toto-rs',
    description:
      <Text>
        Google Summer of Code - Rust implementation of <Link variant="ghost" href="https://in-toto.io/" isExternal>in-toto</Link> for software supply chain security.
      </Text>,
    image: '/projects/gsoc.png',
    github: 'https://github.com/in-toto/in-toto-rs',
    link: 'https://in-toto.io/',
    labels: [ProjectLabel.RUST, ProjectLabel.OPEN_SOURCE, ProjectLabel.SYSTEMS],
  },
  {
    title: 'Kittyhawk',
    description:
      <Text>
        cdk that takes &lt; 20 lines of Typescript to generate a full Kubernetes YAML manifest for <Link variant="ghost" href="https://pennlabs.org/" isExternal textDecor="underline">Penn Labs</Link>.
      </Text>,
    image: '/projects/pennlabs.png',
    link: 'https://kittyhawk.pennlabs.org/',
    github: 'https://github.com/pennlabs/infrastructure/tree/master/cdk/kittyhawk',
    labels: [ProjectLabel.OPEN_SOURCE, ProjectLabel.SYSTEMS],
  },
  {
    title: 'Evoluxion',
    description:
      `Solo Contractor for sports analytics startup to develop a multi-page platform.`,
    image: '/projects/evoluxion.png',
    link: 'https://www.evoluxionsports.com',
    labels: [ProjectLabel.FULL_STACK],
  },
]