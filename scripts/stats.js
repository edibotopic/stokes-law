"use strict";
// Create a simple display of key statistical information

let statsPanel = () => {
  let stats = document.getElementById('stats');
  let label = "<span style='color: violet'>Velocity</span> (×10<sup>2</sup>) = ";
  let diam = avgDiam().toFixed(2);
  let delta = avgDelta().toFixed(0);
  let data = avgVel().toFixed(3);
  let msg;

  if (data > 1.0) {
    msg = 'Behaviour: sinking rapidly';
    stats.innerHTML =
      label +
      data +
      ' m s<sup>-1</sup>' +
      '<br>' +
      'Mean Diameter = ' +
      diam +
      ' mm' +
      '<br>' +
      'Density difference = ' +
      delta +
      ' kg m<sup>-3</sup>' +
      '<br>' +
      msg;
  } else if (data < -1.0) {
    msg = 'Behaviour: floating rapidly';
    stats.innerHTML =
      label +
      data +
      ' m s<sup>-1</sup>' +
      '<br>' +
      'Mean Diameter = ' +
      diam +
      ' mm' +
      '<br>' +
      'Density difference = ' +
      delta +
      ' kg m<sup>-3</sup>' +
      '<br>' +
      msg;
  } else if (data == 0.0) {
    msg = 'Behaviour: no separation';
    stats.innerHTML =
      label +
      data +
      ' m s<sup>-1</sup>' +
      '<br>' +
      'Mean Diameter = ' +
      diam +
      ' mm' +
      '<br>' +
      'Density difference = ' +
      delta +
      ' kg m<sup>-3</sup>' +
      '<br>' +
      msg;
  } else if (data > 0.0 && data <= 1.0) {
    msg = 'Behaviour: sinking slowly';
    stats.innerHTML =
      label +
      data +
      ' m s<sup>-1</sup>' +
      '<br>' +
      'Mean Diameter = ' +
      diam +
      ' mm' +
      '<br>' +
      'Density difference = ' +
      delta +
      ' kg m<sup>-3</sup>' +
      '<br>' +
      msg;
  } else if (data < 0.0 && data >= -1.0) {
    msg = 'Behaviour: floating slowly';
    stats.innerHTML =
      label +
      data +
      ' m s<sup>-1</sup>' +
      '<br>' +
      'Mean Diameter = ' +
      diam +
      ' mm' +
      '<br>' +
      'Density difference = ' +
      delta +
      ' kg m<sup>-3</sup>' +
      '<br>' +
      msg;
  }
}
