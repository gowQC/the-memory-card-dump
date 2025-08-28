import LoginNavbar from "../components/LoginNavbar";

export default function LandingPage() {
  return (
    <div className="h-screen">
      <LoginNavbar></LoginNavbar>
      <h1 className="text-white m-30 text-5xl rounded-4xl p-4 text-center border-6 border-black font-serif ">
        Welcome to the Memory Dump! Here, you can blog about your favorite
        games, capture awesome moments, and share your memories with friends and
        strangers.
      </h1>
      <h2 className="text-white m-30 text-2xl text-center">
        Where the memories get saved (image carousel)
      </h2>
    </div>
  );
}
