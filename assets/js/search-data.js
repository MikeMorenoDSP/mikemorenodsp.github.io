// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-learning",
          title: "Learning",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-macos-ux-for-windows",
      
        title: "macOS UX for Windows",
      
      description: "Apps and Settings to make Windows feel more like macOS.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/macos-ux-for-windows/";
        
      },
    },{id: "post-pure-data-faq",
      
        title: "Pure Data FAQ",
      
      description: "Frequently Asked Questions about Pure Data.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/pure-data-faq/";
        
      },
    },{id: "post-basic-waveforms-in-pd-vanilla",
      
        title: "Basic waveforms in pd vanilla",
      
      description: "How to create basic synthesizer waveforms.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/basic-waveforms/";
        
      },
    },{id: "post-realistic-drums-with-karplus-strong-synthesis",
      
        title: "Realistic drums with karplus-strong synthesis",
      
      description: "Documentation on [mymembrane~], an algorithm to synthesize realistic drum sounds.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/Realistic-drums-with-karplus-strong-synthesis/";
        
      },
    },{id: "post-low-effort-equal-loudness-oscillator",
      
        title: "Low-effort equal-loudness oscillator",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/equal-loudness-oscillator/";
        
      },
    },{id: "post-ep-mk1-documentation",
      
        title: "EP-MK1 Documentation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/documentation-ep-mk1/";
        
      },
    },{id: "post-algorithmic-composition-catarina-2019",
      
        title: "Algorithmic Composition // Catarina (2019)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/algorithmic-composition-catarina/";
        
      },
    },{id: "portfolio-arturia-internship-2016",
          title: 'Arturia Internship (2016)',
          description: "Beta Tester for the V Collection 5 &amp; audio programmer for a drum sampler prototype.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/arturia-internship/";
            },},{id: "portfolio-discography",
          title: 'Discography',
          description: "Music I&#39;ve composed for Studio and Live settings by myself or with collaborators.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/discography/";
            },},{id: "portfolio-drum-machine-moon-echo-audio",
          title: 'Drum Machine - Moon Echo Audio',
          description: "A fully synthesized drum machine custom made for Moon Echo Audio.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/drum-machine-moon-echo-audio/";
            },},{id: "portfolio-filmography",
          title: 'Filmography',
          description: "Films and Short Films I&#39;ve worked on as a Sound Editor, Sound Designer or Composer.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/filmography/";
            },},{id: "portfolio-kessler-i-2018",
          title: 'Kessler I (2018)',
          description: "Kessler Syndrome is a series of sculptures that reflects on the current state of telecommunications and their effects on how we exchange information.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/kessler-i/";
            },},{id: "portfolio-mexsynthco-2019",
          title: 'MexSynthCo 2019',
          description: "Mexico&#39;s first synthesizer convention where I gave a speech about making plugins with Pure Data.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/mexsynthco-2019/";
            },},{id: "portfolio-neon-scifi-neuro",
          title: 'Neon SciFi - Neuro',
          description: "A private event presenting a set of interactive installations controlled by EEG headbands.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/neon-scifi-neuro/";
            },},{id: "portfolio-neurohumanities-lab",
          title: 'NeuroHumanities Lab',
          description: "Interactive art installation meant for research on the participant’s emotions through EEG.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/neurohumanities-lab/";
            },},{id: "portfolio-producer-credits",
          title: 'Producer Credits',
          description: "Music I helped produce or record.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/producer-credits/";
            },},{id: "portfolio-stivn-studios-metaportals",
          title: 'Stivn Studios - MetaPortals',
          description: "Sound Design for a set of NFTs.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/stivn-studios/";
            },},{id: "portfolio-teaching-experience",
          title: 'Teaching Experience',
          description: "A list of workshops and courses that I have given.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/teaching-experience/";
            },},{id: "software-euklid",
          title: 'Euklid',
          description: "MIDI effect that generates Euclidean Rhythms in real time.",
          section: "Software",handler: () => {
              window.location.href = "/software/Euklid/";
            },},{id: "software-ep-mk1",
          title: 'EP-MK1',
          description: "Real-time synthesized model of an Electric Piano built using Pure Data and Camomile.",
          section: "Software",handler: () => {
              window.location.href = "/software/ep-mk1/";
            },},{id: "software-lira-8",
          title: 'LIRA-8',
          description: "Digital attempt at emulating SOMA Lab&#39;s Lyra-8 signal flow and sound.",
          section: "Software",handler: () => {
              window.location.href = "/software/lira-8/";
            },},{id: "software-m2p",
          title: 'M2P',
          description: "Effect that turns monophonic synthesizers to polyphonic through MIDI and Audio.",
          section: "Software",handler: () => {
              window.location.href = "/software/m2p/";
            },},{id: "software-shin-t",
          title: 'Shin-T',
          description: "Polyphonic subtractive synthesizer made in JUCE using the DaisySP library.",
          section: "Software",handler: () => {
              window.location.href = "/software/shin-t/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/262801511552253963", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6B%65%6D%6F%72%65%6E%6F%64%73%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MikeMorenoDSP", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/mikemorenodsp", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@mikemorenodsp", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
