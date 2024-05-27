import { useEffect, useState } from "react";

export default function useGetImagesFromApi({ pageNumber = 1, limit = 5 }) {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;

  useEffect(() => {
    async function fetchImages() {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [url]);

  return { images, loading, error };
}
