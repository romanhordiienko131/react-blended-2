import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [searchValue, setSearchValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const onSubmit = value => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        const data = await getPhotos(searchValue, 1);
        setPhotos(data.photos);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [searchValue]);

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onSubmit} />
      <PhotosGallery photos={photos} />
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
};
