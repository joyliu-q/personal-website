import { Tag, TagLabel } from "@chakra-ui/react"
import { ProjectLabel } from "../pages/Projects/data"
import { getExtendedThemeColors } from "../utils"


export const ProjectLabelTag = ({ 
  label, 
  isDark = false,
  onClick,
  isSelected = false,
}: { 
  label: ProjectLabel, 
  isDark?: boolean,
  onClick?: () => void,
  isSelected?: boolean,
}) => {
  
  const colors = { 
    bg: isSelected ? getExtendedThemeColors(isDark).lightAccent : getExtendedThemeColors(isDark).greyLight1,
    color: isSelected ? getExtendedThemeColors(isDark).primary : getExtendedThemeColors(isDark).greyLight2
  }
  
  return (
    <Tag
      size="sm"
      borderRadius="full"
      variant="solid"
      backgroundColor={colors.bg}
      color={colors.color}
      cursor={onClick ? "pointer" : "default"}
      onClick={onClick}
      mr={1}
    >
      <TagLabel>{label}</TagLabel>
    </Tag>
  )
} 