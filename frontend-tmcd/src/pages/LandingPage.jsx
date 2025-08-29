import LoginNavbar from "../components/LoginNavbar";
import image1 from "../assets/images/pexels-pixabay-57416.jpg";
import image2 from "../assets/images/silver-tabby-cat-sitting-on-green-background-free-photo.jpg";
import image3 from "../assets/images/Upside_down_gray_cat.webp";
import image4 from "../assets/images/photo-1529778873920-4da4926a72c2.jpg";

export default function LandingPage() {
  return (
    <div className="h-screen">
      <LoginNavbar></LoginNavbar>
      <h1 className="text-white m-15 text-5xl rounded-4xl p-4 text-center font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-3 text-2xl text-center">
        Peep the top Memories
      </h2>
      <div
        id="carousel"
        className="m-auto w-[600px] h-[300px] overflow-x-hidden overflow-y-hidden"
      >
        <div id="carouselTrack" className="flex flex-row w-[600px] h-[300px]">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          {/**will be the 1 duplicate image to simulate loop*/}
          <img src={image1} alt="" />
        </div>
      </div>

      {/* <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2> */}
    </div>
  );
}
