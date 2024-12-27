---
layout: page
title: Kessler I (2018)
description: "Kessler Syndrome is a series of sculptures that reflects on the current state of telecommunications and their effects on how we exchange information."
tags: 
- portfolio
- sound installation
- voice activity detection
img: assets/img/projects/2019-08-06-kessler-i.jpg
importance: 5
---

![Kessler I](/assets/img/projects/2019-08-06-kessler-i.jpg)

_Kessler I" from the "Kessler Syndrome" series_
_By Ernesto Walker_
_Sculpture / Sound Installation (850 x 400 x 200 cm)_ 
_Exhibited at Monterrey’s Museum of Contemporary Art_

**Kessler Syndrome** is a series of sculptures that reflects on the current state of telecommunications and their effects on how we exchange information.

In 2018 Ernesto Walker contacted me to create a Pure Data patch for his sculpture that could automatically identify and record voices in real-time on the exhibition room so they could be played back on a radio transmitter.

The first tests of the **voice activity detection (VAD)** algorithm were successful in a controlled environment with a combination of a volume threshold using the `[env~]` object and a **zero-crossing rate** threshold using the `[zeroCrossing~]` object from William Brent’s timbreID library.

In contrast, there were plenty of obstacles at the museum given the room’s reverberation, hums, and incidental noises. The most prominent issue was the constant hum made by the sculpture’s computer passed through vibration. This was solved by analyzing the background noise with a spectrograph and using a series of notch filters on the respective humming frequencies. The reverberation issue was somewhat solved with the use of a noise gate and expander, but it was still present in the audio recordings.

An alternative to the zero-crossing rate method is using a **pitch detection algorithm** like `[sigmund~]` to distinguish between tonal and noise signals. However, both of these methods are prone to detect any pitched sound that’s in the **voice frequency** as voice. So a higher **signal-to-noise ratio** would be optimal to minimize these false-negative errors.

A more advanced option would be to use other objects from the timbreID library like `[cepstrum~]` to use vowel recognization as a conditional to detect voice activity.

Finally, these recordings were played through an FM transmitter in a non-repeating order using Drymonitis’ `[vanillaUrn]` abstraction, and the museum visitors were given small radios to listen to this installation.

![Radio](/assets/images/2019-08-06-radio.jpg)

## References

* Alexandros Drymonitis, ["Miscellaneous Abstractions"](https://github.com/alexdrymonitis/miscellaneous_abstractions/)
* Ernesto Walker, ["Kessler I"](http://www.ernestowalker.com/I_E/KesslerSyndrome.html)
* William Brent, [“A Timbre Analysis and Classification Toolkit for Pure Data”](http://williambrent.conflations.com/papers/timbreID.pdf)
* William Brent, ["timbreID"](https://github.com/wbrent/timbreID)
* Wikipedia, ["Voice Activity Detection"](https://en.wikipedia.org/wiki/Voice_activity_detection)
* Wikipedia, ["Voice frequency"](https://en.wikipedia.org/wiki/Voice_frequency)
