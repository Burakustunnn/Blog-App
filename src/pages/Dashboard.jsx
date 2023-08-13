import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import { useSelector } from "react-redux";
import Box  from "@mui/material/Box";

const Dashboard = () => {
  const { getBlogData } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (  
      <Box        
        sx={{ minHeight: "85vh", width: "100%",display: "flex",alignItems:"start",justifyContent: "center",gap:"2rem",margin:"2rem 0",flexWrap:"wrap"}}
      >
        {blogs
          ?.filter((blog) => blog.status == "p")
          .map((item, index) => (
            <BlogCard item={item} key={index} />
          ))}
      </Box>
 
  );
};

export default Dashboard;
