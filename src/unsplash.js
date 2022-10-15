const UNSPLASH_API_KEY = " Client-ID YK5izeq32C42FhaTFIUyS1ZR_vH4ujih2-Ryv9If_q4";

export const fetchImagesFromAPI = async (searchTerm, perPage) => {
    const result = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}`, {
            headers: {
                Authorization: UNSPLASH_API_KEY,
            },
        }
    );
    const json = (await result.json());
    return json;
};