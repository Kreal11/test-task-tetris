const jsonBlocksPath = '/src/data/blocks.json';

export async function getBlocks() {
  try {
    const response = await fetch(jsonBlocksPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const blocks = await response.json();
    console.log(blocks);
    return blocks;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
