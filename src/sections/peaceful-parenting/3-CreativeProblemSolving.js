// src/sections/3-CreativeProblemSolving.js
export default {
  title: "💡 Creative Problem Solving",
  key: "creative-problem-solving",
  maxStates: {
    intro: {
      state: "happy",
      message: "Let's solve challenges together! 🧩",
      miniMessage: "Innovative solutions ahead! ✨",
      expandedMessage:
        "We'll explore how to work with your child to find creative solutions that meet everyone's needs.",
    },
  },
  achievements: [
    {
      icon: "🧩",
      title: "Solution Architect",
      description: "You can create innovative approaches to challenges",
    },
    {
      icon: "🤝",
      title: "Collaborative Problem Solver",
      description: "You involve your child in finding solutions",
    },
    {
      icon: "💡",
      title: "Possibility Thinker",
      description: "You see challenges as opportunities for growth",
    },
  ],
  steps: [
    // Introduction to Creative Problem Solving
    {
      type: "intro",
      content: {
        title: "Reimagining Challenges! 🌈",
        description: "Turning problems into opportunities",
        buttonText: "Start Creative Solving",
        spokenContent:
          "Problem-solving isn't about winning or controlling. It's about working together to find solutions that work for everyone.",
        tools: [
          {
            icon: "🧩",
            title: "Problem Transformation",
            description: "New way of seeing challenges",
            theme: "blue",
            observations: [
              "Challenges are opportunities",
              "Everyone's needs matter",
              "Collaboration is key",
              "Multiple solutions exist",
            ],
          },
          {
            icon: "💡",
            title: "Creative Approach",
            description: "Problem-solving principles",
            theme: "purple",
            observations: [
              "Listen to all perspectives",
              "Brainstorm together",
              "Be flexible",
              "Focus on solutions",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Every challenge is a chance to grow closer",
          },
        ],
      },
    },
    // Understanding Needs
    {
      type: "intro",
      content: {
        title: "Uncovering Hidden Needs! 🔍",
        description: "What's really going on?",
        buttonText: "Explore Needs",
        spokenContent:
          "Beneath every behavior are unmet needs. Let's learn how to dig deeper and understand what's really happening.",
        tools: [
          {
            icon: "❓",
            title: "Need Detective",
            description: "Identifying underlying motivations",
            theme: "green",
            observations: [
              "Look beyond the behavior",
              "Ask curious questions",
              "Seek to understand",
              "Validate feelings",
            ],
          },
          {
            icon: "🧬",
            title: "Common Underlying Needs",
            description: "What children often seek",
            theme: "blue",
            observations: [
              "Feeling heard",
              "Sense of control",
              "Connection",
              "Autonomy",
              "Feeling capable",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Needs are universal, solutions are unique",
          },
        ],
      },
    },
    // Collaborative Solution Finding
    {
      type: "intro",
      content: {
        title: "Brainstorming Together! 🤝",
        description: "Creating solutions as a team",
        buttonText: "Start Collaboration",
        tools: [
          {
            icon: "🔄",
            title: "Solution Flexibility",
            description: "Adapting approaches",
            theme: "green",
            observations: [
              "Experiment and observe",
              "Be open to adjustments",
              "Regular check-ins",
              "Celebrate small wins",
            ],
          },
          {
            icon: "🧭",
            title: "Adjustment Strategies",
            description: "Refining solutions",
            theme: "blue",
            observations: [
              "What's working?",
              "What needs tweaking?",
              "Are everyone's needs met?",
              "Can we modify our approach?",
            ],
          },
        ],
        tips: [
          {
            icon: "🌈",
            text: "Solutions evolve, just like relationships",
          },
        ],
      },
    },
    // Creating Supportive Agreements
    {
      type: "intro",
      content: {
        title: "Agreements, Not Demands! 📝",
        description: "Creating mutually supportive solutions",
        buttonText: "Explore Agreements",
        spokenContent:
          "Powerful solutions come from agreements that work for everyone, not rules that feel like punishment.",
        tools: [
          {
            icon: "🤝",
            title: "Agreement Foundations",
            description: "Key principles",
            theme: "purple",
            observations: [
              "Focus on mutual support",
              "Clear and specific",
              "Realistic expectations",
              "Room for adjustment",
            ],
          },
          {
            icon: "📋",
            title: "Agreement Elements",
            description: "What makes an agreement work",
            theme: "blue",
            observations: [
              "Understood by everyone",
              "Feels fair",
              "Practical to follow",
              "Supportive of relationships",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Agreements build trust and understanding",
          },
        ],
      },
    },
    // Practical Problem Solving Practice
    {
      type: "intro",
      content: {
        title: "Your Creative Solving Practice! 💡",
        description: "Put skills into action",
        buttonText: "Start Practice",
        spokenContent:
          "Now it's your turn! Choose a current challenge and apply the creative problem-solving techniques you've learned.",
        tools: [
          {
            icon: "📝",
            title: "Problem Solving Practice",
            description: "Step-by-step guide",
            theme: "purple",
            observations: [
              "1. Identify the current challenge",
              "2. Understand underlying needs",
              "3. Brainstorm together",
              "4. Create a collaborative agreement",
              "5. Try the solution and reflect",
            ],
          },
          {
            icon: "🔍",
            title: "Reflection Guide",
            description: "Deepening skills",
            theme: "blue",
            observations: [
              "What needs were revealed?",
              "How did collaboration feel?",
              "What worked well?",
              "What might we adjust?",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Every attempt is a learning opportunity",
          },
          {
            icon: "✨",
            text: "Approach with curiosity and compassion",
          },
        ],
      },
    },
    // Final Creative Problem Solving Check
    {
      type: "quiz",
      content: {
        title: "Creative Problem Solving Mastery! 🏆",
        description: "Test your innovative approach",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see how well you've learned to approach challenges creatively and collaboratively!",
        question:
          "When facing a recurring challenge with your child, the most effective first step is to:",
        options: [
          {
            icon: "🤝",
            text: "Sit down together and explore the challenge openly",
            correct: true,
            feedback:
              "Perfect! Collaborative exploration is the key to finding meaningful, lasting solutions.",
          },
          {
            icon: "📜",
            text: "Create a strict set of rules",
            correct: false,
            feedback:
              "Rigid rules often create more resistance. Collaboration and understanding work much better.",
          },
          {
            icon: "😤",
            text: "Impose a consequence",
            correct: false,
            feedback:
              "Consequences without understanding don't solve the underlying issue. Focus on understanding and working together.",
          },
        ],
      },
    },
  ],
};
