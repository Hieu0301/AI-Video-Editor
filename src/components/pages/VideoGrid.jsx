export default function VideoGrid() {
  const videos = [
    "TN4oQE1ctt4",
    "UUXg6uoFcg4",
    "tilHiH3qm-4",
    "rsETqMsS8Xs",
    "MB72MttRkpA",
    "zzs6vXoub_w",
    "o7rpfdAXIcU",
    "nX5reYr3nDU",
    "PzYAz__oV_Y",
    "jID4QGXsyTo",
    "q6wLKImodNg",
    "PBY-IRV6hzs",
    "K_SxXTClKcg",
    "71khXnMSC3k",
    "TXkXixFK_iA",
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
