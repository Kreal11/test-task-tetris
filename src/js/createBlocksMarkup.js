import { getRectangles } from './getRectangles.js';
import { getRandomColor } from './randomColor.js';

const blocksList = document.querySelector('.blocks-list');

export async function createBlocksMarkup() {
  try {
    const rectangles = await getRectangles();

    const markup = rectangles
      .map((rect, index) => {
        return `<li class="block-item" style="width: ${rect.width}px; height: ${
          rect.height
        }px; background-color: ${getRandomColor()}"><div class="block-index">${index}</div></li>`;
      })
      .join('');
    blocksList.insertAdjacentHTML('beforeend', markup);
    console.log(blocksList);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

createBlocksMarkup();
