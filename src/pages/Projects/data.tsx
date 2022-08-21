import { Link, Text } from "@chakra-ui/react";

export interface Project {
  title: string; // name of project
  description: string | JSX.Element; // short description
  image: string; // image displayed for project
  link?: string; // url for project
  github?: string; // github link
}

export const PROJECT_LIST: Project[] = [
  {
    title: 'Joymart',
    description: `Joymart is an imaginary online shopping platform where I explored 
     bringing the personal touch of in-person shopping into a convenient virtual
     experience.`,
    image: '/projects/joymart.png',
    link: 'https://joymart.joyliu.dev/',
    github: 'https://github.com/joyliu-q/joymart',
  },
  {
    title: 'Kittyhawk',
    description:
      <Text>
        Designed as an in-house cdk to simplify the CI/CD workflow, Kittyhawk is the automated Kubernetes YAML generator for <Link variant="ghost" href="https://pennlabs.org/" isExternal>Penn Labs</Link>, used across all 11 products serving all Penn students.
      </Text>,
    image: '/projects/pennlabs.png',
    link: 'https://kittyhawk.pennlabs.org/',
    github: 'https://github.com/pennlabs/infrastructure/tree/master/cdk/kittyhawk',
  },
  {
    title: 'in-toto-rs',
    description:
      <Text>
        Google Summer of Code project - A native Rust implementation of <Link variant="ghost" href="https://in-toto.io/" isExternal>in-toto</Link>, a framework to secure the integrity of software supply chains.
      </Text>,
    image: '/projects/gsoc.png',
    github: 'https://github.com/in-toto/in-toto-rs',
    link: 'https://in-toto.io/',
  },
  {
    title: 'Beatris',
    description:
      'A Tetris solving bot developed and trained for Jstris battles (Rust model/view, Python controller).',
    image: '/projects/beatris.png',
    github: 'https://github.com/Amarantheum/Beatris',
  }
]