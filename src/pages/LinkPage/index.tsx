import { Box, Heading } from "@chakra-ui/react"
import React from "react";
import { getLinkMap, LinkData } from "../../utils";
import { THEME_COLORS } from "../../utils/colors";
import Typed from "typed.js";
import BirdBackground from "./Bird";

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
    }, 5000);
  }, [])

  // Create reference to store the Typed wrapper
  const el = React.useRef(null as any);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null as any);

  React.useEffect(() => {
    // Typer logic
    const options = {
      strings: [
        `Redirecting to ${link?.to}...`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current as string | Element, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [link])

  return (
    <>
      <Box width="100vw" height="100vh" position="absolute" top="0" zIndex={3}>
        <Heading as='h2' fontSize="xl" position="relative" top="calc(100vh - 72px)" textAlign="center" color={THEME_COLORS.base} fontWeight="normal">
          <div className="wrap">
            <div className="type-wrap">
              <span
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                ref={el}
              />
            </div>
          </div>
        </Heading>
      </Box>
      <BirdBackground />
    </>
  )
}