---
layout: post
title: Pure Data FAQ
description: "Frequently Asked Questions about Pure Data."
tags:
- pure data
toc:
  sidebar: right
related_posts: false
---

These are the Frequently Asked Questions on the [Pure Data Discord Server](https://discord.gg/aNd8RrT).

- [1. What version of Pure Data should I download?](#1-what-version-of-pure-data-should-i-download)
- [2. How can I change the color scheme?](#2-how-can-i-change-the-color-scheme)
- [3. What tutorials or books do you recommend for beginners?](#3-what-tutorials-or-books-do-you-recommend-for-beginners)
- [4. How do I download and install external libraries?](#4-how-do-i-download-and-install-external-libraries)
- [5. Which libraries should I download?](#5-which-libraries-should-i-download)
- [6. How do I send audio or MIDI from Pd to another application?](#6-how-do-i-send-audio-or-midi-from-pd-to-another-application)
- [7. How can I render the audio from a pd patch in offline mode?](#7-how-can-i-render-the-audio-from-a-pd-patch-in-offline-mode)
- [8. Gem does not work on my macOS](#8-gem-does-not-work-on-my-macos)

Check other questions on the official Pd FAQ: [https://puredata.info/docs/faq](https://puredata.info/docs/faq)

## 1. What version of Pure Data should I download?

There are different distributions (distros) of Pure Data, but the most update and compatible of all is the vanilla version. Personally, I would recommend Pd next.

- [Pure Data Vanilla](https://puredata.info/downloads/pure-data) - The Original, but you can always customize it by installing third party libraries, which is easy with the included package management system (deken).
- [Plug Data](https://plugdata.org/) - Pd as a plug-in and standalone app. Enhanced UI and UX (similar to that of Max MSP). It comes with two pre-installed libraries (cyclone and else). Recommended for beginners.
- [Pd Next](https://github.com/sebshader/pdnext/releases) - Color themed Pd. Pd vanilla but with color customization.
- [Pd CEAMMC](https://puredata.info/downloads/ceammc) - Fully compatible with Pd Vanilla, but with enhanced UI tweaks and pre-installed with the CEAMMC library which contains plenty of audio and UI objects.
- [Pd Extended](https://puredata.info/downloads/pd-extended/releases/0.42.5) - Dead/Outdated since 2010, but recognized for its ease of use and pre-installed libraries.
- [Purr Data](https://puredata.info/downloads/purr-data) - Extended’s successor. It comes pre-installed libraries, improved appearance and experience. Note: It has some incompatibilities/differences with vanilla and can be glitchy at times.

## 2. How can I change the color scheme?

- The easiest route would be to download/install [Pd-next](https://github.com/sebshader/pdnext/releases) and then download its [color theme plug-in](https://github.com/sebshader/color-themes-plugin), just follow the instructions.
- On Purr Data you can change the color scheme by going to Preferences > GUI > GUI Preset.
- On Pd vanilla, you can only change the background color by going to pdtk_canvas.tcl (Applications/Pd/Contents/Resources/tcl) and change the value in line 121 to any hexadecimal color:

``` tcl
-background #fcfc7e
```

## 3. What tutorials or books do you recommend for beginners?

- [Programming Electronic Music in Pd](http://pd-tutorial.com/) - (Online book) It begins with explanations of basic programming and acoustic principles, then gradually builds up to the more advanced electronic music processing techniques
- [FLOSS Manuals Pure Data](http://archive.flossmanuals.net/pure-data/) - (Online book) Learn media programming with Pd from the beginning, it covers audio, video, music, sensors, and more.
- [Cheetomoskeeto’s Pd Lectures](https://www.youtube.com/playlist?list=PL12DC9A161D8DC5DC) - (Videos) although a bit outdated, these still hold up as great starting tutorials for Pd with a good pace.
- [Sound Simulator’s Pd tutorials](https://www.youtube.com/playlist?list=PLyFkFo29zHvD4eRftIAjcLqIXCtSo7w8g) - (Videos) Great edited beginner tutorial videos to get started with Pd on sound synthesis, sequencing and generative music.
- [Simon Hutchinson’s Pd Tutorials](https://www.youtube.com/playlist?list=PL7w4cOVVxL6FB_mmJ77C6fdV8G6L4zDut) - (Videos) Easy-to-follow tutorials, targeted to musicians with no programming experience necessary.
- [Really Useful Plugins’ Pd Tutorials](https://www.youtube.com/channel/UCeemOWHUMcAc5vIPI9x05PQ/videos) - (Videos) Tutorials on sound synthesis focused on emulating synthesizers and drum machines.
- [QCGInteractiveMusic’s Pd Tutorials](https://www.youtube.com/playlist?list=PLuxj2jXSuTvvqYcDLJ-poN-JxvqX0wq-m) - (Videos) Lengthy tutorial series about different synthesis and audio processing techniques.
- Pure Data’s Help Browser: Pd > Help > Browser - (Patches) included in every Pd distribution, these cover the basics and more advanced patches on different topics.

For more intermediate or advanced users:

- [Live Electronics Tutorial](https://github.com/porres/Live-Electronics-Tutorial) - (Patches) A more advanced but in depth tutorial on the theory and practice of Live Electronics and computer music, synthesis/DSP (digital Signal Processing).
- [The Theory and Technique of Electronic Music](http://msp.ucsd.edu/techniques.htm) - (Online book) From the creator of Pure Data, a more mathematical view into Pure data, includes patches.
- [Designing Sound](https://mitpress.mit.edu/books/designing-sound) - Paid book about procedural audio and how to create sound effects using Pure Data.
- [Pure Data: Electronic Music and Sound Design](https://www.contemponet.com/shop/pure-data-electronic-music-and-sound-design-1/) - Paid book on sound synthesis and signal processing.

More tutorials here: [https://puredata.info/docs/tutorials/](https://puredata.info/docs/tutorials/)

## 4. How do I download and install external libraries?

Download them using deken (Pd’s integrated package management system):

1. Open Pure Data.
2. Click on the “Help” menu, then on “Find externals…”.
3. Type the name of the library or an object. Example: “cyclone”.
4. Click “Search” or type Enter.
5. Click on the first result. This should download the library to your externals' directory.

Or download them via GitHub / GitLab and place the folder on your external’s directory.

To install it, make sure you have the library’s folder on your Path:

1. Open Pd.
2. Click on “Preferences” > “Path…”.
3. If your folder library isn’t set click on “New…” and add your folder. Example: “~/Documents/Pd/externals/cyclone”.
4. Click “Ok” or type Enter.

## 5. Which libraries should I download?

Depends on the nature of your project. Only abstraction libraries are compatible for embeddable projects (DAW plug-ins, web, mobile app, etc.), since they are made solely with vanilla objects. External libraries on the other hand are more CPU efficient, but most of them work only in Pd.

Here are the usually most downloaded libraries:

- [cyclone](https://github.com/porres/pd-cyclone) - (externals) a set of Pd objects cloned from Max/MSP.
- [else](https://github.com/porres/pd-else) - (externals) big library for a complete computer music experience.
- [ceammc](https://github.com/uliss/pure-data) - (externals) general purpose library with plenty of GUI objects, synthesis and effects.
- [zexy](https://git.iem.at/pd/zexy) - (externals) the Swiss army knife for Pure Data.
- [iemlib](https://git.iem.at/pd/iemlib) - (externals) collection of general purpose objects and filters.
- [timbreID](https://github.com/wbrent/timbreIDLib) - (externals) audio analysis for Pure Data.
- [spectralToolkit](https://github.com/cooperbaker/Pd-Spectral-Toolkit) - (externals) Spectral Signal Processing Toolkit.
- [gem](https://github.com/umlaeute/Gem) - (externals) library for creating visuals using openGL.
- [ofxOfelia](https://github.com/cuinjune/Ofelia) - (externals) library for creating visuals with openFrameworks and Lua.
- [audiolab](https://github.com/solipd/AudioLab) - (abstractions) library for electroacoustic composition and live electronics.
- [heavylib](https://github.com/enzienaudio/heavylib) - (abstractions) heavy (hvcc) compatible abstractions.
- [mmb](https://github.com/dotmmb/mmb) - (abstractions)  library with anti aliased oscillators, filters, etc.
- [mkmr](https://github.com/MikeMorenoDSP/pd-mkmr) - (abstractions) synthesized instruments library.

You can also search objects or libraries and download via the deken website:
[http://deken.puredata.info/](http://deken.puredata.info/)

## 6. How do I send audio or MIDI from Pd to another application?

Here are some paid and free options for different OS:

Audio:

- [Sound Siphon](https://staticz.com/soundsiphon/) ($50 USD / macOS)
- [Loopback](https://rogueamoeba.com/loopback/) ($115 USD / macOS)
- [SoundFlower](https://github.com/mattingalls/Soundflower/releases) (Free / macOS)
- [BlackHole](https://github.com/ExistentialAudio/BlackHole/releases) (Free / macOS)
- [Virtual Audio Cable](https://vac.muzychenko.net/en/index.htm) ($30 USD / Windows)
- [VB-Audio Virtual Cable](https://vb-audio.com/Cable/) (Free / Windows)
- [VoiceMeeter](https://vb-audio.com/Voicemeeter/index.htm) (Free / Windows)
- [Jack](https://jackaudio.org/) (Free / cross-platform)
- [Helvum](https://gitlab.freedesktop.org/pipewire/helvum) (Free / Linux)

MIDI:

- [Virtual MIDI Bus](https://help.ableton.com/hc/en-us/articles/209774225-Setting-up-a-virtual-MIDI-bus) (FREE / macOS)
- [Loop MIDI](https://www.tobias-erichsen.de/software/loopmidi.html) (FREE / Windows)
- [Jack](https://jackaudio.org/) (Free / Linux)

## 7. How can I render the audio from a pd patch in offline mode?

Send the message `fast-forward $1` to a `send pd` object with the amount of milliseconds you want to render. More info here: [3.fast-forward.pd](https://github.com/porres/Live-Electronics-Tutorial/blob/master/Examples/Part.01-The.Basics/01-Pd.Quickstart/3.fast-forward.pd)

## 8. Gem does not work on my macOS

Try an [0.51-3 or an older version of pd vanilla](https://msp.ucsd.edu/Software/) and use [Rosetta](https://support.apple.com/en-us/102527).
If none of that worked, search for your issue on [Gem's GitHub repository](https://github.com/umlaeute/Gem/issues).
