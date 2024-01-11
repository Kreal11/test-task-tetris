const jsonBlocksPath = '/src/data/blocks.json';

export async function getRectangles() {
  try {
    const response = await fetch(jsonBlocksPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const placedRectangles = await response.json();
    console.log(placedRectangles);
    return placedRectangles;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
