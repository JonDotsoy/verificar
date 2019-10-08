
function loadContentImages() {
  const contentImages = document.querySelectorAll('.content-images');

  contentImages.forEach((contentImages, i) => {
    if (!loadContentImages.elms.has(contentImages) && contentImages.ELEMENT_NODE === contentImages.nodeType) {
      console.info('loading', i, contentImages);
      loadContentImages.elms.set(contentImages, true);

      /** @type {NodeListOf<HTMLImageElement>} */
      const imgs = contentImages.querySelectorAll('.images .img');
      /** @type {HTMLButtonElement} */
      const btnPrev = contentImages.querySelector('.btn-control.direction-back');
      /** @type {HTMLButtonElement} */
      const btnNext = contentImages.querySelector('.btn-control.direction-next');

      function selectPrevImg() {
        const indexSelected = [...imgs].findIndex(el => el.classList.contains('actived'));
        let indexSelectedNext = indexSelected - 1;

        if (indexSelectedNext <= 0) {
          indexSelectedNext = (imgs.length - 1);
        }

        imgs.forEach((img, i) => {
          if (indexSelectedNext === i) {
            img.classList.add('actived');
          } else {
            img.classList.remove('actived');
          }
        });
      }

      function selectNextImg() {
        const indexSelected = [...imgs].findIndex(el => el.classList.contains('actived'));
        let indexSelectedNext = indexSelected + 1;

        if (indexSelectedNext >= imgs.length) {
          indexSelectedNext = 0;
        }

        imgs.forEach((img, i) => {
          if (indexSelectedNext === i) {
            img.classList.add('actived');
          } else {
            img.classList.remove('actived');
          }
        });
      }

      btnPrev.addEventListener('click', selectPrevImg, false);
      btnNext.addEventListener('click', selectNextImg, false);
    }
  });
}

loadContentImages.elms = new Map();

setInterval(() => {
  loadContentImages();
}, 1000);
