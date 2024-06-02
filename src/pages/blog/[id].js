import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const BlogDetails = ({ post }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }

  const post = docSnap.data();
  return {
    props: { post }, 
  };
}

export default BlogDetails;
