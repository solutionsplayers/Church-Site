// import { useState } from "react";
// import { Box, Tabs, Tab, Stack } from "@mui/material";
// import { Text } from "../../../../components/base";
// import BlogData from "./BlogData";
// import PublicNews from "./PublicNews";
// import InspirationalMessage from "./InspirationalMessage";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const CategoriesTabs = ({ children }) => {
//   const [value, setValue] = useState(0);

//   const categories = [
//     "Our Latest Blog",
//     "Inspirational message",
//     "Public News",
//   ];

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box
//         sx={{
//           borderBottom: 10,
//           borderColor: "#00000",
//           zIndex: -10,
//           position: "relative",
//           top: { xs: 48, lg: 49 },
//         }}
//       />
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         aria-label="basic tabs example"
//         variant="fullWidth"
//         sx={{
//           "& .MuiTabs-indicator": {
//             backgroundColor: "red",
//             height: 10,
//           },
//           "Button.Mui-selected": { color: "red" },
//           pb: 4,
//         }}
//       >
//         {categories.map((category, index) => (
//           <Tab
//             key={index}
//             label={category}
//             {...a11yProps(index)}
//             sx={{
//               fontWeight: { xs: 600, lg: 800 },
//               fontSize: { xs: "8px", sm: "12px", md: "16px", lg: "20px" },
//               backgroundColor: "transparent",
//               width: "100%",
//               margin: "0 auto",
//               color: "#000000",
//             }}
//             disableRipple={true}
//           />
//         ))}
//       </Tabs>

//       {categories.map((category, index) => (
//         <CustomTabPanel key={index} value={value} index={index}>
//           {value === 0 ? (
//             // <BlogData />
//           ) : value === 1 ? (
//             <InspirationalMessage />
//           ) : (
//             <PublicNews />
//           )}
//         </CustomTabPanel>
//       ))}
//     </Box>
//   );
// };

// export default CategoriesTabs;
