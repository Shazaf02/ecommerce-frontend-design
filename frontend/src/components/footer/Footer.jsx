import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Styled components
const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#121212',
  padding: theme.spacing(6),
  marginTop: theme.spacing(8),
  textAlign: 'center', // Center text and content
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.54)',
  '&:hover': {
    color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  },
}));

// Footer component
function FooterView() {
  return (
    <Footer>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Brand
            </Typography>
            <Typography variant="body2" gutterBottom>
              Best information about the company goes here, but now lorem ipsum is
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li>
                <Link href="#" variant="body2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Terms of Service
                </Link>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <li>
                <Link href="#" variant="body2">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2">
                  Marketing
                </Link>
              </li>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <SocialIcon href="#" aria-label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="#" aria-label="YouTube">
                <YouTubeIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Footer>
  );
}

export default FooterView; // Correct export