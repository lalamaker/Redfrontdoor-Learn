// src/sections/4-SelfCare.js
export default {
  title: "💖 Self-Care Practices",
  key: "self-care",
  maxStates: {
    intro: {
      state: "calm",
      message: "Nurture yourself through challenging relationships! 🧘",
      miniMessage: "Self-care essentials! 💆",
      expandedMessage:
        "We'll explore how to maintain your wellbeing while navigating complex family dynamics.",
    },
  },
  achievements: [
    {
      icon: "🧘",
      title: "Self-Care Champion",
      description: "You prioritize your wellbeing without guilt",
    },
    {
      icon: "🌱",
      title: "Emotional Gardener",
      description: "You cultivate positive emotions to balance challenges",
    },
    {
      icon: "💪",
      title: "Resilience Builder",
      description: "You maintain equilibrium through difficult situations",
    },
  ],
  steps: [
    // Introduction to Self-Care
    {
      type: "intro",
      content: {
        title: "Self-Care is Essential! 💖",
        description: "Why your wellbeing matters",
        buttonText: "Start Self-Care Journey",
        spokenContent:
          "Self-care isn't selfish—it's necessary, especially when navigating challenging relationships. Without it, you risk burnout, resentment, and diminished capacity to respond skillfully to difficult situations.",
        tools: [
          {
            icon: "💡",
            title: "Self-Care Fundamentals",
            description: "Core principles",
            theme: "blue",
            observations: [
              "Self-care enables more skillful responses",
              "Your wellbeing affects the relationship quality",
              "Regular practice prevents emotional depletion",
              "Self-care is preventative, not just reactive",
              "Different situations require different forms of care",
            ],
          },
          {
            icon: "⚠️",
            title: "Self-Care Misconceptions",
            description: "Common misunderstandings",
            theme: "purple",
            observations: [
              "Myth: Self-care is selfish",
              "Myth: Self-care requires lots of time or money",
              "Myth: Self-care is only needed in crisis",
              "Myth: Self-care means avoiding difficult situations",
              "Myth: Self-care is the same for everyone",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "You deserve care regardless of how well you manage challenges",
          },
        ],
      },
    },
    // Before, During, After Framework
    {
      type: "intro",
      content: {
        title: "The Before-During-After Framework! ⏱️",
        description: "Timing your self-care strategically",
        buttonText: "Explore Self-Care Timing",
        spokenContent:
          "Effective self-care happens at three critical times: before, during, and after challenging interactions. Each phase requires different strategies to maintain your wellbeing.",
        tools: [
          {
            icon: "🔄",
            title: "Before Interaction",
            description: "Preparation strategies",
            theme: "green",
            observations: [
              "Set clear intentions and time limits",
              "Practice self-regulation exercises",
              "Visualize maintaining boundaries",
              "Plan specific self-care for afterward",
              "Arrange support or debriefing if needed",
            ],
          },
          {
            icon: "⚡",
            title: "During Interaction",
            description: "In-the-moment techniques",
            theme: "blue",
            observations: [
              "Use brief grounding techniques (deep breath, foot on floor)",
              "Notice body sensations without judgment",
              "Take short breaks when needed",
              "Maintain awareness of your emotional state",
              "Hydrate and attend to basic physical needs",
            ],
          },
          {
            icon: "🧹",
            title: "After Interaction",
            description: "Processing and recovery",
            theme: "purple",
            observations: [
              "Release emotional residue through movement",
              "Process the interaction with a trusted person",
              "Journal to identify patterns and needs",
              "Engage in activities that restore your energy",
              "Acknowledge what went well, even small victories",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Consistent self-care across all three phases is most effective",
          },
        ],
      },
    },
    // Emotion Regulation
    {
      type: "intro",
      content: {
        title: "Emotion Regulation Toolkit! 🧰",
        description: "Managing intense feelings effectively",
        buttonText: "Explore Emotion Tools",
        spokenContent:
          "Challenging family interactions often trigger strong emotions. These evidence-based emotion regulation techniques can help you maintain your center even during difficult moments.",
        tools: [
          {
            icon: "🧠",
            title: "Quick Regulation Techniques",
            description: "For immediate emotional balance",
            theme: "blue",
            observations: [
              "5-5-5 Breathing: Inhale 5 counts, hold 5, exhale 5",
              "Physical grounding: Feel 5 things you can touch",
              "Cool water: Splash face or run wrists under cool water",
              "Name emotions: 'I notice I'm feeling frustrated'",
              "Body scan: Notice and release tension areas",
            ],
          },
          {
            icon: "🛡️",
            title: "Emotional Boundaries",
            description: "Protecting your inner state",
            theme: "purple",
            observations: [
              "Distinguish between your emotions and theirs",
              "Recognize when you're absorbing others' feelings",
              "Create mental imagery of emotional protection",
              "Limit exposure to known emotional triggers",
              "Practice the phrase 'That belongs to them, not me'",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Regular practice makes these techniques more accessible when needed",
          },
          {
            icon: "🌟",
            text: "Start with techniques that feel most natural to you",
          },
        ],
      },
    },
    // Support Systems
    {
      type: "intro",
      content: {
        title: "Building Your Support System! 🤝",
        description: "The power of connection",
        buttonText: "Explore Support Strategies",
        spokenContent:
          "Navigating complex family relationships shouldn't be done alone. A thoughtfully constructed support system provides perspective, validation, and emotional replenishment.",
        tools: [
          {
            icon: "👥",
            title: "Support Network Components",
            description: "Different support for different needs",
            theme: "green",
            observations: [
              "Emotional supporters who validate feelings",
              "Problem-solvers for practical challenges",
              "Distractors who offer relief and fun",
              "Fellow journeyers with similar experiences",
              "Professional supporters (therapists, coaches)",
            ],
          },
          {
            icon: "💬",
            title: "Effective Support Seeking",
            description: "Getting what you need",
            theme: "blue",
            observations: [
              "Be specific about what type of support you need",
              "Set a time frame for venting/processing",
              "Ask explicitly: 'Can I process something for 15 minutes?'",
              "Express gratitude for the support received",
              "Offer reciprocal support when you're able",
              "Consider support groups for shared experiences",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Different people may provide different types of support",
          },
        ],
      },
    },
    // Cognitive Reframing
    {
      type: "intro",
      content: {
        title: "Reframing Your Perspective! 🖼️",
        description: "Shifting thought patterns",
        buttonText: "Learn Reframing",
        spokenContent:
          "How we think about challenging relationships significantly impacts our emotional experience. Cognitive reframing helps shift unproductive thought patterns without denying difficulties.",
        tools: [
          {
            icon: "🔄",
            title: "Common Thought Patterns",
            description: "What to watch for",
            theme: "blue",
            observations: [
              "All-or-nothing thinking ('They'll never change')",
              "Catastrophizing ('This will ruin everything')",
              "Mind reading ('They're doing this to hurt me')",
              "Shoulding ('I should be handling this better')",
              "Personalizing ('Their behavior is my fault')",
            ],
          },
          {
            icon: "🌈",
            title: "Reframing Strategies",
            description: "Shifting perspective",
            theme: "purple",
            observations: [
              "Add 'right now' to absolute statements",
              "Look for exceptions to negative patterns",
              "Consider multiple interpretations of behavior",
              "Focus on what you can influence",
              "Use compassionate self-talk",
              "Ask 'What would I tell a friend in this situation?'",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Reframing isn't denial—it's finding perspective while acknowledging reality",
          },
        ],
      },
    },
    // Guilt Management
    {
      type: "intro",
      content: {
        title: "Breaking Free from Guilt! 🕊️",
        description: "Managing a common emotion",
        buttonText: "Explore Guilt Management",
        spokenContent:
          "Guilt is one of the most common and challenging emotions adult children face, especially when setting boundaries. Let's explore healthy ways to process and release excessive guilt.",
        tools: [
          {
            icon: "💭",
            title: "Understanding Guilt",
            description: "Types to recognize",
            theme: "blue",
            observations: [
              "Appropriate guilt (violated your own values)",
              "Excessive guilt (taking responsibility for others' feelings)",
              "Manipulated guilt (intentionally induced by others)",
              "Cultural/religious guilt (based on external expectations)",
              "Anticipatory guilt (feared future guilt)",
            ],
          },
          {
            icon: "🌱",
            title: "Healthy Guilt Management",
            description: "Processing effectively",
            theme: "green",
            observations: [
              "Question the origin: 'Whose standard am I not meeting?'",
              "Check reality: 'Am I truly responsible for this?'",
              "Define reasonable responsibility: 'What's actually mine to carry?'",
              "Create guilt-processing rituals",
              "Develop guilt-specific mantras",
              "Seek outside perspective on proportionate responsibility",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Some guilt is normal during change—it doesn't mean you're doing wrong",
          },
        ],
      },
    },
    // Personalized Self-Care Plan
    {
      type: "intro",
      content: {
        title: "Your Personal Self-Care Plan! 📝",
        description: "Creating your customized approach",
        buttonText: "Create Your Plan",
        spokenContent:
          "Now let's create your personalized self-care plan that addresses your specific challenges and builds on your strengths. This will be your practical guide for maintaining wellbeing.",
        tools: [
          {
            icon: "📋",
            title: "Self-Care Planning Exercise",
            description: "Building your personal toolkit",
            theme: "purple",
            observations: [
              "1. Identify your top 3 emotional challenges in the relationship",
              "2. For each, select 2 regulation techniques that resonate with you",
              "3. List your current and potential support people for different needs",
              "4. Create a specific before-during-after plan for typical interactions",
              "5. Develop 3 personal mantras for challenging moments",
            ],
          },
          {
            icon: "📅",
            title: "Implementation Strategy",
            description: "Making self-care consistent",
            theme: "blue",
            observations: [
              "Schedule regular self-care check-ins",
              "Set reminders before known challenging interactions",
              "Create environmental cues for self-care practices",
              "Track patterns to refine your approach",
              "Regularly update your plan as you learn what works",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "The best self-care plan is one you'll actually use",
          },
          {
            icon: "🌟",
            text: "Small, consistent practices often work better than elaborate ones",
          },
        ],
      },
    },
    // Final Self-Care Check
    {
      type: "quiz",
      content: {
        title: "Self-Care Mastery Check! 🏆",
        description: "Test your self-care understanding",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's check your understanding of effective self-care practices.",
        question:
          "After a difficult conversation with your parent where old patterns emerged, the most effective self-care approach would be:",
        options: [
          {
            icon: "🌱",
            text: "Process the interaction, engage in a restorative activity, and acknowledge what you did well",
            correct: true,
            feedback:
              "Excellent! This balanced approach addresses the emotional impact while promoting recovery and growth. Processing helps you learn, restoration replenishes your energy, and acknowledging successes builds confidence for future interactions.",
          },
          {
            icon: "🙈",
            text: "Try to forget about the interaction and avoid thinking about it",
            correct: false,
            feedback:
              "Avoidance might provide temporary relief but prevents processing and learning. Effective self-care includes healthy processing of difficult experiences rather than suppressing them.",
          },
          {
            icon: "🔄",
            text: "Repeatedly analyze everything you should have said differently",
            correct: false,
            feedback:
              "Rumination differs from productive reflection and can increase distress. Effective self-care includes balanced reflection with self-compassion rather than critical over-analysis.",
          },
        ],
      },
    },
  ],
};
