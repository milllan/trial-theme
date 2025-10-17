### **Project Goal: Figma to WordPress Theme Automation**

This document outlines the process for converting a Figma design into a pixel-perfect WordPress theme using MCP servers for automation. The agent's primary objective is to analyze the Figma design, generate the necessary code and assets, and validate the implementation for accuracy.

### **Workflow**

The development process is divided into three main stages:

**1. Design Inspection and Asset Extraction**

The initial step involves a thorough analysis of the provided Figma file to understand its structure, components, and styling.

*   **Primary Tool**: `Framelink Figma MCP` server
*   **Action**: Use the `Get comprehensive Figma file data` function to retrieve detailed information about the design, including layout, content, and visual elements.
    *   **`fileKey`**: The unique identifier for the Figma file.
    *   **`nodeId`**: The specific design element or section to inspect.
*   **Asset Download**: Once the visual components are identified, use the `download_figma_images` function to export all necessary images and icons.
    *   **`fileKey`**: The unique identifier for the Figma file.
    *   **`nodes`**: The specific image or icon nodes to be downloaded.
    *   **`localPath`**: The designated directory for storing the downloaded assets.

**2. Code Generation**

With a comprehensive understanding of the design, the next step is to generate the corresponding UI code.

*   **Primary Tool**: `figma-dev-mode` MCP server (to be used if `Framelink Figma MCP` fails).
*   **Action**: Utilize the `get_code` function to generate UI code for specific nodes within the Figma design.
    *   **`nodeId`**: The ID of the design element to be converted into code.
    *   **`clientLanguages`**: Specify `html,css,php`.
    *   **`clientFrameworks`**: Specify `wordpress`.
*   **Supporting Actions**:
    *   Use `get_variable_defs` to extract design tokens such as colors, fonts, and spacing for consistent styling.
    *   Employ `get_screenshot` to capture images of specific nodes for visual reference during development.

**3. Implementation and Validation**

After generating the code and assets, the final stage is to implement them into the WordPress theme and ensure a pixel-perfect match with the original Figma design.

*   **Implementation**: Integrate the generated HTML, CSS, and PHP into the appropriate WordPress theme files.
*   **Validation Tool**: `chrome-devtools` MCP server.
*   **Action**: Use the `evaluate_script` function to run JavaScript code within the browser to measure the dimensions and positioning of elements on the local development server (`http://trial.local/`).
*   **Validation Process**:
    1.  Compare the measurements from the local server with the design specifications from the Figma file.
    2.  Make necessary adjustments to the code to correct any discrepancies.
    3.  Repeat the measurement and adjustment process until the implementation is pixel-perfect across the following screen widths:
        *   **Desktop**: 1920px

### **API Documentation**

A detailed reference for the MCP server APIs to be used in this workflow.

#### **Framelink Figma MCP**

*   **`Get comprehensive Figma file data`**: Retrieves detailed information from a Figma file.
    *   **Parameters**: `fileKey` (required), `nodeId`, `depth`.
*   **`download_figma_images`**: Downloads specified image and icon nodes.
    *   **Parameters**: `fileKey` (required), `nodes` (required), `pngScale`, `localPath` (required).

#### **figma-dev-mode Figma MCP** use only as backup when **Framelink Figma MCP** fails.

*   **`get_code`**: Generates UI code for a specified node.
    *   **Parameters**: `nodeId`, `clientLanguages`, `clientFrameworks`, `forceCode`.
*   **`get_variable_defs`**: Retrieves variable definitions for a given node.
    *   **Parameters**: `nodeId`, `clientLanguages`, `clientFrameworks`.
*   **`get_screenshot`**: Generates a screenshot of a specified node.
    *   **Parameters**: `nodeId`, `clientLanguages`, `clientFrameworks`.
*   **`get_metadata`**: Fetches metadata for a node or page in XML format.
    *   **Parameters**: `nodeId`, `clientLanguages`, `clientFrameworks`.

#### **chrome-devtools MCP**

*   **`evaluate_script`**: Executes a JavaScript function on the current webpage.
    *   **Parameters**: `function` (required), `args`.

- if any any of the 3 MCP server is not repsonding or errors out DO NOT MOVE FORWARDS WITH TAKS! STOP and wait for the server to be available. every single time you use chrome devtools mcp, you MUST validate the layout first before proceeding to the next task, and you msut resize the window to the proper viewport width before running the validation script.