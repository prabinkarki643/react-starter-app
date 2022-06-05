import React from "react";
import { Avatar } from "antd";
import { Typography } from "antd";
import { Image } from "antd";

function SidebarProfile({avatarStyle,hideText=false,containerStyle}) {
  return (
      <div style={{ textAlign: "center",...containerStyle }}>
        <Avatar
          src={<Image src="https://joeschmoe.io/api/v1/random" preview={false}/>}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
            alignSelf: "center",
            ...avatarStyle
          }}
        />
      {!hideText &&  <>
        <Typography.Text style={{ display: "block", marginTop: 20 }}>
          <Typography.Text style={{ fontWeight: "bold" }}>
            Abhishek
          </Typography.Text>{" "}
          Pokharel <img style={{marginLeft:5}} src={require('../../assets/images/verified.png')}/>
        </Typography.Text>
        <Typography.Text
          type="secondary"
          style={{ display: "block", fontSize: 10 }}
        >
          Admin (Cheif Executive Officer)
        </Typography.Text>
        </>}
      </div>
  );
}

export default SidebarProfile;
