export const THEME_COLORS = {
  dark: "#333333",
  light: "#FFFFFF",
  darkAccent: "#741D7B",
  lightAccent: "#EEDDFF",
}

export const getExtendedThemeColors = (isDark = false) => {
  return isDark ? DARK_THEME_COLORS_EXTENDED : THEME_COLORS_EXTENDED;
}

const DARK_THEME_COLORS_EXTENDED = {
  primary: '#b96aff',
  primaryDark: '#5b0eeb',
  greyLight1: '#333333',
  greyLight2: '#1E1E1E',
  greyLight3: '#291E30',
  greyDark: '#b96aff',
  lightAccent: "#EEDDFF",
}

const THEME_COLORS_EXTENDED = {
  primary: '#D4A5FE',
  primaryDark: '#5b0eeb',
  greyLight1: '#f2f0f9',
  greyLight2: '#d9d7f1',
  greyLight3: '#291E30',
  greyDark: '#9baacf',
  lightAccent: "#EEDDFF",
}