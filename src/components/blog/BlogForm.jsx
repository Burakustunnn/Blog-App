import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const BlogForm = () => {
  const {postBlogData, getBlogData} = useBlogCalls()
  const { categories } = useSelector((state) => state.blog);
  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    slug: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlogData("blogs", info);
    setInfo({
      title: "",
      content: "",
      image: "",
      category: "",
      status: "",
      slug: "",
    });

  };

 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

   useEffect(() => {
    getBlogData("categories")
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography>New Blog</Typography>
      <FormControl sx={{ gap: 2 }}>
        <TextField
          label="Title"
          name="title"
          id="title"
          type="text"
          value={info?.title}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Image Url"
          name="image"
          id="image"
          type="url"
          value={info?.image}
          onChange={handleChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={info?.category}
          onChange={handleChange}
          name="category"
          label="Categories"
        >
          <MenuItem value="Select Category">Select Category</MenuItem>
          {categories?.map((item, index) => (
            <MenuItem key={index} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ gap: 2 }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={info?.status}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="0">Please Chose...</MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>
        </Select>

        <TextField
          label="Content"
          name="content"
          id="content"
          type="text"
          variant="outlined"
          required
          multiline
          value={info?.content}
          onChange={handleChange}
          size="medium"
          rows={4}
        />
        <Button type="submit" variant="contained">ADD NEW BLOG</Button>
      </FormControl>
    </Box>
  );
};

export default BlogForm;
