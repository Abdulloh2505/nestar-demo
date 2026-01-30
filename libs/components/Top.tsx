import { Logout } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Top = () => {
  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  return (
    <Stack className={"navbar"}>
      <Stack className={"navbar-main"}>
        <Stack className={"container"}>
          <Box component={"div"} className={"logo-box"}>
            <img 
              src="/img/logo/logoWhite.svg" 
              alt="" 
              onClick={() => handleNavigation("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box component={"div"} className={"router-box"}>
            <div onClick={() => handleNavigation("/")}>Home</div>
            <div onClick={() => handleNavigation("/property")}>Properties</div>
            <div onClick={() => handleNavigation("/agent")}>Agents</div>
            <div onClick={() => handleNavigation("/community?articleCategory=FREE")}>Community</div>
            <div onClick={() => handleNavigation("/cs")}>CS</div>
          </Box>
          <Box component={"div"} className={"user-box"}>
            <>
              <div className={"login-user"}>
                <img src={"/img/profile/defaultUser.svg"} alt="" />
              </div>
              <Menu id="basic-menu" sx={{ mt: "5px" }} open={false}>
                <MenuItem>
                  <Logout
                    fontSize="small"
                    style={{ color: "blue", marginRight: "10px" }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Top;