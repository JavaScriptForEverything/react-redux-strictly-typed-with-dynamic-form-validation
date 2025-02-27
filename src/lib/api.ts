// lib/api.ts
export const fetchProducts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
};
