import React, { useState } from "react";
import "./ChatbotPanel.css";
import userProfile from "../../assets/UserPrfile.png";
import { ReactComponent as LikeIcon } from "../../assets/Icons/LikeIcon.svg";
import { ReactComponent as VoiceIcon } from "../../assets/Icons/VoiceIcon.svg";
import { ReactComponent as ThumbsUp } from "../../assets/Icons/Thumbs-up.svg";
import { ReactComponent as ThumbsDown } from "../../assets/Icons/Thumbs-down.svg";
import { ReactComponent as Copy } from "../../assets/Icons/copy.svg";
import { ReactComponent as Regenerate } from "../../assets/Icons/Regenerate.svg";
import { ReactComponent as CopyLink } from "../../assets/Icons/CopyLink.svg";
import { ReactComponent as Share } from "../../assets/Icons/Share.svg";
import { ReactComponent as Save } from "../../assets/Icons/Save.svg";
import { ReactComponent as Edit } from "../../assets/Icons/Edit.svg";
import { ReactComponent as SendIcon } from "../../assets/Icons/SendIcon.svg";
import {
  TextField,
  IconButton,
  Tooltip,
  Box,
  InputAdornment,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ChatbotPanel = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const iconButtonStyles = {
    backgroundColor: "#fff",
    borderRadius: "4px",
    padding: "4px",
    color: "#36393D!important",
    "&:hover": {
      backgroundColor: "#36393D14", 
    },
  };
  const iconButtonStylesSend = {
    backgroundColor: "#D5DAE7",
    borderRadius: "4px",
    padding: "4px",
    color: "#36393D!important",
    "&:hover": {
      backgroundColor: "#CACDD7",
    },
  };
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");

      // Simulate a bot response after 1 second
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Thank you for reaching out. We appreciate your inquiry and are here to assist you. Please let us know if you need any further information or have additional questions. We're committed to providing the best support possible and look forward to helping you.",
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  const handleEditMessage = () => {
    // Handle editing the message
  };

  const handleCopyQuestion = () => {
    // Handle copying the user's question
  };

  const handleSaveQuestion = () => {
    // Handle saving the user's question
  };

  const handleCopyText = () => {
    // Handle copying the bot's response
  };

  const handleRegenerateResponse = () => {
    // Handle regenerating the bot's response
  };

  const handleCopyLink = () => {
    // Handle copying the link in the bot's response
  };

  const handleShareResponse = () => {
    // Handle sharing the bot's response
  };

  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <>
              <div
                key={index}
                className={`chat-message ${
                  message.isUser ? "user-message" : "bot-message"
                }`}
              >
                <div className="userDetailsContainer">
                  {message.isUser ? (
                    <img src={userProfile} alt="" className="userProfile" />
                  ) : null}
                  <div className={`details ${message.isUser ? null : "mb-2"}`}>
                    <div className="actionBtn">
                      <IconButton sx={{ padding: "2px" }}>
                        <VoiceIcon style={{ width: 24, height: 24 }} />
                      </IconButton>
                      <IconButton sx={{ padding: "4px" }}>
                        <LikeIcon style={{ width: 20, height: 20 }} />
                      </IconButton>
                    </div>
                    <p className="sentMsgTimeResponseTime">2 min ago</p>
                  </div>
                </div>
                <p className={`message ${message.isUser ? "ml-48" : null}`}>
                  {message.text}
                </p>
                {message.isUser ? null : (
                  <div className="actionBtn mt-2">
                    <IconButton sx={{ padding: "4px" }}>
                      <ThumbsUp style={{ width: 20, height: 20 }} />
                    </IconButton>
                    <IconButton sx={{ padding: "4px" }}>
                      <ThumbsDown style={{ width: 20, height: 20 }} />
                    </IconButton>
                  </div>
                )}
              </div>

              {console.log(message.isUser, "message.user")}
              <div
                className={`chat-options ${
                  message?.isUser ? "right" : " left"
                }`}
              >
                {message.isUser ? (
                  <>
                    <button onClick={handleSaveQuestion}>
                      <Save style={{ width: 20, height: 20 }} /> Save Question
                    </button>
                    <button onClick={handleCopyQuestion}>
                      {" "}
                      <Copy style={{ width: 20, height: 20 }} />
                      Copy Question
                    </button>
                    <button onClick={handleEditMessage}>
                      <Edit style={{ width: 20, height: 20 }} />
                      Edit
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={handleCopyText}>
                      <Copy style={{ width: 20, height: 20 }} />
                      Copy Text
                    </button>
                    <button onClick={handleRegenerateResponse}>
                      <Regenerate style={{ width: 20, height: 20 }} />
                      Regenerate Response
                    </button>
                    <button onClick={handleCopyLink}>
                      {" "}
                      <CopyLink style={{ width: 20, height: 20 }} />
                      Copy Link
                    </button>
                    <button onClick={handleShareResponse}>
                      <Share style={{ width: 20, height: 20 }} />
                      Share
                    </button>
                  </>
                )}
              </div>
              {/* // </div> */}
            </>
          ))}
        </div>
        <div className="chatbot-input">
          <div className="additionalItemsContainer">
            <Tooltip title="Prompt">
              <IconButton sx={iconButtonStyles}>
                <NotesIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Upload File">
              <IconButton sx={iconButtonStyles}>
                <CloudUploadIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Save">
              <IconButton sx={iconButtonStyles}>
                <SaveIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Select Date">
              <IconButton sx={iconButtonStyles}>
                <CalendarTodayIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
          </div>
          <TextField
            id="input-with-icon-textfield"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            variant="outlined"
            sx={{
              color: "#36393D!important",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none", 
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
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
              startAdornment: (
                <InputAdornment position="start">
                  <KeyboardVoiceIcon sx={{ width: 20, height: 20 }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ width: 28, height: 28 }}>
                  <IconButton
                    edge="end"
                    sx={iconButtonStylesSend}
                    onClick={handleSendMessage}
                  >
                    <SendIcon sx={{ width: 20, height: 20 }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatbotPanel;
