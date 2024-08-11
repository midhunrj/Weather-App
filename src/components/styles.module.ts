// import styled from "styled-components";


// export const MainWrapper = styled.div`
// height: 120vh;
// background: linear-gradient(to right, #c7c7eb, #ccf2dd);
// .container {
// background-color: #ffffff7d;
// border-radius: 12px;
// padding: 1rem;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
// box-sizing: border-box;
// color: rgba(0, 0, 0, 0.8);
// background-blend-mode: overlay;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;
// position: absolute;
// }


// .searchArea {
// margin-top: 20px;
// display: flex;
// justify-content: space-evenly;
// align-items: center;
// width: 100%;
// }

// .container{
//     height:100vh;
//     margin-top:20px;
// }
// .searchArea > input {
// outline: none;
// border: none;
// border: 1px solid grey;
// padding: 8px;
// border-radius: 20px;
// text-align: center;
// width: 80%;
// background: transparent;
// }
// .searchcircle {
// border: 1px solid grey;
// width: 30px; /* Adjust the width of the circle as needed */
// height: 30px; /* Ensure the height matches the width for a perfect circle */
// border-radius: 50%;
// display: flex;
// justify-content: center;
// align-items: center;
// cursor: pointer;


// > .searchIcon {
// font-size: 20px;
// color: grey;
// }
// }


// .weatherArea {
// display: flex;
// align-items: center;
// flex-direction: column;
// margin: 30px 0;



// > .icon {
// font-size: 9rem;



// }


// > h1 {
// font-size: 2rem;


// font-family: "Bebas Neue", sans-serif;
// }


// > span {
// margin-bottom: 10px;
// font-family: "Inter", sans-serif;
// }


// > h2 {
// font-size: 1.5rem;
// font-family: "Inter", sans-serif;
// font-weight: 400;
// }
// }


// .bottomInfoArea {
// display: flex;
// align-items: center;
// justify-content: space-around;
// font-family: "Josefin Sans", sans-serif;
// margin: 10px;
// background: linear-gradient(
// 90deg,
// rgba(243, 255, 253, 1) 0%,
// rgba(253, 255, 232, 1) 100%
// );
// border-radius: 12px;
// padding: 10px;
// }
// .humidityLevel,
// .wind {
// display: flex;
// align-items: center;
// margin: 0 20px;


// > .humidIcon {
// font-size: 3rem;
// }
// }


// .windIcon {
// font-size: 2rem;
// margin-right: 10px;
// }


// .loading {
// height: 400px;
// width: 300px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// z-index: 9999;


// .loadingIcon {
// font-size: 3rem;
// /* DO LATER NOT WHEN CREATING UI */
// animation: spin 2s linear infinite;
// }
// p {
// font-size: 22px;
// margin-top: 10px;
// font-family: "Josefin Sans", sans-serif;
// }
// }



// @keyframes spin {
// from {
// transform: rotate(0deg);
// }
// to {
// transform: rotate(360deg);
// }
// }
// `;

// import styled from "styled-components";

// export const MainWrapper = styled.div<{ themeMode: string }>`
//   height: 120vh;
//   background: ${({ themeMode }) =>
//     themeMode === "black"
//       ? "linear-gradient(to right, #1a1a1d, #4e4e50)"
//       : "linear-gradient(to right, #c7c7eb, #ccf2dd)"};

//   .container {
//     background-color: ${({ themeMode }) =>
//       themeMode === "black" ? "#3333337d" : "#ffffff7d"};
//     color: ${({ themeMode }) =>
//       themeMode === "black" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"};
//     border-radius: 12px;
//     padding: 1rem;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
//     box-sizing: border-box;
//     background-blend-mode: overlay;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     position: absolute;
//     width:400px;
//   }

//   .searchArea {
//     margin-top: 40px;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     width: 100%;
//   }

//   .searchArea > input {
//     outline: none;
//     border: none;
//     border: 1px solid grey;
//     padding: 8px;
//     border-radius: 20px;
//     text-align: center;
//     width: 80%;
//     background: transparent;
//     color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "#000")};
//   }

//   .searchcircle {
//     border: 1px solid grey;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;

//     > .searchIcon {
//       font-size: 20px;
//       color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "grey")};
//     }
//   }

//   .weatherArea {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     margin: 30px 0;

//     > .icon {
//       font-size: 9rem;
//     }

//     > h1 {
//       font-size: 2rem;
//       font-family: "Bebas Neue", sans-serif;
//     }

