import { Flex } from "@chakra-ui/react"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

export default ({children}: {children: ReactJSXElement | string}) => {
  return (
    <Flex bgColor="#FFFFFF" p={[4, 8]} borderRadius={4}>
      {children}
    </Flex>
  )
}