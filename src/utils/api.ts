export async function getAllPosts() {
  const response = await fetch("http:localhost:3001/posts", {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export async function getPostsById (id: string) {
  const response = await fetch(`http:localhost:3001/posts/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}