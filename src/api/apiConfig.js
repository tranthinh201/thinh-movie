const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    // apiKey: "bce0bd5178850829deff52353f44f2ac",
    apiKey: "58c2ac3acca7beabc3f76b0a5e30ed14",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  };
  
  export default apiConfig;