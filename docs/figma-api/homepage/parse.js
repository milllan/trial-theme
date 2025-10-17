// A simple script to parse the figma-data.json file
const fs = require('fs');

// This is the main recursive function that will "walk" the node tree
function processNode(node, depth = 0) {
  // Indent to show the hierarchy
  const indent = '  '.repeat(depth);

  // --- 1. EXTRACT METADATA ---
  const { id, name, type } = node;
  console.log(`${indent}Processing: [${name}] (Type: ${type}, ID: ${id})`);
  
  // --- 2. EXTRACT LAYOUT & CODE PROPERTIES ---
  // You can extract any property you need here. For example:
  if (node.absoluteBoundingBox) {
    const { x, y, width, height } = node.absoluteBoundingBox;
    // console.log(`${indent}  - Layout: x=${x}, y=${y}, width=${width}, height=${height}`);
  }

  if (node.fills && node.fills.length > 0 && node.fills[0].type === 'SOLID') {
    // console.log(`${indent}  - Fills: Solid color found.`);
  }

  if (node.characters) {
    // console.log(`${indent}  - Text: "${node.characters}"`);
  }

  // --- 3. RECURSE INTO CHILDREN ---
  // If this node has children, process each of them
  if (node.children) {
    for (const childNode of node.children) {
      processNode(childNode, depth + 1);
    }
  }
}

// --- SCRIPT START ---
try {
  // Read the JSON file
  const rawData = fs.readFileSync('figma-data.json');
  const figmaData = JSON.parse(rawData);

  // Get the document for the Desktop layout (Node ID '46:304')
  const desktopNode = figmaData.nodes['46:304'].document;

  console.log('--- Starting Parser for Desktop Layout ---');
  processNode(desktopNode);
  console.log('--- Finished ---');

} catch (error) {
  console.error("Error processing Figma data:", error);
}