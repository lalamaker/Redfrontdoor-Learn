// src/sections/1-UnderstandingConnection.js
export default {
  title: "🤝 Understanding Connection",
  key: "understanding-connection",
  maxStates: {
    intro: {
      state: "wave",
      message: "Let's understand your child's world! 👀",
      miniMessage: "Connection is key! 💕",
      expandedMessage:
        "We'll explore how to truly see and hear your child, beyond the challenging behaviors.",
    },
  },
  achievements: [
    {
      icon: "👂",
      title: "Deep Listener",
      description: "You can hear what's really being communicated",
    },
    {
      icon: "❤️",
      title: "Empathy Expert",
      description: "You understand your child's underlying needs",
    },
    {
      icon: "🕵️",
      title: "Behavior Detective",
      description: "You see behaviors as communication, not problems",
    },
  ],
  steps: [
    // Introduction to Connection
    {
      type: "intro",
      content: {
        title: "Beyond the Surface! 🔍",
        description: "Understanding what's really happening",
        buttonText: "Start Exploring",
        audioSrc: "/audio/peaceful-parenting/1-01.mp3",
        srtSrc: "/audio/peaceful-parenting/1-01.srt",
        spokenContent:
          "Every challenging behavior is a message. It's like your child is speaking a secret language, and we're going to learn how to translate it!",
        tools: [
          {
            icon: "🧩",
            title: "Behavior Puzzle",
            description: "What could be underneath?",
            theme: "blue",
            observations: [
              "Behaviors are communication",
              "Feelings drive actions",
              "Needs want to be understood",
            ],
          },
          {
            icon: "💡",
            title: "Connection Insights",
            description: "How to truly listen",
            theme: "purple",
            observations: [
              "Listen without judging",
              "See the emotion behind actions",
              "Stay curious about your child",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Every behavior tells a story",
          },
        ],
      },
    },
    // Understanding Triggers
    {
      type: "intro",
      content: {
        title: "Mapping Emotional Triggers! 🌋",
        description: "Discover what sets off challenging moments",
        buttonText: "Explore Triggers",
        audioSrc: "/audio/peaceful-parenting/1-02.mp3",
        srtSrc: "/audio/peaceful-parenting/1-02.srt",
        spokenContent:
          "Let's become detectives of your child's emotional world. What makes them frustrated, angry, or shut down?",
        tools: [
          {
            icon: "🌪️",
            title: "Trigger Exploration",
            description: "Common emotional storms",
            theme: "blue",
            observations: [
              "Feeling misunderstood",
              "Lack of control",
              "Overwhelming emotions",
              "Unmet basic needs",
            ],
          },
          {
            icon: "🧭",
            title: "Trigger Mapping",
            description: "Recognizing patterns",
            theme: "purple",
            observations: [
              "Notice recurring situations",
              "Track emotional responses",
              "Look for underlying needs",
            ],
          },
        ],
        tips: [
          {
            icon: "🕵️",
            text: "Observe without judgment",
          },
        ],
      },
    },
    // Empathy Deep Dive
    {
      type: "intro",
      content: {
        title: "The Power of Empathy! ❤️",
        description: "Learning to truly understand",
        buttonText: "Dive into Empathy",
        spokenContent:
          "Empathy isn't about agreeing with everything. It's about understanding the feelings behind the actions.",
        tools: [
          {
            icon: "👂",
            title: "Listening Deeply",
            description: "Hearing the unspoken",
            theme: "green",
            observations: [
              "Notice body language",
              "Hear emotional undertones",
              "Reflect back what you hear",
              "Validate feelings",
            ],
          },
          {
            icon: "💬",
            title: "Empathy Phrases",
            description: "Ways to show understanding",
            theme: "purple",
            observations: [
              "'I see you're feeling...'",
              "'That must be really hard'",
              "'Your feelings make sense'",
              "'I'm here with you'",
            ],
          },
        ],
        tips: [
          {
            icon: "🌈",
            text: "Empathy transforms connections",
          },
        ],
      },
    },
    // Breaking Negative Interaction Cycles
    {
      type: "intro",
      content: {
        title: "Breaking Negative Cycles! 🔄",
        description: "Changing how we interact",
        buttonText: "Learn Cycle Breaking",
        spokenContent:
          "Many families get stuck in repeated patterns. Let's learn how to step out of those cycles and create new, supportive interactions.",
        tools: [
          {
            icon: "🚦",
            title: "Interaction Patterns",
            description: "Recognizing automatic responses",
            theme: "blue",
            observations: [
              "Repeated arguments",
              "Predictable reactions",
              "Escalating conflicts",
              "Defensive responses",
            ],
          },
          {
            icon: "🛠️",
            title: "Cycle Breakers",
            description: "New interaction strategies",
            theme: "green",
            observations: [
              "Pause before reacting",
              "Speak from calm state",
              "Use 'I' statements",
              "Show curiosity",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Small changes create big shifts",
          },
        ],
      },
    },
    // Practical Connection Exercise
    {
      type: "intro",
      content: {
        title: "Your Connection Practice! 🤝",
        description: "Put it all into action",
        buttonText: "Start Practice",
        spokenContent:
          "Now it's your turn! Choose a recent challenging moment and apply what you've learned about connection and understanding.",
        tools: [
          {
            icon: "📝",
            title: "Connection Practice",
            description: "Step-by-step guide",
            theme: "purple",
            observations: [
              "1. Recall a challenging moment",
              "2. Identify possible underlying feelings",
              "3. Reflect on what your child might need",
              "4. Plan a compassionate response",
              "5. Practice listening deeply",
            ],
          },
          {
            icon: "🧘",
            title: "Reflection Guide",
            description: "Deepening understanding",
            theme: "blue",
            observations: [
              "What emotions were present?",
              "What needs weren't met?",
              "How can you show understanding?",
              "What new approach can you try?",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Be gentle with yourself in this process",
          },
          {
            icon: "✨",
            text: "Connection is a practice, not perfection",
          },
        ],
      },
    },
    // Final Understanding Check
    {
      type: "quiz",
      content: {
        title: "Connection Mastery Check! 🏆",
        description: "Test your understanding of deep connection",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see how well you've learned about truly understanding your child!",
        question:
          "When your child is having a difficult moment, the most important first step is to:",
        options: [
          {
            icon: "👂",
            text: "Listen and try to understand what they're feeling",
            correct: true,
            feedback:
              "Exactly! True connection starts with listening and understanding the emotions behind the behavior.",
          },
          {
            icon: "🛑",
            text: "Stop the behavior immediately",
            correct: false,
            feedback:
              "Remember, behaviors are a form of communication. Stopping them without understanding won't solve the underlying issue.",
          },
          {
            icon: "🗣️",
            text: "Explain why their behavior is wrong",
            correct: false,
            feedback:
              "Lectures can make children feel misunderstood. First, try to connect and understand their perspective.",
          },
        ],
      },
    },
  ],
};
