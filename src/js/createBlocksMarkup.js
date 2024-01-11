import { getBlocks } from './getBlocks.js';
import { getRandomColor } from './getRandomColor.js';

const blocksList = document.querySelector('.blocks-list');

export async function createBlocksMarkup() {
  try {
    const rectangles = await getBlocks();

    const colorMap = {};

    const markup = rectangles
      .map((rect, index) => {
        const key = `${rect.width}-${rect.height}`;
        let color;

        if (colorMap[key]) {
          color = colorMap[key];
        } else {
          color = getRandomColor();
          colorMap[key] = color;
        }

        const blockHTML = `<li class="block-item" style="width: ${rect.width}px; height: ${rect.height}px; background-color: ${color}"><div class="block-index">${index}</div></li>`;

        return blockHTML;
      })
      .join('');
    blocksList.insertAdjacentHTML('beforeend', markup);
    console.log(blocksList);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

createBlocksMarkup();
