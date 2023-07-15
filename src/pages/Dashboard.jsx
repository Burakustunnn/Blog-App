import BlogCard from "../components/blog/BlogCard";
import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";

const Dashboard = () => {
  const { getBlogData } = useBlogCalls();

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return <BlogCard />;
};

export default Dashboard;
