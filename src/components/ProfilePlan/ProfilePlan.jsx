import React from "react";
import "./ProfilePlan.css";
import userImg from "../../assets/UserPrfile.png";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
// Define a custom styled button
const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#0F1E46',
    '&:hover': {
      backgroundColor: '#f5f5f5', 
      color: '#0F1E46', 
    },
    width:"100%",
    boxShadow:"none",
    border: 'none',
    textTransform: 'none', 
  }));

const ProfilePlan = ({ username, mail, currentPlan,btnText }) => {
  return (
    <div className="ProfilePlanWrapper">
      <div className="detailsWrapper">
        <div className="userDetails">
          <img src={userImg} alt="" className="userProfile" />
          <div className="contactDetails">
            <h6 className="userName">{username}</h6>
            <p className="mailId">{mail}</p>
          </div>
        </div>
        <p className="currentPlan">{currentPlan}</p>
      </div>
      <CustomButton variant="contained" sx={{mt:2}}><RocketLaunchOutlinedIcon sx={{fontSize:'20px!important', mr:'12px'}}/>{btnText}</CustomButton>
    </div>
  );
};

export default ProfilePlan;
