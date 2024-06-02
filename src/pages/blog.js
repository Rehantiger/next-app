
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Container, Typography, Box, List, ListItem, Link as MuiLink } from '@mui/material';
import Navbar from './components/Navbar';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = await getDocs(collection(db, 'posts'));
      setPosts(postsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 4 }}>
          Blog Page
        </Typography>
        <List sx={{ padding: 0 }}>
          {posts.map(post => (
            <ListItem key={post.id} sx={{ padding: 0, marginBottom: 2 }}>
              <Link href={`/blog/${post.id}`} passHref>
                <MuiLink sx={{ fontSize: '1.25rem', color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  {post.title}
                </MuiLink>
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};
export async function getStaticProps() {
  const postsCollection = await getDocs(collection(db, 'posts'));
  const posts = postsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return {
    props: { posts },
  };
}


export default Blog;
