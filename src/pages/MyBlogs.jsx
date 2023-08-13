import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { Box, Grid, IconButton } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import { useSelector } from "react-redux";

const MyBlogs = () => {
  const { getBlogData } = useBlogCalls();
  const { currentUser } = useSelector((state) => state.auth);
  const { myBlogs,blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    getBlogData(`blogs/?author=${currentUser.id}`);
  }, [blogs]);
  return (
    <Box
      sx={{
        p: 4,
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {myBlogs
        ?.filter((blog) => blog.author === currentUser.username)
        .map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
    </Box>
  );
};

export default MyBlogs;
