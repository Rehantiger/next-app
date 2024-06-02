import axios from 'axios';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';

export async function getStaticProps() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <Container maxWidth="xxl" sx={{ background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)', minHeight: '100vh', padding: 3 }}>
      <Navbar />
      <Grid container spacing={4} marginTop={2}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
