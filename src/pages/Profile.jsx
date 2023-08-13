import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
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
        sx={{ display: "flex", flexDirection: "column", gap: 4,borderRadius:"1.5rem" }}
        align="center"
      >
        <CardMedia
          component="img"
          image={image}
          height={250}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography variant="h5" mb={2}>
          Username: {username}
          </Typography>
          <Typography variant="h5" mb={2}>
            Email: {email}
          </Typography>
          <Typography variant="h5" mb={2}>
           Full Name: {`${first_name} ${last_name}`}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
