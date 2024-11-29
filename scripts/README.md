## Scripts

### Google Earth Engine Script

The `GEE_MAIAC.js` script demonstrates how to retrieve and visualize **Optical Depth (055 microns)** data from the MODIS MAIAC dataset in Google Earth Engine.
### Dataset
- **Source**: [MODIS/061/MCD19A2_GRANULES](https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A2_GRANULES)
- **Description**: This dataset provides aerosol optical depth (AOD) data at 055 microns, retrieved from the Moderate Resolution Imaging Spectroradiometer (MODIS) sensor.

#### Usage
1. Open the [Google Earth Engine Code Editor](https://code.earthengine.google.com/).
2. Copy the contents of the file:
3. Paste the script into the Code Editor.
4. Modify parameters (e.g., date range, region) if needed.
5. Click **Run** to execute the script and visualize the results.

#### Script Features
- Retrieves data from MODIS MAIAC dataset (`MCD19A2_GRANULES`).
- Filters data for a specific date range and region.
- Visualizes mean optical depth with a custom color palette.

### Script File Location
- File: `scripts/GEE_MAIAC.js`
