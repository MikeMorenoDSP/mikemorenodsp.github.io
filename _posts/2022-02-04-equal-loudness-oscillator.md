---
title: Low-effort equal-loudness oscillator
tags:
- synthesis
- dsp
- oscillators
- pure data
---

An attempt to make the loudness of an oscillator sound the same at all frequencies.

Amplitude is set so that the power spectral density is inversely proportional to the frequency of the signal (Similar to Pink Noise).

> pow = 1/f

[Download Patch](https://raw.githubusercontent.com/MikeMorenoDSP/mikemorenodsp.github.io/main/assets/patches/equal-loudness-oscillator.pd)
{: style="text-align: center;"}

![equal-loudness-oscillator](/assets/images/equal-loudness-oscillator.png)

### References
- [https://en.wikipedia.org/wiki/Pink_noise](https://en.wikipedia.org/wiki/Pink_noise)
- [https://en.wikipedia.org/wiki/Equal-loudness_contour](https://en.wikipedia.org/wiki/Equal-loudness_contour)
- [iemmatrix's mtx_phon_curve](https://git.iem.at/pd/iemmatrix)