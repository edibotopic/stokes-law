let statsPanel = () => {
    let stats = document.getElementById("stats");
    let label = "<span style='color: violet'>Velocity</span> (×10<sup>2</sup>) = ";
    let diam = avgDiam().toFixed(2);
    let delta = avgDelta().toFixed(0);
    let gForce = forceG();
    let dataNew = () => {return (((((diam)/100) ** 2) * (rhoP - rhoS) * (9.81*gForce)) / (18 * mu))}
    let data = dataNew().toFixed(3);
    let msg;

    if (data > 1.0) {
        msg = "Behaviour: sinking rapidly"
        stats.innerHTML = label + data + " m s<sup>-1</sup>" + "<br>" + "Mean Diameter = " + diam + " mm" + "<br>" + "Density difference = " + delta + "<br>" + msg;
    } else if (data < -1.0) {
        msg = "Behaviour: floating rapidly"
        stats.innerHTML = label + data + " m s<sup>-1</sup>" + "<br>" + "Mean Diameter = " + diam + " mm" + "<br>" + "Density difference = " + delta + "<br>" + msg;
    } else if (data == 0.0) {
        msg = "Behaviour: no separation"
        stats.innerHTML = label + data + " m s<sup>-1</sup>" + "<br>" + "Mean Diameter = " + diam + " mm" + "<br>" + "Density difference = " + delta + "<br>" + msg;
    } else if (data > 0.0 && data <= 1.0) {
        msg = "Behaviour: sinking slowly"
        stats.innerHTML = label + data + " m s<sup>-1</sup>" + "<br>" + "Mean Diameter = " + diam + " mm" + "<br>" + "Density difference = " + delta + "<br>" + msg;
    } else if (data < 0.0 && data >= -1.0) {
        msg = "Behaviour: floating slowly"
        stats.innerHTML = label + data + " m s<sup>-1</sup>" + "<br>" + "Mean Diameter = " + diam + " mm" + "<br>" + "Density difference = " + delta + "<br>" + msg;
}
}
