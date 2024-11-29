// GEE_MAIAC.js
// Author: Negin Rezaei Nokandeh
// Description: Visualize Optical Depth (055 microns) data from MODIS MAIAC dataset in Google Earth Engine.

// Load the MAIAC dataset for Optical Depth at 055 microns
var collection = ee.ImageCollection('MODIS/061/MCD19A2_GRANULES')  // Load MODIS MAIAC dataset
                     .select('Optical_Depth_055')  // Select the specific band for 055 microns
                     .filterDate('2020-03-21', '2020-04-21');  // Filter data by date range

// Define visualization parameters for Optical Depth
var band_viz = {
  min: 0,  // Minimum value for visualization
  max: 1100,  // Maximum value for visualization
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']  // Color palette
};

// Add the mean Optical Depth layer to the map
Map.addLayer(collection.mean(), band_viz, 'Optical Depth 055');  // Visualize mean Optical Depth for 055 microns
Map.setCenter(51.33, 35.72, 9);  // Center the map on Tehran (longitude, latitude, zoom level)
