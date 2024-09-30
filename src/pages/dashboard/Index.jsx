import React, { useState } from "react";
import { useColorMode } from "../../style/ColorModeContext";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import ChatbotPanel from "../../components/ChatbotPanel/ChatbotPanel";
import ListItem from "../../components/ListItem/ListItem";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const IconButtonSearch = {
  backgroundColor: "#D5DAE7",
  borderRadius: "8px",
  padding: "4px",
  color: "#36393D!important",
  "&:hover": {
    backgroundColor: "#CACDD7",
  },
};

const dummyData = [
  {
    title: "Design Thinking",
    time: "2 min ago",
    description: "Design thinking is a problem-solving approach",
  },
  {
    title: "User Experience",
    time: "10 min ago",
    description: "Enhancing user satisfaction by improving usability",
  },
  {
    title: "Agile Methodology",
    time: "20 min ago",
    description: "An iterative approach to software development",
  },
  {
    title: "Wireframing",
    time: "30 min ago",
    description: "Creating visual guides to suggest layout and functionality",
  },
  {
    title: "Prototyping",
    time: "45 min ago",
    description: "Building early models of a product to test concepts",
  },
  {
    title: "UI Design",
    time: "1 hour ago",
    description: "Designing the user interface to enhance usability",
  },
  {
    title: "Prototyping",
    time: "45 min ago",
    description: "Building early models of a product to test concepts",
  },
  {
    title: "UI Design",
    time: "1 hour ago",
    description: "Designing the user interface to enhance usability",
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [chatHistory, setChatHistory] = useState(dummyData);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          height: "calc(100dvh - 48px)",
        }}
      >
        <Box
          display="flex"
          sx={{
            background: "transparent!important",
            borderRadius: "12px",
          }}
          width="100%"
          height={"95dvh"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            border={"0.800px solid #eeeff1"}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              overflowY: "auto",
              mr: { sm: "12px", md: "24px" },
              minWidth: {
                xs: "100%",
                sm: "auto",
                md: "400px",
              },
            }}
          >
            <Box>
              <HeaderTitle title={"Chat History"} badgeValue={"23"} />
            </Box>
            <Box px={3} py={2}>
              <TextField
                id="input-with-icon-textfield"
                type="text"
                placeholder="Type your message..."
                size="small"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      border: "1px solid #CDCECF",
                    },
                    "&:hover fieldset": {
                      border: "1px solid #CDCECF",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #CDCECF",
                    },
                    "& .MuiInputBase-input": {
                      color: "#36393D",
                    },
                  },
                  "& .MuiInputAdornment-root": {
                    color: "#36393D",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{ width: 36, height: 28 }}
                    >
                      <IconButton edge="end" sx={IconButtonSearch}>
                        <SearchRoundedIcon sx={{ width: 20, height: 20 }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box
              width="100%"
              className="list"
              sx={{
                borderRadius: "0 0 9px 9px",
                backgroundColor: "#fff",
                pl: 2,
                pr: 2,
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "4px", 
                  marginRight: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  borderRadius: "8px", 
                  backgroundColor: "transparent", 
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: "8px",
                  backgroundColor: "#C7C8C9",
                },
              }}
            >
              {chatHistory.map((item, index) => (
                <ListItem
                  key={index}
                  title={item.title}
                  time={item.time}
                  description={item.description}
                />
              ))}
            </Box>
          </Box>

          {!isSmallScreen ? (
            <Box
              width="100%"
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                height: "inherit",
              }}
            >
              <HeaderTitle title={"Design Thinking"} />
              <ChatbotPanel />
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
