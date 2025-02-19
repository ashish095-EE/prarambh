
const images  = ["/0.jpg", "/10.jpeg", "/2.jpeg", "/3.jpeg","/20.jpg", "/19.jpeg", "/4.jpeg","/18.jpeg", "/1.jpeg","/21.JPG", "/5.jpeg", "/6.jpeg", "/7.jpeg", "/22.JPG", "/8.jpeg", "/9.jpeg", "/11.jpeg", "/12.jpeg", "/13.jpeg", "/14.jpeg", "/15.jpeg", "/16.jpeg", "/17.jpeg"];

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
