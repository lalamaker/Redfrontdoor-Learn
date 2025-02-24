// src/sections/2-DeescalationSkills.js
export default {
  title: "🧘 Deescalation Skills",
  key: "deescalation-skills",
  maxStates: {
    intro: {
      state: "calm",
      message: "Stay calm and present in challenging moments! 😌",
      miniMessage: "Peaceful responses! 🌈",
      expandedMessage:
        "We'll explore powerful techniques to remain calm and supportive during intense emotional situations.",
    },
  },
  achievements: [
    {
      icon: "😌",
      title: "Calm Commander",
      description: "You can stay composed during emotional storms",
    },
    {
      icon: "🛡️",
      title: "Emotional Shield",
      description: "You protect the relationship during conflicts",
    },
    {
      icon: "🌊",
      title: "Conflict Transformer",
      description: "You turn tense moments into connection opportunities",
    },
  ],
  steps: [
    // Introduction to Deescalation
    {
      type: "intro",
      content: {
        title: "The Calm in the Storm! 🌈",
        description: "Mastering emotional regulation",
        buttonText: "Start Deescalation Training",
        spokenContent:
          "Deescalation isn't about controlling your child - it's about creating a safe emotional space where connection can happen.",
        tools: [
          {
            icon: "🌪️",
            title: "Emotional Storms",
            description: "Understanding intense moments",
            theme: "blue",
            observations: [
              "Emotions can feel overwhelming",
              "Reactions escalate quickly",
              "Safety comes first",
              "Calm is a superpower",
            ],
          },
          {
            icon: "🧘",
            title: "Deescalation Foundations",
            description: "Key principles",
            theme: "purple",
            observations: [
              "Stay calm yourself",
              "Don't take things personally",
              "Show you're listening",
              "Validate feelings",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Your calm can be contagious",
          },
        ],
      },
    },
    // Self-Regulation Techniques
    {
      type: "intro",
      content: {
        title: "Mastering Your Own Emotions! 😌",
        description: "Stay grounded when things get tough",
        buttonText: "Learn Self-Regulation",
        spokenContent:
          "Before you can help your child regulate, you need to regulate yourself. Let's explore powerful techniques to stay calm.",
        tools: [
          {
            icon: "🧠",
            title: "Emotional Toolbox",
            description: "Quick calming techniques",
            theme: "green",
            observations: [
              "Deep breathing exercises",
              "Mindful pause technique",
              "Body scan for tension",
              "Positive self-talk",
            ],
          },
          {
            icon: "🌊",
            title: "Emotional Surfing",
            description: "Riding the wave of emotions",
            theme: "blue",
            observations: [
              "Notice your triggers",
              "Pause before reacting",
              "Choose your response",
              "Stay curious",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Your inner calm is your greatest strength",
          },
        ],
      },
    },
    // Communication During Intense Moments
    {
      type: "intro",
      content: {
        title: "Words of Calm! 💬",
        description: "Communicating during emotional challenges",
        buttonText: "Learn Supportive Communication",
        spokenContent:
          "What you say and how you say it can either escalate or deescalate a situation. Let's explore powerful communication strategies.",
        tools: [
          {
            icon: "🗣️",
            title: "Supportive Language",
            description: "Phrases that help",
            theme: "purple",
            observations: [
              "'I'm here with you'",
              "'I can see you're having a hard time'",
              "'Let's take a breath together'",
              "'I'm listening'",
            ],
          },
          {
            icon: "🚫",
            title: "What to Avoid",
            description: "Escalation triggers",
            theme: "blue",
            observations: [
              "Avoid blame or criticism",
              "No lectures or long explanations",
              "Skip 'you' statements",
              "Don't minimize feelings",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Speak with compassion, not control",
          },
        ],
      },
    },
    // Setting Boundaries with Compassion
    {
      type: "intro",
      content: {
        title: "Compassionate Boundaries! 🛡️",
        description: "Staying firm yet kind",
        buttonText: "Learn Boundary Setting",
        spokenContent:
          "Boundaries aren't about punishment - they're about creating safety and showing love. Let's explore how to set them compassionately.",
        tools: [
          {
            icon: "🚧",
            title: "Boundary Basics",
            description: "Loving limits",
            theme: "green",
            observations: [
              "Clear and consistent",
              "Explained with empathy",
              "Focus on safety and respect",
              "Collaborative when possible",
            ],
          },
          {
            icon: "❤️",
            title: "Boundary Language",
            description: "How to communicate limits",
            theme: "blue",
            observations: [
              "'I care about you'",
              "'I'm here to keep you safe'",
              "'Let's work this out together'",
              "'We can try again'",
            ],
          },
        ],
        tips: [
          {
            icon: "🌈",
            text: "Boundaries are an act of love",
          },
        ],
      },
    },
    // Practical Deescalation Practice
    {
      type: "intro",
      content: {
        title: "Your Deescalation Practice! 🧘",
        description: "Put skills into action",
        buttonText: "Start Practice",
        spokenContent:
          "Now it's your turn! Choose a recent challenging moment and apply the deescalation techniques you've learned.",
        tools: [
          {
            icon: "📝",
            title: "Deescalation Practice",
            description: "Step-by-step guide",
            theme: "purple",
            observations: [
              "1. Recall a tense recent moment",
              "2. Notice your initial reaction",
              "3. Practice a calm alternative",
              "4. Use supportive language",
              "5. Reflect on the interaction",
            ],
          },
          {
            icon: "🔍",
            title: "Reflection Guide",
            description: "Deepening skills",
            theme: "blue",
            observations: [
              "What triggered you?",
              "How did you stay calm?",
              "What worked well?",
              "What could you improve?",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Practice makes progress",
          },
          {
            icon: "✨",
            text: "Be patient with yourself",
          },
        ],
      },
    },
    // Final Deescalation Check
    {
      type: "quiz",
      content: {
        title: "Deescalation Mastery Check! 🏆",
        description: "Test your deescalation skills",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see how well you've learned to stay calm and supportive during challenging moments!",
        question:
          "Your child is having a big emotional outburst. The best first response is to:",
        options: [
          {
            icon: "🤗",
            text: "Stay calm and show you're listening",
            correct: true,
            feedback:
              "Exactly! Staying calm and showing you hear them is the most powerful first step in deescalation.",
          },
          {
            icon: "🛑",
            text: "Immediately stop the behavior",
            correct: false,
            feedback:
              "Trying to stop the behavior quickly often escalates emotions. First, create emotional safety.",
          },
          {
            icon: "😠",
            text: "Match their emotional intensity",
            correct: false,
            feedback:
              "Matching intense emotions will only make the situation worse. Your calm can help them regulate.",
          },
        ],
      },
    },
  ],
};
