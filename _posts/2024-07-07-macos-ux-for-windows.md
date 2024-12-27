---
layout: post
title: macOS UX for Windows
description: "Apps and Settings to make Windows feel more like macOS."
tags:
- windows
- ux
- workflow
related_posts: true
pretty_table: true
thumbnail: /assets/img/posts/macOS-UX-for-Windows.jpg
---

<div class="row" style="text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/posts/macOS-UX-for-Windows.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Table of Contents

- [Applications](#applications)
- [Audio Apps](#audio-apps)
- [Windows Settings](#windows-settings)
- [Other useful Apps](#other-useful-apps)

---

I recently switched from an old 2012 MacBook to a ThinkPad e14 and felt the whiplash of Windows UX: bloatware, unintuitive shortcuts, etc.

So without further ado, here are some FOSS apps, utilities and settings to make Windows UX more like macOS.

> *Note: some of these are GitHub links, so if you want to install them click on “Releases” and then look for the installer under “Assets”*

## [Applications](#applications)

These apps are good enough to bring some key aspects of the macOS user experience to Windows.

| Alternative to               | App Title (Link)                                                                           | Description                                                                                                                                                                                   | Native alternative                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔍 Spotlight                  | [Power Toys](https://aka.ms/getPowertoys)                                                  | Power Toys does not only contain a Spotlight alternative, but also many other helpful modules like: FancyZones to create custom window layouts, Keyboard Manager to Remap shortcuts and keys. | Use `Windows + S` to open “Search”.                                                                                                                                              |
| 👁️‍🗨️ Space bar Preview          | [Quick Look](https://www.microsoft.com/store/apps/9nv4bs3l1h4s)                            | Bring macOS “Quick Look” feature to Windows.                                                                                                                                                  | Use `Alt + P` to show the Preview Pane.                                                                                                                                          |
| 📦 Double-click to decompress | [7zip](https://7-zip.org/) & [7-ade](https://telcontar.net/Software/7-ade/)                | 7-ade provides double-click expansion of archives into the directory containing the archive.                                                                                                  | Right click > Extract All…                                                                                                                                                       |
| ↪ macOS Alt + Tab            | [MacAppSwitcher](https://github.com/hdlx/MacAppSwitcher)                                   | This program brings MacOS-like application switching to Windows.                                                                                                                              | Use `Windows + T` to toggle between apps.                                                                                                                                        |
| 🗂️ Folder color               | [Folcolor](https://github.com/kweatherman/Folcolor)                                        | Windows explorer folder coloring utility.                                                                                                                                                     | Manually change the folder’s icon. Suggestion: Download icons from  [Google Icons](https://fonts.google.com/icons) and convert them to .ico using [GIMP](https://www.gimp.org/). |
| 📄 Preview                    | [Okular](https://okular.kde.org/)                                                          | Read PDF documents, comics and EPub books, visualize Markdown documents, and much more.                                                                                                       | Microsoft Edge                                                                                                                                                                   |
| 📖 Apple Books                | [Calibre](https://calibre-ebook.com/)                                                      | E-book library management application made by users, for users.                                                                                                                               | None                                                                                                                                                                             |
| 📟 macOS Terminal             | [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) | Use Linux applications, utilities, and Bash command-line tools directly on Windows.                                                                                                           | Windows Terminal                                                                                                                                                                 |
| 👌 Three Finger Drag          | [Three Finger Drag On Windows](https://github.com/ClementGre/ThreeFingersDragOnWindows)    | Enables macOS-style three-finger dragging functionality on Windows Precision touchpads.                                                                                                       | None                                                                                                                                                                             |
| 🎞️ QuickTime Player           | [VLC](https://www.videolan.org/vlc/)                                                       | Cross-platform multimedia player supporting multiple video and audio formats.                                                                                                                 | Windows Media Player                                                                                                                                                             |
| 🕵🏻‍♂️ Zoom accessibility         | [ZoomIt](https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit)                  | ZoomIt is a screen zoom, annotation, and recording tool for technical presentations and demos.                                                                                                | “Magnifier” - Use `Windows + Plus` to turn on, `Ctrl + Alt + Mouse Wheel` to zoom in/out, `Windows + Esc` to turn it off.                                                        |

<p></p>

## [Audio Apps](#audio-apps)

These are mainly audio drivers that could help with the latency and performance for audio apps.

| Alternative to                                                                                                                       | App Title (Link)                                                                                                       | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Audio driver                                                                                                                         | [FlexASIO](https://github.com/dechamps/FlexASIO) & [FlexASIO GUI](https://github.com/flipswitchingmonkey/FlexASIO_GUI) | A flexible universal ASIO driver that uses the PortAudio sound I/O library.                                                           |
| Audio driver                                                                                                                         | [KoordASIO](https://github.com/koord-live/KoordASIO)                                                                   | FlexASIO derivative that focuses on WASAPI and user convenience.                                                                      |
| Audio driver                                                                                                                         | [ASIO4ALL](https://www.asio4all.org/)                                                                                  | Note: I would only recommend this option to use its aggregate audio device option. Other than that, it’s not that great or intuitive. |
| [BlackHole](https://github.com/ExistentialAudio/BlackHole)                                                                           | [VB Cable Virtual Audio Device](https://vb-audio.com/Cable/index.htm)                                                  | Send audio from one application to another.                                                                                           |
| [IAC Driver (Virtual MIDI Bus)](https://support.apple.com/guide/audio-midi-setup/transfer-midi-information-between-apps-ams1013/mac) | [Loop MIDI](https://www.tobias-erichsen.de/software/loopmidi.html)                                                     | Create virtual loopback MIDI-ports to interconnect applications.                                                                      |
| [Virtual MIDI Network](https://support.apple.com/guide/audio-midi-setup/share-midi-information-over-a-network-ams1012/mac)           | [rtpMIDI](https://www.tobias-erichsen.de/software/rtpmidi.html)                                                        | Allows MIDI applications to communicate via network with other computers.                                                             |

<p></p>

## [Windows Settings](#windows-settings)

Mainly, how to remove annoying features and settings from Windows.

| Setting                             | Article URL                                                                            | Commentary                                                                                    |
| ----------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Optimize Windows settings for Audio | <https://zoomcorp.com/documents/2116/OptimizeWindows10_E.pdf>                          | WARNING: Be careful NOT to disable Microsoft services, this can lock you out of the computer. |
| Turn Off System Sounds              | <https://www.thewindowsclub.com/turn-off-notification-system-sounds-windows-10>        |                                                                                               |
| End Task in Taskbar Context Menu    | <https://www.thewindowsclub.com/how-to-show-end-task-item-in-the-taskbar-context-menu> | Great alternative to `Cmd + Q` or Force Quit.                                                 |
| Enable AutoEndTasks                 | <https://www.thewindowsclub.com/how-to-enable-or-disable-autoendtasks-in-windows>      | Automatically closes an unresponsive program.                                                 |
| Disable News and Interests          | <https://www.thewindowsclub.com/enable-or-disable-news-and-interests-on-taskbar>       |                                                                                               |
| Disable Search Highlights           | <https://www.thewindowsclub.com/how-to-disable-search-highlights-in-windows>           |                                                                                               |

<p></p>

## [Other useful Apps](#other-useful-apps)

| App Title (Link)                                           | Description                                               |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| [O&O Shutup 10++](https://www.oo-software.com/en/shutup10) | Disable telemetry tool for Windows 10 & 11.               |
| [Bleachbit](https://www.bleachbit.org/)                    | Clean Your System and Free Disk Space.                    |
| [Keyviz](https://mularahul.github.io/keyviz/)              | Free and open-source software for visualizing keystrokes. |
| [OpenBoard](https://openboard.ch/index.en.html)            | Interactive whiteboard for schools and universities       |
| [OBS](https://obsproject.com/)                             | Software for video recording and live-streaming.          |

> *I discovered many of these apps through my favorite website for searching FOSS Software: <https://alternativeto.net/>. If you have any recommendations, let me know.*
