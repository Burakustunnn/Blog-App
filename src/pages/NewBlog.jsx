import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import BlogForm from "../components/blog/BlogForm";

const NewBlog = () => {
  return (
    <Box      
      align="center"
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          p: 2,
          width: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            borderRadius:"1rem"
        }}
      >
        <BlogForm />
      </Card>
    </Box>
  );
};

export default NewBlog;
