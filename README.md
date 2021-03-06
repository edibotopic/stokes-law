# Stoke's Law Simulation

This is a basic simulation of Stoke's Law, which can be used to describe the motion of particles in a solvent under gravity.

The purpose of the simulation is largely pedagogical and aims to provide a visual tool for understanding the equation and the behaviour it describes.

## Basic Principles

A particle will sediment if it is more dense than the solvent it is suspended in. If it is less dense than the solvent then it will float.

In either case, the rate of separation is directly proportional to the size of the particle and inversely proportional to the viscosity of the solvent.

Stoke's Law is commonly used to calculate the average velocity of a population of particles:

![Equation for Stoke's Law](./img/equation_light.png#gh-light-mode-only)
![Equation for Stoke's Law](./img/equation_dark.png#gh-dark-mode-only)

$D$ is the diameter of the particle, $ρ_p - ρ_s$ represents the difference in density between particle and solvent, while $μ$ is the viscosity of the solvent. The $g$ represents gravitational acceleration, which can be substituted with centrifugal acceleration where relevant (e.g., centrifugation, cycloning).

Manipulating the variables in this equation is the basis of commercial strategies to both promote separation (centrifugation) and reduce separation (homogenisation).

## Implementation

The simulation is coded using Javascript, with particles rendered using the HTML `<canvas>` element.

Sliders can be used to modify the variables of Stoke's Law and observe the changes in real-time.

Clicking <kbd>restart</kbd> at any time will reset the simulation and return the sliders to their default values. The canvas will resize with your screen but it is a good idea to reset after resizing to fill the screen with particles. 

## Limitations

### Physics

Presently, the numbers used are a bit of a fudge and are designed to exhibit salient changes during a short run-time. Nonetheless, the magnitude of the influence of important parameters is relatively accurate.

The model - more generally - is a simplification. For example, the particles do not (currently) interact with each other and concentration gradients do not affect separation behaviour.

### Code

I am not a professional/full-time software developer, so I have not considered every possible edge case with respect to user browser choice or device limitation. This is not a priority.

## Roadmap

- [x] Fix flickering issue when using particle colors or strokes
- [x] Improve lagging frame-rate on mobile browsers
- [ ] Particle-particle and (better) particle-wall interactions
- [ ] Formation of separated layers of cream and sediment
- [ ] More realistic numbers, with an accelerated (default) and real-time (optional) toggle
- [ ] Additional user-interactions, such as shake, homogenisation and emulsification
- [ ] Display of statistical data in tabular and/or graphical form (e.g., average velocity, predicted settling time, layer height)
- [ ] User feedback from sliders showing actual changes
- [ ] Improve UI
