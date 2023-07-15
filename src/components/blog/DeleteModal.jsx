import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useBlogCalls from "../../hooks/useBlogCalls";

const DeleteModal = ({ handleClose, open, id }) => {
  const { deleteBlog } = useBlogCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteBlog(`blogs/${id}`);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
          Delete Blog
        </Typography>

        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "red", mr: 2 }}
          onClick={handleSubmit}
        >
          Delete Blog
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "green" }}
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
