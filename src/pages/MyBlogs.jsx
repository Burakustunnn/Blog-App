import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";


const MyBlogs = () => {
  const { getBlogData } = useBlogCalls();
  const { currentUser } = useSelector((state) => state.auth);
  const {myBlogs} = useSelector((state)=>state.blog)

  useEffect(() => {
    getBlogData(`blogs/?author=${currentUser.id}`)
  }, []);

  console.log(myBlogs)

  return(
     <Grid container align="center"
     sx={{p:4, minHeight:"90vh", display:"flex",alignItems:"center"}}
 >
   {myBlogs?.filter((blog)=>blog.author === currentUser.username)
        .map((item)=>(
           <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
             <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "15px",
                flexWrap: "nowrap",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item?.image}
                sx={{ p: 1, borderRadius: 5, objectFit: "contain" }}
              />
              <CardContent sx={{ height: "100%" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="justify"
                >
                  {item.content}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="right"
                  mt={2}
                >
                  {new Date(item.publish_date).toLocaleDateString()}
                </Typography>
                <Typography
                  sx={{ display: "flex", alignItems: "center", mt: 2 }}
                >
                  <AccountCircleIcon />
                  <span>{item.author}</span>
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    color="secondary"
                    // onClick={() => addLike(`likes/${item?.id}`)}
                  >
                    <FavoriteIcon
                      sx={{
                        color:
                          item?.likes_n.filter(
                            (i) => i.user_id === currentUser.id
                          )[0] && "red",
                      }}
                    />

                    <span>{item.likes}</span>
                  </IconButton>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                    <span>{item.comment_count}</span>
                  </IconButton>
                  <IconButton>
                    <VisibilityIcon />
                    <span>{item.post_views}</span>
                  </IconButton>
                </Box>
                <Button
                  size="small"
                  sx={{ display:"flex",
                  justifyContent:"center",
                  aligItems:"center"}}
                  variant="contained"
                  // onClick={() => navigate(`/detail/${item?.id}`)}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
               
            </Grid>
        ))}
     
 </Grid>

  );
};

export default MyBlogs;
