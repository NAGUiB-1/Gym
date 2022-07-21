import {CircularProgress, Box} from "@mui/material";
let Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <CircularProgress size={80} color="secondary" />
    </Box>
  );
};

export default Loader