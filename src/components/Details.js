import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const Details = ({ name, email, index }) => {
  return (
    <div className="entry">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <Stack>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default Details;
