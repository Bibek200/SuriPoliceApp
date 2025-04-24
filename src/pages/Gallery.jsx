import React from 'react';

const Gallery = () => {
  const images = [
    'https://picsum.photos/id/1011/300/200',
    'https://picsum.photos/id/1012/300/200',
    'https://picsum.photos/id/1013/300/200',
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1020/300/200',
    'https://picsum.photos/id/1021/300/200',
    'https://picsum.photos/id/1022/300/200',
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded shadow hover:scale-105 transition-transform">
            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;