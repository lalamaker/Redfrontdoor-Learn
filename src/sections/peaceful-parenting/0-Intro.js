export default {
  title: "👋 Welcome to Peaceful Parenting",
  key: "intro",
  maxStates: {
    intro: {
      state: "wave",
      message: "Hi! I'm Emma, your peaceful parenting guide! 👋",
      miniMessage: "Let's transform parenting! 🌈",
      expandedMessage:
        "I'm excited to help you learn powerful tools to connect with your child and create positive change without conflict.",
    },
  },
  steps: [
    {
      type: "intro",
      content: {
        title: "Welcome to Your Peaceful Parenting Journey! 🌈",
        description:
          "Discover how to support your child with compassion and wisdom",
        buttonText: "Start My Transformation",
        audioSrc: "/audio/peaceful-parenting/intro.mp3",
        srtSrc: "/audio/peaceful-parenting/intro.srt",
        spokenContent:
          "Hi there! Are you ready to learn a revolutionary approach to parenting? Nonviolent Resistance isn't about being passive - it's about being powerfully present and creating meaningful change. Imagine turning power struggles into opportunities for connection. We'll explore how to understand your child's world, stay calm in challenging moments, and find creative solutions that respect both of you. By the end of this journey, you'll have practical tools to transform your relationship and support your child's growth.",
        tools: [
          {
            icon: "🤝",
            title: "Understanding Connection",
            description: "We'll dive deep into your child's perspective",
            theme: "blue",
            examples: ["👀", "👂", "💕"],
          },
          {
            icon: "🧘",
            title: "Deescalation Skills",
            description: "Learn to stay calm and present",
            theme: "purple",
            examples: ["😌", "🤲", "🌟"],
          },
          {
            icon: "💡",
            title: "Creative Problem Solving",
            description: "Find innovative ways to support change",
            theme: "green",
            examples: ["🧩", "🌈", "🤔"],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "You'll learn to see challenges as opportunities",
          },
          {
            icon: "🌟",
            text: "Discover your inner strength as a parent",
          },
          {
            icon: "✨",
            text: "Create a deeper, more supportive relationship",
          },
        ],
      },
    },
  ],
};
