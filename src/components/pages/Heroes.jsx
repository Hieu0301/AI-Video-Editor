import React from "react";

const Heroes = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 px-6 text-white shadow-xl ">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* LEFT - INFO */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Pham Minh Hieu
          </h1>

          <p className="text-xl text-gray-400 mb-6">Content Creator</p>

          <p className="text-gray-300 leading-relaxed">
            I create storytelling videos using AI-generated visuals, voice, and
            editing techniques.
          </p>
        </div>

        {/* RIGHT - SKILLS */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">I can work with: </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "CapCut",
              "Premiere",
              "Photoshop",
              "Canva",
              "ChatGPT",
              "Midjourney",
              "Gemini",
              "Kling AI",
              "Suno AI",
              "ElebvanLabs AI",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 rounded-xl text-sm hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
