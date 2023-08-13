import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  IconButton  from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";


  // const likeStatus = () => ( currentUser && ( blogs?.likes_n.filter( ( item ) => ( item.user_id===currentUser.id ) )[0] && "red"))
// const butonStyle = {
//   color: "white",
//   backgroundColor: "green",
//   "&:hover": {
//     backgroundColor: "white",
//     color: "green",
//   },


// };
const BlogCardD = ({item}) => {
    const navigate = useNavigate();
  const { addLike } = useBlogCalls();

  const { blogs } = useSelector((state) => state.blog);
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Box key={item.id} sx={{ height: "500px", width: "415px" , borderRadius: "15px"}}>
      <Card
        key={item.id}
        sx={{
          padding: "1rem",
          width: "100%",
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
          sx={{ width: "100%", p: 0.5, borderRadius: 5, objectFit: "contain" }}
        />
        <CardContent sx={{ height: "100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <Typography  variant="h5" component="div" align="center">
            {item.title}
          </Typography>
         
            <Typography variant="body2" color="text.secondary" align="justify" sx={{height:"130px",overflow:"auto"}}>
              {item.content}
            </Typography>
       
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              align="right"
              
            >
              {new Date(item.publish_date).toLocaleDateString()}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center"}}>
              <AccountCircleIcon />
              <span>{item.author}</span>
            </Typography>
          </Box>
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
              onClick={() => addLike(`likes/${item?.id}`)}
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
            sx={{
              display: "flex",
              justifyContent: "center",
              aligItems: "center",
            }}
            variant="contained"
            onClick={() => navigate(`/detail/${item?.id}`)}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default BlogCardD