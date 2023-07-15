import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";
import CommentForm from "../components/blog/CommentForm";


const Detail = () => {
  // const dispatch = useDispatch();
  const [commentCard, setCommentCard] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  const { id } = useParams();
  const { details } = useSelector((state) => state.blog);
  const { getBlogData } = useBlogCalls();
  const { getDetailData } = useBlogCalls();

  const [update, setUpdate] = useState(false);

  const [open, setOpen] = useState(false);

 

  useEffect(() => {
    getDetailData(`blogs/${id}`);
    getBlogData("categories");
    
    
  }, [details]);

 const [info, setInfo] = useState(
    {
    title: "",
    content: "",
    image: "",
    category: 0,
    status: "",
  }
  );


  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                maxWidth: 500,
              }}
              image={details?.image}
              component="img"
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {details?.author}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                    {new Date(details.publish_date).toDateString()}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6">{details?.title}</Typography>
              <Typography sx={{ color: "#777" }}>{details?.content}</Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteIcon />
                <span>{details?.likes}</span>
              </IconButton>
              <IconButton onClick={() => setCommentCard(!commentCard)}>
                {/*----------- Comment BUTTON-------- */}
                <CommentIcon />
                <span>{details?.comment_count}</span>
              </IconButton>
              <IconButton>
                <VisibilityIcon />
                <span>{details?.post_views}</span>
              </IconButton>
            </CardActions>

            {/* comment card ------------------   */}
            {commentCard && (
              <Box width="100%" mt={3} p={3}>
                {details?.comments?.map((item, index) => (
                  <Box key={index} p={2}>
                    <Typography>{item.user}</Typography>
                    <Typography color="#aaa">
                      {new Date(item.time_stamp).toDateString()}
                    </Typography>
                    <Typography mb={2}>{item.content}</Typography>
                    <Divider />
                  </Box>
                ))}

                <CommentForm postId={details.id} />
              </Box>
            )}

            {/*----------------- DELETE UPDATE------------ */}
            {details.author === currentUser.username && (
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  onClick={() => setUpdate(true)}
                >
                  UPDATE BLOG
                </Button>

                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red" }}
                  onClick={() => setOpen(true)}
                >
                  DELETE BLOG
                </Button>

                <DeleteModal
                  handleOpen={() => setOpen(true)}
                  handleClose={() => setOpen(false)}
                  open={open}
                  id={id}
                />

                <UpdateModal
                  updateOpen={() => setUpdate(true)}
                  updateClose={() => setUpdate(false)}
                  update={update}
                  id={id}
                  setInfo={setInfo}
                  info={info}
                />
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
