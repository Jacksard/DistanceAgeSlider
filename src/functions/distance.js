const distance = function geoDistance(lat1, lng1, lat2, lng2) {
  const a = 6378.137; // equitorial radius in km
  const b = 6356.752; // polar radius in km

  var sq = x => x * x;
  var sqr = x => Math.sqrt(x);
  var cos = x => Math.cos(x);
  var sin = x => Math.sin(x);
  var radius = lat =>
    sqr(
      (sq(a * a * cos(lat)) + sq(b * b * sin(lat))) /
      (sq(a * cos(lat)) + sq(b * sin(lat)))
    );

  lat1 = (lat1 * Math.PI) / 180;
  lng1 = (lng1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;
  lng2 = (lng2 * Math.PI) / 180;

  var R1 = radius(lat1);
  var x1 = R1 * cos(lat1) * cos(lng1);
  var y1 = R1 * cos(lat1) * sin(lng1);
  var z1 = R1 * sin(lat1);

  var R2 = radius(lat2);
  var x2 = R2 * cos(lat2) * cos(lng2);
  var y2 = R2 * cos(lat2) * sin(lng2);
  var z2 = R2 * sin(lat2);

  return sqr(sq(x1 - x2) + sq(y1 - y2) + sq(z1 - z2)).toFixed(1);
};

export default distance;
