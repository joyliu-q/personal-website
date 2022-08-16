import { Flex, Link, Text } from "@chakra-ui/react"
import { LinkData } from "../../utils"
import { THEME_COLORS } from "../../utils/colors"

export default ({ link }: { link: LinkData }) => {
  return (
    <Flex bgColor={THEME_COLORS.lightAccent} p={[4, 8]} borderRadius={4} flexDir="column" width="100%">
      <Text><b>From: </b><Link href={`/${link.from}`}>go.joyliu.dev/{link.from}</Link></Text>
      <Text><b>To: </b>{link.to}</Text>
    </Flex>
  )
}