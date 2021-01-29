/**
 * These fucntion creates an html image element and return it
 * @param {string} source source consist of the path to the image asset.
 */
export const createImageElement = (source) => {
    const image = document.createElement('img');
    image.setAttribute('src', source);
    return image;
}