//     > span {
//       margin-bottom: 10px;
//       font-family: "Inter", sans-serif;
//     }

//     > h2 {
//       font-size: 1.5rem;
//       font-family: "Inter", sans-serif;
//       font-weight: 400;
//     }
//   }

//   .bottomInfoArea {
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//     font-family: "Josefin Sans", sans-serif;
//     margin: 10px;
//     background: ${({ themeMode }) =>
//       themeMode === "black"
//         ? "linear-gradient(90deg, rgba(43, 43, 43, 1) 0%, rgba(64, 64, 64, 1) 100%)"
//         : "linear-gradient(90deg, rgba(243, 255, 253, 1) 0%, rgba(253, 255, 232, 1) 100%)"};
//     border-radius: 12px;
//     padding: 10px;
//   }

//   .humidityLevel,
//   .wind {
//     display: flex;
//     align-items: center;
//     margin: 0 20px;

//     > .humidIcon {
//       font-size: 3rem;
//     }
//   }

//   .windIcon {
//     font-size: 2rem;
//     margin-right: 10px;
//   }

//   .loading {
//     height: 400px;
//     width: 300px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     z-index: 9999;

//     .loadingIcon {
//       font-size: 3rem;
//       animation: spin 2s linear infinite;
//     }

//     p {
//       font-size: 22px;
//       margin-top: 10px;
//       font-family: "Josefin Sans", sans-serif;
//     }
//   }

//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;


import styled from "styled-components";

export const MainWrapper = styled.div<{ themeMode: string }>`
  height: 120vh;
  background: ${({ themeMode }) =>
    themeMode === "black"
      ? "linear-gradient(to right, #1a1a1d, #4e4e50)"
      : "linear-gradient(to right, #c7c7eb, #ccf2dd)"};
  
  color: ${({ themeMode }) => (themeMode === "black" ? "#ffffff" : "#000000")}; // Universal text color

  .container {
    background-color: ${({ themeMode }) =>
      themeMode === "black" ? "#121212" : "#ffffff7d"};
    color: ${({ themeMode }) =>
      themeMode === "black" ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.8)"};
    border-radius: 12px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top:50px;
    width:25%;
    backdrop-filter: ${({ themeMode }) => (themeMode === "black" ? "blur(10px)" : "blur(5px)")};
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: 1px solid ${({ themeMode }) => (themeMode === "black" ? "#fff" : "grey")};
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
    color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "#000")};
  }

  .searchcircle {
    border: 1px solid ${({ themeMode }) => (themeMode === "black" ? "#fff" : "grey")};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .searchIcon {
      font-size: 20px;
      color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "grey")};
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;

    > .icon {
      font-size: 9rem;
      color: ${({ themeMode }) => (themeMode === "black" ? "#ffc436" : "#102c57")}; // Icon color change based on theme
    }

    > h1 {
      font-size: 2rem;
      font-family: "Bebas Neue", sans-serif;
      color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "#000")}; // Heading color based on theme
    }

    > span {
      margin-bottom: 10px;
      font-family: "Inter", sans-serif;
      color: ${({ themeMode }) => (themeMode === "black" ? "#f0f0f0" : "#000")}; // Subheading color based on theme
    }

    > h2 {
      font-size: 1.5rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      color: ${({ themeMode }) => (themeMode === "black" ? "#d4d4d4" : "#333")}; // Subheading color based on theme
    }
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif;
    margin: 10px;
    background: ${({ themeMode }) =>
      themeMode === "black"
        ? "linear-gradient(90deg, rgba(43, 43, 43, 1) 0%, rgba(64, 64, 64, 1) 100%)"
        : "linear-gradient(90deg, rgba(243, 255, 253, 1) 0%, rgba(253, 255, 232, 1) 100%)"};
    border-radius: 12px;
    padding: 10px;
    color: ${({ themeMode }) => (themeMode === "black" ? "#ffffff" : "#121212")}; // Text color change based on theme
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
      color: ${({ themeMode }) => (themeMode === "black" ? "#4fc3f7" : "#00acc1")}; // Icon color based on theme
    }
  }

  .windIcon {
    font-size: 2rem;
    margin-right: 10px;
    color: ${({ themeMode }) => (themeMode === "black" ? "#4fc3f7" : "#00acc1")}; // Icon color based on theme
  }

  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
      color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "#000")}; // Loader icon color based on theme
    }

    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
      color: ${({ themeMode }) => (themeMode === "black" ? "#fff" : "#000")}; // Loading text color based on theme
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
