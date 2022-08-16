import { Box, Heading } from "@chakra-ui/react"
import React from "react";
import { getLinkMap, LinkData } from "../../utils";
import { THEME_COLORS } from "../../utils/colors";
import PlaneBackground from "./Plane";

export default () => {
  const [link, setLink] = React.useState(undefined as LinkData | undefined);
  React.useEffect(() => {
    const shortlink = window.location.pathname.replace(/\//g, '');

    // Find redirect link
    const redirect = getLinkMap().get(shortlink);
    setLink(redirect);

    // If no link exists, redirect to not found page
    if (!redirect) {
      window.location.href = '/not-found';
      return;
    }

    // Else redirect
    let timeoutId = setTimeout(function () {
      window.location.href = redirect.to;
      window.clearTimeout(timeoutId);		// clear time out.
    }, 2000);
  })

  return (
    <>
      <Box width="100vw" height="100vh" position="absolute" top="0" className="container-bg">
        <Heading as='h2' fontSize="xl" position="relative" top="calc(50vh - 200px - 32px)" textAlign="center" color={THEME_COLORS.lightAccent}>
          Redirecting to {link?.to}...
        </Heading>
        <Box width="100vw" height="100vh" bgColor="rgba(51, 51, 51, 0.75)" />
      </Box>
      <PlaneBackground />
    </>
  )
}