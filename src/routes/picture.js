import React from 'react';
import { Box, Avatar, Button } from '@mui/material';

export default function ProfilePictureUploader() {
  const [image, setImage] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Avatar alt="Profile Picture" src={preview} sx={{ width: 128, height: 128 }} />
      <input
        accept="image/*"
        type="file"
        id="profile-picture-input"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label htmlFor="profile-picture-input">
        <Button variant="contained" component="span" sx={{ mt: 2 }}>
          Upload Profile Picture
        </Button>
      </label>
    </Box>
  );
}