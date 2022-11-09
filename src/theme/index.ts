type Colors = {
  purple: string;
  border: string;
  pink: string;
  green: string;
  background: string;
  white: string;
  title: string;
  base: string;
  details: string;
  inputs: string;
};

type Fonts = {
  primary: {
    regular: string;
    medium: string;
  };
  secondary: {
    regular: string;
  };
};

export type Theme = {
  colors: Colors;
  fonts: Fonts;
};

const colors: Colors = {
  background: "#F0EDF5",
  border: "#E6E6F0",
  base: "#6C6C80",
  details: "#A0A0B2",
  green: "#61C5BD",
  purple: "#6548A3",
  inputs: "#C4C4D1",
  white: "#FFF",
  pink: "#FF6680",
  title: "#3D3D4C",
};

const fonts: Fonts = {
  primary: {
    medium: "Poppins_500Medium",
    regular: "Poppins_400Regular",
  },
  secondary: {
    regular: "Roboto_400Regular",
  },
};

export const theme: Theme = { colors: colors, fonts: fonts };
