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
  },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-learning",
          title: "Learning",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
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
    },{id: "projects-arturia-internship-2016",
          title: 'Arturia Internship (2016)',
          description: "Beta Tester for the V Collection 5 &amp; audio programmer for a drum sampler prototype.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arturia-internship/";
            },},{id: "projects-discography",
          title: 'Discography',
          description: "Music I&#39;ve composed for Studio and Live settings by myself or with collaborators.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/discography/";
            },},{id: "projects-drum-machine-moon-echo-audio",
          title: 'Drum Machine - Moon Echo Audio',
          description: "A fully synthesized drum machine custom made for Moon Echo Audio.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drum-machine-moon-echo-audio/";
            },},{id: "projects-filmography",
          title: 'Filmography',
          description: "Films and Short Films I&#39;ve worked on as a Sound Editor, Sound Designer or Composer.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/filmography/";
            },},{id: "projects-kessler-i-2018",
          title: 'Kessler I (2018)',
          description: "Kessler Syndrome is a series of sculptures that reflects on the current state of telecommunications and their effects on how we exchange information.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kessler-i/";
            },},{id: "projects-mexsynthco-2019",
          title: 'MexSynthCo 2019',
          description: "Mexico&#39;s first synthesizer convention where I gave a speech about making plugins with Pure Data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mexsynthco-2019/";
            },},{id: "projects-neon-scifi-neuro",
          title: 'Neon SciFi - Neuro',
          description: "A private event presenting a set of interactive installations controlled by EEG headbands.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neon-scifi-neuro/";
            },},{id: "projects-producer-credits",
          title: 'Producer Credits',
          description: "Music I helped produce or record.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/producer-credits/";
            },},{id: "projects-stivn-studios-metaportals",
          title: 'Stivn Studios - MetaPortals',
          description: "Sound Design for a set of NFTs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stivn-studios/";
            },},{id: "projects-teaching-experience",
          title: 'Teaching Experience',
          description: "A list of workshops and courses that I have given.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/teaching-experience/";
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
