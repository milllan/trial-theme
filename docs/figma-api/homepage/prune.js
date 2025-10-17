// prune.js - A script to simplify Figma JSON for an LLM
const fs = require('fs');

function pruneNode(node) {
  if (!node) return null;

  // Define the properties we care about for web development
  const relevantProps = {
    id: node.id,
    name: node.name,
    type: node.type,
  };

  // --- Layout Properties ---
  if (node.layoutMode) relevantProps.layoutMode = node.layoutMode; // HORIZONTAL or VERTICAL
  if (node.paddingLeft) relevantProps.paddingLeft = node.paddingLeft;
  if (node.paddingRight) relevantProps.paddingRight = node.paddingRight;
  if (node.paddingTop) relevantProps.paddingTop = node.paddingTop;
  if (node.paddingBottom) relevantProps.paddingBottom = node.paddingBottom;
  if (node.itemSpacing) relevantProps.itemSpacing = node.itemSpacing;
  if (node.primaryAxisAlignItems) relevantProps.primaryAxisAlignItems = node.primaryAxisAlignItems; // Corresponds to justify-content
  if (node.counterAxisAlignItems) relevantProps.counterAxisAlignItems = node.counterAxisAlignItems; // Corresponds to align-items
  if (node.layoutSizingHorizontal) relevantProps.layoutSizingHorizontal = node.layoutSizingHorizontal; // FILL or HUG
  if (node.layoutSizingVertical) relevantProps.layoutSizingVertical = node.layoutSizingVertical; // FILL or HUG
  if (node.absoluteBoundingBox) relevantProps.boundingBox = node.absoluteBoundingBox; // For size and relative position

  // --- Styling Properties ---
  if (node.fills && node.fills.length > 0) relevantProps.fills = node.fills;
  if (node.strokes && node.strokes.length > 0) relevantProps.strokes = node.strokes;
  if (node.strokeWeight) relevantProps.strokeWeight = node.strokeWeight;
  if (node.cornerRadius) relevantProps.cornerRadius = node.cornerRadius;
  if (node.effects && node.effects.length > 0) relevantProps.effects = node.effects;
  
  // --- Text Properties ---
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
  
  // --- Recursively prune children ---
  if (node.children && node.children.length > 0) {
    relevantProps.children = node.children.map(pruneNode).filter(child => child !== null);
  }

  return relevantProps;
}

// --- Script Start ---
try {
  // The ID of the section you want to extract
  const targetNodeId = '87:1301'; // "Featured Properties" section

  const rawData = fs.readFileSync('figma-data.json');
  const figmaData = JSON.parse(rawData);

  // Find the specific node from the desktop layout
  const targetNode = figmaData.nodes['46:304'].document.children.find(child => child.id === targetNodeId);

  if (!targetNode) {
    throw new Error(`Node with ID ${targetNodeId} not found.`);
  }

  const prunedData = pruneNode(targetNode);
  
  // Save the clean JSON to a new file
  fs.writeFileSync('pruned-data.json', JSON.stringify(prunedData, null, 2));

  console.log(`Successfully pruned data for node ${targetNodeId} and saved to pruned-data.json`);

} catch (error) {
  console.error("Error processing Figma data:", error);
}