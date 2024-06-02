// // pages/about.js
import { Container, Grid, Typography, Button, Link } from '@mui/material';
import Image from 'next/image';
import img1 from "../images/about.jpg"
import Navbar from './components/Navbar';
const About = () => {
  return (

    <section className="about section">
          <Navbar/>
      <Container maxWidth="lg" className="about__container">
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          My Personal <br />
          Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div >
              <div >
              <Image
        src={img1}
        alt="My Image"
        width={500}
        height={300}
      />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="about__content grid">
              <div className="about__data grid">
                <div className="about__info grid">
                  <h1 className="about__name">Liz Delz</h1>
                  <h2 className="about__profession">Web & Visual Designer</h2>
                  <p className="about__description">
                    Passionate about creating <b>Web Pages</b> with <b>UI/UX User Interface</b>, I have years of experience and many clients are happy with the projects carried out.
                  </p>
                </div>

                <a href="contact.html" className="about__button button">Contact Me</a>
              </div>

              <div className="about__skills">
                <h3 className="about__skills-title">My Skills Are</h3>

                <div className="about__skills-content grid">
                  {/* Insert skills images here */}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
export async function getStaticProps() {
  return {
    props: {},
  };
}
export default About;
