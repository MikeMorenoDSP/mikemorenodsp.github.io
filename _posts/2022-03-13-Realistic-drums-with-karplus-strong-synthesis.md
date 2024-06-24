---
layout: post
title: Realistic drums with karplus-strong synthesis
description: "Documentation on [mymembrane~], an algorithm to synthesize realistic drum sounds."
toc:
  sidebar: right
tags:
- documentation
- dsp
- physical modelling
- synthesis
---

`[mymembrane~]` is a Pure Data instrument focused on the creation of acoustic drum-like sounds. 
It started as an attempt at creating an extended karplus-strong algorithm, but ended up resembling a snare drum due to the inharmonicity caused by the all-pass filter. In this document I will explain its components and how it works.

## 1. Parameters

First, let’s take an overview of the available parameters for this instrument:

* __Frequency:__ sets the fundamental frequency of the delay-line.
* __Feedback:__ sets the feedback amount of the delay-line.
* __Damping:__ controls the cutoff frequency for the low-pass filter in the feedback section.
* __All-pass Frequency:__ sets the frequency for the all-pass filter.
* __All-pass Gain:__ controls the amount of feedback gain in the all-pass filter.
* __Pitch Bend Decay:__ sets the decay time for the pitch envelope modulating the delay line’s frequency and the all-pass frequency.
* __Noise Level:__ controls the amount of filtered white noise in the mix.

## 2. Excitation

The excitation source for this instrument is a combination of a single sine-wave cycle and a burst of filtered white noise. The single sine-wave cycle can be synthesized using a high precision audio ramp generator object (`vline~`) going through a cosine waveshaper (`cos~`) with an offset. It is important that the ramp has a length in milliseconds equal to one period of the fundamental frequency, so the same waveform can be repeated through the delay-line. Then, the ramp’s output can act as an amplitude envelope for the filtered white noise to add more harmonic content to the excitation source. The result will make the algorithm sound less like a string and more like a resonator with a clearer perception of the fundamental frequency.

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="470px" max-heigth="523px" path="assets/img/posts/karplus-drums/01-Excitation_Source.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 3. Karplus-Strong string synthesis

The excitation waveform can then be used for the karplus-strong algorithm. This consists of a delay-line looped through a one-pole low-pass filter. This algorithm provides two parameters for the instrument: feedback amount and damping frequency. The first changes the amplitude in the feedback section which consequently affects the decay-time. The damping frequency controls the cutoff frequency of the low-pass filter therefore affecting both the “brightness” and decay-time. In order to extend the frequency range it is necessary to have a delay size over 50 ms and  put a `block~ 1` object inside the delay-line subpatch to force Pure Data to compute samples one by one.

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="455px" max-heigth="315px" path="assets/img/posts/karplus-drums/02-Karplus-Strong-1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="488px" max-heigth="320px" path="assets/img/posts/karplus-drums/02-Karplus-Strong-2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 4. All-pass filter

In this instrument, the all-pass filter is the most important building block for creating an inharmonic drum-like sound. The type of all-pass filter being used is a Schroeder allpass comb filter, which is made by cascading a feedback comb-filter with a feedforward comb-filter. There are two parameters for this filter: the all-pass frequency and the all-pass gain. The all-pass frequency controls the delay time being read on the all-pass filter and affects the inharmonicity depending on the ratio between the delay-line’s frequency and the all-pass frequency. The all-pass gain controls the amount of the feedback gain in the all-pass filter and ranges from -1 to 1 to avoid infinite feedback. The resulting sound already sounds like a drum membrane being hit, but it is possible to add more modulations and layers to enhance its features.

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="536px" max-heigth="318px" path="assets/img/posts/karplus-drums/03-All-pass_Filter-1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="789px" max-heigth="298px" path="assets/img/posts/karplus-drums/03-All-pass_Filter-2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 5. Pitch Bend

Using a ramp generator to modulate the frequency reinforces the drum-like quality to the sound. Additionally, the same ramp can be set to enhance the attack by distorting the first few milliseconds. Although the only parameter for this section is the ramp’s decay time, changing the ramp’s curve and the amount of frequency modulation will also affect the fundamental frequency perception  and attack of the instrument.

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="646px" max-heigth="481px" path="assets/img/posts/karplus-drums/04-Pitch-Bend-1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="745px" max-heigth="430px" path="assets/img/posts/karplus-drums/04-Pitch-Bend-2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 6. Snares

Finally, this instrument can be turned into a snare drum by adding snares using an envelope follower of the drum output to modulate the amplitude of a filtered white noise layer. Using a band-pass at 3 kHz to filter the white noise will provide a more credible snare sound. Changing the level of this layer can mean the difference between a snare drum sound and a regular drum.

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" max-width="651px" max-heigth="509px" path="assets/img/posts/karplus-drums/05-Snares.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## 7. Conclusion

Although `[mymembrane~]` can provide some realistic acoustic drum sounds, the parameters could be reworked for easier sound design. For example, adding real physical-modelling variables such as tension and a variety of excitation sources like different drum sticks.

This instrument is currently available for download at the pd-mkmr repository, under the instruments folder: [https://github.com/MikeMorenoDSP/pd-mkmr](https://github.com/MikeMorenoDSP/pd-mkmr) and a demo can be heard here: [https://youtu.be/SpC3t1EVF_Q](https://youtu.be/SpC3t1EVF_Q).

## References

* [Universal Audio - Allpass Filters](https://www.uaudio.com/blog/allpass-filters/)
* [Julius O. Smith - Allpass Two Combs](https://ccrma.stanford.edu/~jos/pasp/Allpass_Two_Combs.html)
* [Julius O. Smith - Extended Karplus Strong Algorithm](https://ccrma.stanford.edu/~jos/pasp/Extended_Karplus_Strong_Algorithm.html)
