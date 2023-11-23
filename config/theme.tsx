import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
    "#e4f7ff",
    "#cdeaff",
    "#9cd3ff",
    "#66bbfe",
    "#3ea6fc",
    "#2699fc",
    "#1592fe",
    "#007fe3",
    "#0070cb",
    "#0061b4"
  ]

export const theme = createTheme({
  colors: {
    myColor,
  }
});