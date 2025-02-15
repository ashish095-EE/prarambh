
const images  = ["/0.jpg", "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/1.jpg", "/2.jpg", "/3.jpg", "/1.jpg", "/2.jpg", "/3.jpg", "/1.jpg", "/2.jpg", "/3.jpg"];

function GalleryPhoto() {
  return (
    <div className="columns-1 lg:columns-3 sm:columns-2 gap-4 py-10 md:p-5">
      {images.map((src,index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img className="w-full object-cover rounded-lg" src={src} alt="" />
        </div>
      ))}
      
    </div>
  )
}

export default GalleryPhoto
