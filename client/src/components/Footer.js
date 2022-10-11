import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        alignContent: 'center',
      }}
    >
      <IconButton href='https://github.com/oslabs-beta/AWS-Lambda-Visualizer'>
        <GitHubIcon />
      </IconButton>
      <IconButton href='https://www.linkedin.com/company/lumos-tools/'>
        <LinkedInIcon />
      </IconButton>
      <IconButton href='https://www.medium.com/'>
        <DescriptionIcon />
      </IconButton>
      <IconButton href='https://opensourcelabs.io/'>
        <FavoriteIcon />
      </IconButton>
    </Box>
  );
}
