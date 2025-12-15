/**
 * Get the full image URL, handling both Cloudinary URLs and local storage paths
 * @param {string|null|undefined} imagePath - The image path or URL
 * @returns {string} - The full image URL
 */
export function getImageUrl(imagePath) {
  if (!imagePath) {
    return '';
  }

  // If it's already a full URL (Cloudinary or external), return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Otherwise, it's a local storage path, prepend the storage URL
  return `http://localhost:8000/storage/${imagePath}`;
}


