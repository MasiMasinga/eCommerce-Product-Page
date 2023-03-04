import React from "react";

// Mui
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// Mui Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Images
import Logo from "../../../assets/svg/logo.svg";

// Utils
import { Colors } from "../../../common/utils/constants";

const LogoComponent = styled("img")({
  height: 30,
  width: "100%",
  paddingRight: 30,
});

const Navbar = () => {
  return (
    <Stack justifyContent="center" sx={{ width: "100vw", height: 100 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={3}
        sx={{ px: 25 }}
      >
        <Stack direction="row" alignItems="center">
          <LogoComponent src={Logo} />
          <Stack direction="row" alignItems="center" spacing={3}>
            <Link href="#" underline="none">
              <Typography variant="body1">Collections</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography variant="body1">Men</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography variant="body1">Women</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography variant="body1">About</Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography variant="body1">Contact</Typography>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <IconButton>
            <ShoppingCartIcon fontSize="large" sx={{ color: Colors.black }} />
          </IconButton>
          <IconButton>
            <AccountCircleIcon fontSize="large" sx={{ color: Colors.black }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
