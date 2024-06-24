---
layout: post
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

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="712px" max-heigth="545px" path="assets/img/posts/equal-loudness-oscillator.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Download

<div style='text-align: center;'>
  <a href='/assets/patches/equal-loudness-oscillator.pd'>Download Patch</a>
</div>

### References
- [https://en.wikipedia.org/wiki/Pink_noise](https://en.wikipedia.org/wiki/Pink_noise)
- [https://en.wikipedia.org/wiki/Equal-loudness_contour](https://en.wikipedia.org/wiki/Equal-loudness_contour)
- [iemmatrix's mtx_phon_curve](https://git.iem.at/pd/iemmatrix)