all:initial
===
A Polyfill for [react-style](https://github.com/SanderSpies/react-style) to support all:initial for most browsers.

Firefox + Chrome 37 support all:initial

Chrome < 37 supports initial on every property but doesn't have the all shortcut

IE doesn't initial anywhere, so I did some hackish attempt at making it good for most cases. I expect that it needs
some additional tweaking though!

License
---
MIT