import { Box, Stack, TextField, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      mt='1rem'
      variant="h3"
      sx={{
        width: "100%",
        padding: "2rem 0",
        background: "linear-gradient(60deg, #FFE2B7, #FFFAFB)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontWeight="bold" fontSize={{ xs: "20px", md: "30px" }}>
        Created By: Eslam Naguib ♥️😀
      </Typography>
    </Box>
  );
};
export default Footer;
