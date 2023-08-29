import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { BlogPost } from '../../components/templates/BlogPost';
import { BlogButton } from '../../components/atoms/BlogButton';
import { BlogForm } from '../../components/templates/BlogForm';

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    10px 10px 30px #d9d9d9,
    -10px -10px 30px #fff;
  max-width: 800px;
  min-width: 800px;
`;
const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

export const BlogPage = () => {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <Container>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
      ))}
      <ButtonContainer>
        <BlogButton label="등록" onClick={() => setShowForm(true)} />
      </ButtonContainer>
      {showForm && <BlogForm onClose={() => setShowForm(false)} />}
    </Container>
  );
};
