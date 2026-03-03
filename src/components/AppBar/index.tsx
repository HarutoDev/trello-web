import ModeSelect from "@/components/ModeSelect";
import { Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import trelloLogo from "@/assets/trello.svg";

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme: any) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <AppsIcon sx={{ color: "primary.main" }} />
        <img src={trelloLogo} />
      </Box>

      <Box>
        <ModeSelect />
      </Box>
    </Box>
  );
}

export default AppBar;
