import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { image, username, email, first_name, last_name } = currentUser;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Card
        sx={{display: "flex", flexDirection: "column", gap: 4,borderRadius:"1.5rem",margin: "1rem 0",}}
        align="center"
      >
        <CardMedia
          component="img"
          image={image}
          height={250}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography variant="h6" mb={2}>
         <Typography variant="span" sx={{color:"#858585"}}>Username: </Typography> {username}
          </Typography>
          <Typography variant="h6" mb={2}>
          <Typography variant="span" sx={{color:"#858585"}}>Email:</Typography> {email}
          </Typography>
          <Typography variant="h6" mb={2}>
          <Typography variant="span" sx={{color:"#858585"}}>Full Name:</Typography> {`${first_name} ${last_name}`}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
