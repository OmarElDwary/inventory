// color design tokens export
export const tokensDark = {
grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e5e8e8",
    200: "#ccd1d1",
    300: "#b2babb",
    400: "#99a3a4",
    500: "#7f8c8d",
    600: "#667071",
    700: "#4c5455",
    800: "#333838",
    900: "#191c1c",
    1000: "#000000", // manually adjusted
},
primary: {
    //blue
    100: "#d4e6f1",
    200: "#a9cce3",
    300: "#7fb3d5",
    400: "#5499c7",
    500: "#2980b9",
    600: "#216694",
    700: "#194d6f",
    800: "#10334a",
    900: "#081a25"
},
yellow: {
    50: "#f1c40f",
    100: "#fdebd0",
    200: "#fad7a0",
    300: "#f8c471",
    400: "#f5b041",
    500: "#f39c12",
    600: "#c27d0e",
    700: "#925e0b",
    800: "#613e07",
    900: "#311f04"
},
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              yellow: {
                ...tokensDark.yellow,
                main: tokensDark.yellow[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              yellow: {
                ...tokensLight.yellow,
                main: tokensDark.yellow[600],
                light: tokensDark.yellow[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };