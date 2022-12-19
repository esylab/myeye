// makes it easier to test and maintain the navigation function independently of the rest of the server-side code.

const maps = require('@google/maps');

exports.navigate = (latitude, longitude, callback) => {
  // Set up the Google Maps API client
  const client = maps.createClient({
    key: process.env.GOOGLE_MAPS_API_KEY,
  });

  // Initiate the navigation request
  client.directions(
    {
      origin: { lat: latitude, lng: longitude },
      destination: { lat: destinationLatitude, lng: destinationLongitude },
    },
    callback
  );
};
