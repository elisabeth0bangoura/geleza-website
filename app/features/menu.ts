export type MenuItem = {
  title: string;
  description: string;
  keywords?: string;
  link: string;
  icon: string;
  group:
    | "Writers"
    | "Chat"
    | "Personal Tools"
    | "Student Tools"
    | "Summarizers"
    | "Blogging"
    | "Media";
};

const menu: MenuItem[] = [
  {
    title: "Zeda Chat",
    description:
      "AI Powered Chat with personalities, characters and full customization",
    icon: "🤖",
    keywords: "chat, gpt, bot",
    link: "/chat",
    group: "Chat",
  },

  // WRITER TOOLS
  // {
  //   title: "Co-Writer",
  //   description:
  //     "Write and edit high quality content with the help of AI by your side.",
  //   icon: "⌨️",
  //   keywords: "write, ai essay, letter",
  //   link: "/co-writer",
  //   group: "Writers",
  // },
  {
    title: "AI Writer",
    description:
      "Let the AI write essays, reports, emails, etc. Edit and paraphrase with ease.",
    icon: "✍️",
    keywords: "write, ai essay, letter",
    link: "/ai-writer",
    group: "Writers",
  },
  {
    title: "Paraphraser",
    description:
      "Paraphrase any written content. Upload Word & PDF documents for paraphrasing.",
    icon: "📰",
    link: "/paraphraser",
    group: "Writers",
  },
  {
    title: "Video Script Writer",
    description:
      "Write high quality video scripts for Youtube, TikTok & Instagram Reels with AI.",
    icon: "📷",
    link: "/script-writer",
    group: "Writers",
  },

  // STUDENT TOOLS
  {
    title: "PrepPal - Exam Tools",
    description:
      "Prepare for your exams with ease. Use AI to generate random exam questions and answers.",
    icon: "🎒",
    keywords: "school, exam, test, learn",
    link: "/preppal",
    group: "Student Tools",
  },
  {
    title: "Assignment Writer",
    description:
      "Get answers to any assignment questions with the help of AI. Works with any subject/course.",
    icon: "📝",
    link: "/assignments",
    group: "Student Tools",
  },
  {
    title: "The Library (Free)",
    description:
      "Read anything you want and anytime you want. Powered by state-of-the-art AI writer.",
    icon: "📚",
    link: "/library",
    group: "Student Tools",
  },

  // SUMMARIZERS
  {
    title: "Content Summarizer",
    description:
      "Summarize any file or written document, extract important information, points and keywords",
    icon: "📜",
    link: "/summarizer",
    group: "Summarizers",
  },
  // {
  //   title: "Audio & Video Summarizer",
  //   description:
  //     "Summarize and chat with any recorded videos and audio files, including Youtube videos.",
  //   icon: "▶️",
  //   link: "/media-summarizer",
  //   group: "Summarizers",
  // },
  // {
  //   title: "Audio to Text",
  //   description:
  //     "Convert any recorded audio to text. Works for recorded voice notes, meetings, etc.",
  //   icon: "🎚️",
  //   link: "/audio-tools",
  //   group: "Summarizers",
  // },

  // MEDIA TOOLS
  // {
  //   title: "PixMa - AI Art Generator",
  //   description:
  //     "Create beautiful art & images with the help of AI. Save and download your created artwork.",
  //   icon: "🖼️",
  //   link: "/pixma",
  //   group: "Media",
  // },
  // {
  //   title: "Text to Audio",
  //   description:
  //     "Generate audio and high quality voices for your video projects or any purpose.",
  //   icon: "🗣️",
  //   link: "/text-to-audio",
  //   group: "Media",
  // },

  // PERSONAL TOOLS
  {
    title: "File Manager (Free)",
    description:
      "Free unlimited secure file storage and manager. Manage folders, used storage and more.",
    icon: "🗃️",
    link: "/documents",
    group: "Personal Tools",
  },
  {
    title: "My Notes (Free)",
    description:
      "Write beautiful notes with Geleza. Organize and find all your notes in one place.",
    icon: "📒",
    link: "/notes",
    group: "Personal Tools",
  },
];

export default menu;
