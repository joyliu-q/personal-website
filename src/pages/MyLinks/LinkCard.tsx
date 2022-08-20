import { Flex, Link, Text } from "@chakra-ui/react"
import { Link as LinkType } from "../../API"
import { THEME_COLORS } from "../../utils/colors"

export default ({ link }: { link: LinkType }) => {
  return (
    <Flex bgColor={THEME_COLORS.lightAccent} p={[4, 8]} borderRadius={4} flexDir="column" width="100%">
      <Text><b>From: </b>{link.from}</Text>
      <Text><b>To: </b><Link href={`/${link.to}`}>go.joyliu.dev/{link.to}</Link></Text>
    </Flex>
  )
}