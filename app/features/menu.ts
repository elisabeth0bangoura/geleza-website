export type MenuItem = {
  title: string;
  description: string;
  keywords?: string;
  link: string;
  icon: string;
  group:
    | "Writers"
    | "Main"
    | "Personal Tools"
    | "Student Tools"
    | "Summarizers"
    | "Blogging"
    | "Media"
    | "Career Tools";
};

const menu: MenuItem[] = [
  {
    title: "Zeda Chat",
    description:
      "AI Powered Chat with personalities, characters and full customization",
    icon: "🤖",
    keywords: "chat, gpt, bot",
    link: "/chat",
    group: "Main",
  },

  {
    title: "AI Writer",
    description:
      "Let the AI write essays, reports, emails, etc. Edit and paraphrase with ease.",
    icon: "✍️",
    keywords: "write, ai essay, letter, cv, job, curriculum, vitae",
    link: "/ai-writer",
    group: "Writers",
  },

  {
    title: "Video Script Writer",
    description:
      "Write high quality video scripts for Youtube, TikTok & Instagram & more.",
    icon: "📷",
    link: "/script-writer/new",
    keywords: "youtube, tiktok, instagram, facebook, twitter, write",
    group: "Writers",
  },
  {
    title: "Paraphraser",
    description:
      "Paraphrase any written content. Upload Word & PDF documents for paraphrasing.",
    icon: "📰",
    link: "/paraphraser",
    keywords: "plagiarism, school, education, students",
    group: "Writers",
  },

  // STUDENT TOOLS
  {
    title: "PrepPal - AI Exam Prep",
    description:
      "Prepare for your exams with ease. Use AI to generate random exam questions and answers.",
    icon: "🎒",
    keywords: "school, exam, test, learn, students",
    link: "/preppal",
    group: "Student Tools",
  },
  {
    title: "Assignment Writer",
    description:
      "Get answers to any assignment questions with the help of AI. Works with any subject/course.",
    icon: "📝",
    link: "/assignments",
    keywords: "school, exam, test, learn, students",
    group: "Student Tools",
  },
  {
    title: "The Library",
    description:
      "Read anything you want and anytime you want. Powered by state-of-the-art AI writer.",
    icon: "📚",
    link: "/library",
    group: "Student Tools",
    keywords: "school, exam, read, learn, students",
  },

  // SUMMARIZERS
  {
    title: "Summarizer",
    description:
      "Summarize any file or written document, extract important information, points and keywords",
    icon: "📜",
    link: "/summarizer",
    keywords: "summary, plagiarism, pdf, document",
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

  {
    title: "PixMa - AI Art Creator",
    description:
      "Create beautiful art & images with the help of AI. Download and save created artwork.",
    icon: "🎨",
    link: "/pixma/create",
    group: "Media",
  },

  // {
  //   title: "Text to Audio",
  //   description:
  //     "Generate audio and high quality voices for your video projects or any purpose.",
  //   icon: "🗣️",
  //   link: "/text-to-audio",
  //   group: "Media",
  // },

  // CAREER TOOLS

  {
    title: "Interview Assist",
    description:
      "Prepare for an interview by answering potential questions and improving your communication.",
    icon: "💼",
    link: "/interviewer",
    keywords: "cv, interview, cover letter, job, application, work, career",
    group: "Career Tools",
  },
  {
    title: "Cover Letters Maker",
    description:
      "Generate attention grabbing cover letters for any position and career.",
    icon: "🔤",
    link: "/cover-letter",
    keywords: "cv, interview, cover letter, job, application, work, career",
    group: "Career Tools",
  },
  {
    title: "CV Revamp",
    description:
      "Use AI to analyze your CV for potential improvements and improve your chances of getting hired.",
    icon: "💪🏾",
    link: "/cv-revamp",
    keywords: "cv, interview, cover letter, job, application, work, career",
    group: "Career Tools",
  },

  // PERSONAL TOOLS
  {
    title: "File Manager",
    description:
      "Free unlimited secure file storage and manager. Manage folders, used storage and more.",
    icon: "🗃️",
    link: "/documents",
    group: "Personal Tools",
  },
  {
    title: "My Notes",
    description:
      "Write beautiful notes with Geleza. Organize and find all your notes in one place.",
    icon: "📒",
    link: "/notes",
    group: "Personal Tools",
  },
];

export default menu;
