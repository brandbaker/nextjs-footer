'use client';

import { Box, Container } from '@mui/material';
import FooterColumnLayout from './FooterColumnLayout';

export default function FooterClient() {
  return (
    <Box component="footer" sx={{ mt: 4, py: 4, bgcolor: 'grey.200' }}>
      <Container maxWidth="lg">
        <FooterColumnLayout />
      </Container>
    </Box>
  );
}
