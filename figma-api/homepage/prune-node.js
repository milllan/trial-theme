// prune-node.js (Corrected Version)
// A reusable script to extract and prune a specific node from the main Figma data file.
// Usage: node prune-node.js <NODE_ID> [output-filename.json]

const fs = require('fs');

/**
 * Recursively finds a node by its ID within a given node's children.
 * @param {object} node - The parent node to search within.
 * @param {string} nodeId - The ID of the node to find.
 * @returns {object|null} The found node object, or null if not found.
 */
function findNodeById(node, nodeId) {
  if (node.id === nodeId) {
    return node;
  }
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeById(child, nodeId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

/**
 * Recursively prunes a Figma node object, keeping only properties
 * relevant for web development code generation.
 * @param {object} node - The Figma node to prune.
 * @returns {object|null} A new, simplified node object.
 */
function pruneNode(node) {
  if (!node) return null;

  const relevantProps = {
    id: node.id,
    name: node.name,
    type: node.type,
  };

  // Layout Properties
  if (node.layoutMode) relevantProps.layoutMode = node.layoutMode;
  if (node.paddingLeft) relevantProps.paddingLeft = node.paddingLeft;
  if (node.paddingRight) relevantProps.paddingRight = node.paddingRight;
  if (node.paddingTop) relevantProps.paddingTop = node.paddingTop;
  if (node.paddingBottom) relevantProps.paddingBottom = node.paddingBottom;
  if (node.itemSpacing) relevantProps.itemSpacing = node.itemSpacing;
  if (node.primaryAxisAlignItems) relevantProps.primaryAxisAlignItems = node.primaryAxisAlignItems;
  if (node.counterAxisAlignItems) relevantProps.counterAxisAlignItems = node.counterAxisAlignItems;
  if (node.layoutSizingHorizontal) relevantProps.layoutSizingHorizontal = node.layoutSizingHorizontal;
  if (node.layoutSizingVertical) relevantProps.layoutSizingVertical = node.layoutSizingVertical;
  if (node.absoluteBoundingBox) relevantProps.boundingBox = { width: node.absoluteBoundingBox.width, height: node.absoluteBoundingBox.height };

  // Styling Properties
  if (node.fills && node.fills.length > 0) relevantProps.fills = node.fills;
  if (node.strokes && node.strokes.length > 0) relevantProps.strokes = node.strokes;
  if (node.strokeWeight) relevantProps.strokeWeight = node.strokeWeight;
  if (node.cornerRadius) relevantProps.cornerRadius = node.cornerRadius;
  if (node.effects && node.effects.length > 0) relevantProps.effects = node.effects;
  
  // Text Properties
  if (node.type === 'TEXT') {
    relevantProps.characters = node.characters;
    relevantProps.style = {
      fontFamily: node.style.fontFamily,
      fontWeight: node.style.fontWeight,
      fontSize: node.style.fontSize,
      textAlignHorizontal: node.style.textAlignHorizontal,
      lineHeightPx: node.style.lineHeightPx,
      textDecoration: node.style.textDecoration,
    };
  }
  
  // Recursively prune children
  if (node.children && node.children.length > 0) {
    relevantProps.children = node.children.map(pruneNode).filter(child => child !== null);
  }

  return relevantProps;
}

// --- Main execution logic ---
function main() {
  const nodeIdToFind = process.argv[2];
  
  if (!nodeIdToFind) {
    console.error('Error: Please provide a Node ID as the first argument.');
    console.log('Usage: node prune-node.js <NODE_ID> [output-filename.json]');
    return;
  }
  
  const safeNodeId = nodeIdToFind.replace(/:/g, '-');
  const outputFilename = process.argv[3] || `pruned-${safeNodeId}.json`;
  const sourceFilename = 'figma-data.json';
  
  // We need to know which top-level frame to search within (Desktop, Laptop, or Mobile)
  // Let's create a simple lookup. You might make this more dynamic later.
  const parentFrameIds = {
      desktop: '46:304',
      laptop: '139:6238',
      mobile: '139:7812',
  };

  try {
    if (!fs.existsSync(sourceFilename)) {
        throw new Error(`Source file not found: ${sourceFilename}. Please run the curl command first.`);
    }

    const rawData = fs.readFileSync(sourceFilename);
    const figmaData = JSON.parse(rawData);

    let foundNode = null;
    let parentFrameName = '';

    // Search within each top-level document (Desktop, Laptop, Mobile)
    for (const [name, frameId] of Object.entries(parentFrameIds)) {
        const documentNode = figmaData.nodes[frameId]?.document;
        if (documentNode) {
            const result = findNodeById(documentNode, nodeIdToFind);
            if (result) {
                foundNode = result;
                parentFrameName = name;
                break;
            }
        }
    }
    
    if (!foundNode) {
      throw new Error(`Node with ID "${nodeIdToFind}" not found in any of the main frames within ${sourceFilename}.`);
    }

    console.log(`Node found within the "${parentFrameName}" layout.`);

    const prunedData = pruneNode(foundNode);
    
    fs.writeFileSync(outputFilename, JSON.stringify(prunedData, null, 2));

    console.log(`✅ Successfully pruned data for node "${nodeIdToFind}" and saved to "${outputFilename}"`);

  } catch (error) {
    console.error(`❌ Error processing Figma data: ${error.message}`);
  }
}

main();