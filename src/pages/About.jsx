import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const iconIn = {
  color: "black",
  "&:hover": {
    color: "blue",
  },
};
const iconYou = {
  color: "black",
  "&:hover": {
    color: "red",
  },
};

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",          
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          padding: "2rem",
          gap: "1rem",
          borderRadius:"11rem"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70",
          }}
        >
          <CardMedia
            height="70"
            component="img"
            alt="images"
            image="https://yt3.googleusercontent.com/Pxy6Gs0TFirxYVZe23JT0-k77vh_3uwvUn0tIwWPlZImCMz5c9BEiXo5AyrZtVHQ0DdV8uA5uQ=s900-c-k-c0x00ffffff-no-rj"
            sx={{
              objectFit: "contain",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70",
              width: "25",
            }}
          />
        </Box>

        <CardContent>
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "fantasy" }}
          >
            Burak ÜSTÜN
          </Typography>
          <Typography variant="h6" align="center">
            Frontend Developer
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <LinkedInIcon fontSize="large" sx={iconIn} />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="large" sx={iconIn} />
          </IconButton>
          <IconButton>
            <YouTubeIcon fontSize="large" sx={iconYou} />
          </IconButton>
          <IconButton>
            <InstagramIcon fontSize="large" sx={iconYou} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default About;
