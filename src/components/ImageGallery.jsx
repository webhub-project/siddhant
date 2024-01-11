// import React, { useState } from 'react';
// import image1 from "../assets/galary/1.png";
// import image2 from "../assets/galary/2.png";
// import image3 from "../assets/galary/3.png";
// import image4 from "../assets/galary/4.png";

// const images = [
//   {
//     url: image1,
//     relatedImages: [
//       image2,
//       image3,
//     ],
//   },
//   {
//     url: image2,
//     relatedImages: [
//       image1,
//       image3,
//     ],
//   },
// ];

// const ImageGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="grid grid-cols-5 gap-4 mt-20 bg-gray-500">
//       {images.map((image, index) => (
//         <div key={index}>
//           <img
//             src={image.url}
//             alt={`Image ${index + 1}`}
//             className="cursor-pointer h-96 bg-orange-500"
//             onClick={() => openModal(image.url)}
//           />
//         </div>
//       ))}

//       {selectedImage && (
//         <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
//           <div className=" p-4 rounded-lg shadow-md h-full bg-red-500">
//             <div className="top h-96 bg-red-300 p-1">
//             <img src={selectedImage} alt="Selected Image" className=' h-full'/>
//             </div>

//             <div className="mt-4 bg-red-300 p-1">
//               <h2 className="text-lg  mb-2">Related Images</h2>
//               <div className="grid grid-cols-2 gap-4 w-10">
//                 {images
//                   .find((image) => image.url === selectedImage)
//                   .relatedImages.map((relatedImage, index) => (
//                     <div key={index}>
//                       <img src={relatedImage} alt={`Related Image ${index + 1}`} />
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <button
//               className="mt-4 bg-gray-800 p-1 text-white py-2 px-4 rounded-lg"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageGallery;



