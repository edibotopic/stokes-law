# Stoke's Law Simulation

This is an interactive simulation of Stoke's Law, which is used by scientists and engineers to approximate the velocity of sedimentation (or flotation) for particles dispersed in a solvent.

The purpose of the simulation is to provide a visual tool for developing an intuition for the equation and the behaviour it describes, especially for students who are unfamiliar or uncomfortable with mathematics.

## Basic Principles

A particle will sediment if it is more dense than the solvent it is suspended in. If it is less dense than the solvent then it will float.

Stoke's Law is commonly used to calculate the average velocity of a population of particles as influenced by physical properties of the particles and solvent:

![Equation for Stoke's Law](./img/equation_light.png#gh-light-mode-only)
![Equation for Stoke's Law](./img/equation_dark.png#gh-dark-mode-only)

$D$ is the diameter of the particle, $ρ_p - ρ_s$ represents the difference in density between particle and solvent, while $μ$ is the viscosity of the solvent. The $g$ represents gravitational acceleration, which can be multiplied by an appropriate g-force when separation in a centrifuge is of interest.

## Practical Significance

Manipulating the physical variables in this equation is the basis of commercial strategies to both promote separation (centrifugation) or reduce separation (homogenisation).

In food, for example:

- Centrifugation is used to promote the flotation of oil droplets in the separation of cream
- Homogenisation is used to reduce the size of oil droplets in beverages and thereby decrease their flotation speed
- Thickeners are added to salad dressings to increase viscosity and slow the sedimentation of herbs and spices

## Implementation

The simulation is coded using vanilla JavaScript, with particles rendered using the HTML `<canvas>` element.

Sliders can be used to modify the variables of Stoke's Law and observe the changes in real-time.

Buttons are provided to *restart* the simulation, show a brief *about* popup and access the *source* code.

The application is deliberately minimal and simple so that students can interact with it quickly and easily.

The code is made available under an MIT license and educators are free to copy and modify the code themselves.

As the application is served as a single `index.html` page it can be easily embedded as an iframe in web-based notes and slides, in addition to Learning Management Systems like Canvas.
It can also be downloaded onto your device and run locally by opening `index.html` (inside the `stokes-law` folder) in a browser.

## Limitations

The simulation is deliberately more *qualitative* than quantitative.
Its purpose is to improve the intuition or "feel" of students for the physical relationships involved rather than provide a predictive method.
In this way, it resembles the early stages of a scientific experiment in which the scientist roughly adjusts some key parameters and forms a loose model of the phenomenon under study.

## Release Notes

1.0.0

Basic implementation complete:

- Simulation of particles with velocity determined by Stoke's Law
- Manipulation of particle and solvent properties using sliders
- Minimal UI with reset, about and source buttons

## Future Plans

As of 1.0.0 the application is considered feature-complete.

Beyond that, I will mainly be focusing on minor bug fixes and quality-of-life improvements and do not foresee major changes.

If you have any suggestions please file an *issue*, raise a *pull request* or send me an email at edibotopic@gmail.com. 

### To-do

- [x] Improve readability of modal on phones
