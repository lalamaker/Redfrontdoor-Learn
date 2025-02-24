// src/sections/0-Intro.js
export default {
  title: "👋 Welcome to Compassionate Boundaries",
  key: "intro",
  maxStates: {
    intro: {
      state: "wave",
      message: "Hi! I'm Alex, your relationship guide! 👋",
      miniMessage: "Let's transform challenging relationships! 🌈",
      expandedMessage:
        "I'm here to help you navigate complex parent relationships with both compassion and healthy boundaries.",
    },
  },
  steps: [
    {
      type: "intro",
      content: {
        title: "Welcome to Your Adult Child-Parent Journey! 🌈",
        description:
          "Learn to navigate complex relationships with compassion and boundaries",
        buttonText: "Start My Journey",
        audioSrc: "/audio/adult-child-parent/intro.mp3",
        srtSrc: "/audio/adult-child-parent/intro.srt",
        spokenContent:
          "Welcome! You're about to learn powerful skills for navigating complex relationships with parents who struggle with abandonment fears, emotional regulation, or grief. This journey isn't about 'fixing' your parent or sacrificing your wellbeing. Instead, we'll explore how to maintain connection while establishing healthy boundaries. You'll learn to understand the roots of challenging behaviors, communicate effectively during difficult moments, set compassionate boundaries, and practice essential self-care. By the end, you'll have practical tools to create more balanced, healthy interactions while honoring both yourself and your parent.",
        tools: [
          {
            icon: "🧠",
            title: "Understanding Triggers",
            description: "Recognize underlying patterns and emotional drivers",
            theme: "blue",
            examples: ["💡", "🔄", "🤔"],
          },
          {
            icon: "💬",
            title: "Communication Strategies",
            description: "Navigate difficult conversations effectively",
            theme: "purple",
            examples: ["👂", "🗣️", "🤝"],
          },
          {
            icon: "🛡️",
            title: "Setting Boundaries",
            description: "Create limits with compassion",
            theme: "green",
            examples: ["⚖️", "🚪", "❤️"],
          },
          {
            icon: "💖",
            title: "Self-Care Practices",
            description: "Maintain your wellbeing throughout",
            theme: "blue",
            examples: ["🧘", "🌱", "✨"],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Each interaction is an opportunity for growth",
          },
          {
            icon: "🌟",
            text: "Balance compassion with healthy boundaries",
          },
          {
            icon: "✨",
            text: "Your wellbeing matters in this relationship",
          },
        ],
      },
    },
    {
      type: "intro",
      content: {
        title: "Understanding Your Journey 🗺️",
        description: "The challenges of adult child-parent relationships",
        buttonText: "Continue",
        spokenContent:
          "Navigating relationships with parents who struggle with abandonment fears, emotional regulation, or grief can be incredibly challenging. You may feel torn between honoring your parent and protecting your own wellbeing. Many adult children face guilt, frustration, and emotional exhaustion. But there's a middle path - one that allows for connection while maintaining healthy boundaries. Throughout this journey, we'll explore practical tools for creating more balanced interactions that honor both you and your parent.",
        tools: [
          {
            icon: "🔄",
            title: "Common Challenges",
            description: "What many adult children experience",
            theme: "blue",
            observations: [
              "Guilt about 'not doing enough'",
              "Walking on eggshells to avoid triggering anger",
              "Emotional exhaustion after interactions",
              "Feeling responsible for parent's emotions",
              "Difficulty maintaining boundaries",
            ],
          },
          {
            icon: "💡",
            title: "What's Possible",
            description: "The balanced relationship",
            theme: "purple",
            observations: [
              "Compassion without enmeshment",
              "Support without sacrificing wellbeing",
              "Clear, respectful communication",
              "Healthy boundaries that allow connection",
              "Self-care without guilt",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Your parent's struggles are not your responsibility to fix",
          },
          {
            icon: "🌟",
            text: "Both compassion and boundaries are necessary for health",
          },
        ],
      },
    },
    {
      type: "intro",
      content: {
        title: "Your Relationship Cheat Sheet 📝",
        description: "Quick reference guide for healthy interactions",
        buttonText: "Save These Guidelines",
        spokenContent:
          "Here's your comprehensive cheat sheet for navigating difficult interactions with your parent. Keep these guidelines handy for those challenging moments when you need a quick reminder of healthy approaches.",
        tools: [
          {
            icon: "💬",
            title: "Communication Guidelines",
            description: "For healthier interactions",
            theme: "blue",
            observations: [
              "Use 'I' statements to express your feelings",
              "Listen actively without immediately problem-solving",
              "Validate emotions without agreeing with all content",
              "Set time limits for difficult conversations",
              "Take breaks when emotions escalate",
              "Redirect focus when conversations become circular",
            ],
          },
          {
            icon: "🛡️",
            title: "Boundary Guidelines",
            description: "For protecting your wellbeing",
            theme: "green",
            observations: [
              "Clearly state your limits without justifying",
              "Use simple, consistent language",
              "Respond rather than react to boundary violations",
              "Have consequences prepared in advance",
              "Start with smaller boundaries before larger ones",
              "Remember: boundaries protect relationships",
            ],
          },
          {
            icon: "❤️",
            title: "Self-Care Guidelines",
            description: "For maintaining your balance",
            theme: "purple",
            observations: [
              "Schedule regular emotional 'decompression' time",
              "Have support people you can call after difficult interactions",
              "Practice emotion regulation techniques daily",
              "Maintain perspective through journaling",
              "Celebrate small victories and progress",
              "Seek professional support when needed",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Progress comes from consistent small actions, not perfection",
          },
          {
            icon: "✨",
            text: "Your relationship can improve even if your parent doesn't change",
          },
        ],
      },
    },
  ],
};
