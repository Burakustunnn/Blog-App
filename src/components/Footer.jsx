import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box align="center" p={3} sx={{backgroundColor:"primary.main",color:"white"}} > 
      <Typography>Developer Burak</Typography>
      <Typography>Copyright ©️ Burak {new Date().getFullYear()}</Typography>
    </Box>
  )
};

export default Footer;
