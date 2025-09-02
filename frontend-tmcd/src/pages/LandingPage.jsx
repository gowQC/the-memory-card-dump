import LoginNavbar from "../components/LoginNavbar";
import image1 from "../assets/images/pexels-pixabay-57416.jpg";
import image2 from "../assets/images/silver-tabby-cat-sitting-on-green-background-free-photo.jpg";
import image3 from "../assets/images/Upside_down_gray_cat.webp";
import image4 from "../assets/images/photo-1529778873920-4da4926a72c2.jpg";

export default function LandingPage() {
  return (
    <div className="h-screen">
      <LoginNavbar></LoginNavbar>
      <h1 className="heading-primary">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="heading-secondary">Peep the top Memories... Davon</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          <img className="carousel-image" src={image1} alt="" />
          <img className="carousel-image" src={image2} alt="" />
          <img className="carousel-image" src={image3} alt="" />
          <img className="carousel-image" src={image4} alt="" />
          {/**will be the 1 duplicate image to simulate loop*/}
          <img className="carousel-image" src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}

{
  /* <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
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
      </h2> */
}
