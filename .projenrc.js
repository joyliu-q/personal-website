const { web } = require("projen");
const project = new web.ReactTypeScriptProject({
  defaultReleaseBranch: "main",
  name: "personal-website",
  deps: [
    "react-router-dom",
    "@chakra-ui/react",
    '@chakra-ui/icons',
    "react-markdown",
    "framer-motion",
    "@emotion/react@^11",
    "@emotion/styled@^11",
    'react-icons',
    "rehype-raw",
    'sass',
    "shiki",
  ],
  depsUpgrade: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
project.addFields({['proxy']: 'http://localhost:3000'});