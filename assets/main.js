const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UC-KTRBl9_6AX10-Y7IKwKdw&hl=en&gl=US";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "484bbe5071mshef46a1c72527871p1a54cejsn7b2ca8e0ff48",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.contents
      .map(
        (video) => `
    
        <a href="https://www.youtube.com/watch?v=${video.video.videoId}">
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[0].url}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.video.title}
            </h3>
            </div>
            </div>
            </a>
    
    `
      )
      .slice(0, 12)
      .join("")}

        `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
