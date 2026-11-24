# Week 12 — JavaScript Objects

This assignment refactors the Week 9 random trip generator to use an array of
five trip objects.

## Completed requirements

- Five hand-written trip objects with strings, numbers, a boolean, an array,
  nested details, and an accent color.
- One whole trip object is selected at random.
- The page is rendered from the selected object.
- Object methods use `this` to calculate nights, costs, total, per-person cost,
  summary text, and budget status.
- The trip details section is generated with `Object.keys`.
- The selected trip is saved, restored, and cleared with `localStorage`.
- Methods removed by JSON are restored with `withTripMethods()` after loading.
- Figure-it-out topic: **Spread**. It copies top-level values, but nested objects
  remain shared because the copy is shallow.

Suggested commit message: `week 12 objects deep dive — tried spread`
