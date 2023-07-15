import { Avatar, Container, Grid, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();
  return (
    <Container>
      <Grid
        container
        rowSpacing={{ sm: 3 }}
        justifyContent="center"
        sx={{ p: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color="primary" align="center">
            BLOG APP
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
