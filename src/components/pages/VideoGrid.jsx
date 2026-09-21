export default function VideoGrid() {
  const videos = [
    "2bu2yS0XObY",
    "h2IBiqBCxBI",
    "VSp219oypcE",
    "gEPLtb6mNsU",
    "nS-twYZEkW8",
    "QPFpoxC2s38",
    "Qvd1mi6uRLI",
    "LnI5TY_RZYg",
    "UUXg6uoFcg4",
    "TN4oQE1ctt4",
    "o7rpfdAXIcU",
    "nX5reYr3nDU",
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen w-full py-10 px-6 mt-1">
      {/* VIDEO GRID */}
      <div>
        <h2 className="text-3xl font-semibold mb-10 text-center">
          {" "}
          My Projects
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((id, index) => (
            <div
              key={index}
              className="aspect-[9/16] overflow-hidden rounded-xl shadow-md group"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full h-full transition duration-300 group-hover:scale-105"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* WORKFLOW */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Workflow</h2>
        <p className="text-gray-400 text-lg">
          Idea → Script → AI Images → Voice → Editing
        </p>
      </div>
    </div>
  );
}
