import Heroes from "./Heroes.jsx";
import VideoGrid from "./VideoGrid.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
  return (
    <div className="p-10 max-w mx-auto min-h-screen w-full">
      <Heroes />
      <VideoGrid />
      <Contact />
    </div>
  );
}
