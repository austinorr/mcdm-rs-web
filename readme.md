# `mcdmrs-web`

High performance Multi-Criterion Decision Making Algorithms (MCDMs) written in Rust for 🚀 and built for the web with WASM.

Currently implements Promethee I/II.

## Project Features

**Parallelism** This project leverages `rayon` and web-workers to take advantage of every core.

**Low-Memory** These algorithms often require pair-wise comparisons which can rapidly exceed the memory available if care is not taken.
In this demonstration we can analyze 10k alternatives, which requires over 100,000,000 comparisons **per criteria** and there are 7 criteria (thats 700M comparisons!) -- all solved with under 20MB of memory.

**High Performance** The combination of the above features means that this library is very high performance.
Users can calculate 700 million weighted pair-wise comparisons in under 1 second.
Users can also explore the impact of adjusting the weights and see updated rankings for all 10k alternatives in under 0.5 milliseconds.

**Serverless** This implementation is purely client-side.

**Works on Mobile** The memory and computation are so well optimized that the project runs on mobile phones just as responsively as on desktop machines.

## To Do

All of the following are possible with no changes to the internal mcdmrs-web library:

- editable criteria weights, preference functions, indifferences and preferences.
- upload user alternatives (csv) and criteria (csv).
- upload user alternatives as geojson and display scores as choropleth.
