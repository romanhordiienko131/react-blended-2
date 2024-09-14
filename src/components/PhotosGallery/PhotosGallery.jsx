import { Grid, PhotosGalleryItem } from '..';
export const PhotosGallery = ({ photos }) => {
  console.log(photos);
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem
          key={photo.id}
          id={photo.id}
          avg_color={photo.avg_color}
          alt={photo.alt}
          src={photo.src}
        />
      ))}
    </Grid>
  );
};
