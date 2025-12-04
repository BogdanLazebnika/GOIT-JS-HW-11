import "loaders.css/loaders.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./render-functions.js";

const form = document.getElementById("search-form");
const input = form.querySelector("input[name='search-text']");

form.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query!",
      timeout: 2500,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = data.hits;
      if (!hits || hits.length === 0) {
        iziToast.info({
          title: "No results",
          message: "Sorry, there are no images matching your search query. Please try again!",
          timeout: 3000,
        });
        return;
      }
      createGallery(hits);
    })
    .catch(err => {
      console.error("Fetch error:", err);
      iziToast.error({
        title: "Error",
        message: "Something went wrong while fetching images.",
        timeout: 3000,
      });
    })
    .finally(() => hideLoader());
}
