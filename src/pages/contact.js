
import { Grid, TextField, Button, Typography, Container } from '@mui/material';
import Navbar from './components/Navbar';

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ color: '#000', fontSize: 32, fontWeight: 600, marginBottom: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', fontSize: 16, fontWeight: 400, marginBottom: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Message" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export async function getStaticProps() {


  return {
    props: {},
  };
}
export default ContactForm;
