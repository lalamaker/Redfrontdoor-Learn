// src/sections/1-UnderstandingTriggers.js
export default {
  title: "🧠 Understanding Triggers",
  key: "understanding-triggers",
  maxStates: {
    intro: {
      state: "thinking",
      message: "Let's understand emotional patterns! 💭",
      miniMessage: "Recognizing triggers! 🔍",
      expandedMessage:
        "We'll explore the root causes of emotional reactions and recognize key patterns.",
    },
  },
  achievements: [
    {
      icon: "🔍",
      title: "Pattern Recognizer",
      description: "You can identify emotional triggers and cycles",
    },
    {
      icon: "🧠",
      title: "Trauma-Informed",
      description:
        "You understand how past experiences shape current reactions",
    },
    {
      icon: "💡",
      title: "Emotional Decoder",
      description: "You see beneath surface emotions to core needs",
    },
  ],
  steps: [
    // Introduction to Triggers
    {
      type: "intro",
      content: {
        title: "The Emotional Landscape! 🗺️",
        description: "Understanding what drives reactions",
        buttonText: "Start Exploring",
        spokenContent:
          "Every emotional reaction has a story behind it. To navigate challenging relationships, we need to understand what drives strong emotions - both in our parents and in ourselves.",
        tools: [
          {
            icon: "🧩",
            title: "Emotion Puzzle",
            description: "What's beneath the surface?",
            theme: "blue",
            observations: [
              "Surface emotions often mask deeper feelings",
              "Past trauma shapes current reactions",
              "Abandonment fears drive controlling behaviors",
              "Grief intensifies emotional responses",
            ],
          },
          {
            icon: "🔄",
            title: "Common Cycles",
            description: "Recognizing patterns",
            theme: "purple",
            observations: [
              "Abandonment fear → controlling behavior → resistance → confirmation of abandonment fear",
              "Grief → anger → pushing others away → increased grief",
              "Feeling victimized → blame → others withdraw → confirmation of victimization",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Understanding doesn't mean excusing harmful behavior",
          },
        ],
      },
    },
    // Understanding Abandonment Fears
    {
      type: "intro",
      content: {
        title: "Abandonment Fears! 🌪️",
        description: "The root of many difficult behaviors",
        buttonText: "Explore Abandonment",
        spokenContent:
          "For many parents with traumatic childhood experiences, the fear of abandonment can be overwhelming and drive seemingly irrational behaviors. Let's understand this powerful emotional force.",
        tools: [
          {
            icon: "⚡",
            title: "Abandonment Triggers",
            description: "What activates fear responses",
            theme: "blue",
            observations: [
              "Changes in routine or availability",
              "Perceived withdrawal of attention",
              "Independent decisions made without consultation",
              "Time spent with others (especially other parents/mentors)",
              "Physical distance or limited communication",
            ],
          },
          {
            icon: "🔄",
            title: "Fear Responses",
            description: "How abandonment fears manifest",
            theme: "purple",
            observations: [
              "Angry outbursts to regain control",
              "Guilt-inducing comments",
              "Emotional withdrawal as 'punishment'",
              "Health complaints to increase attention",
              "Excessive demands for time/attention",
              "Criticism of your choices or relationships",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "These are trauma responses, not manipulations",
          },
          {
            icon: "💫",
            text: "Understanding triggers helps predict and prepare",
          },
        ],
      },
    },
    // Grief and Loss Impact
    {
      type: "intro",
      content: {
        title: "The Impact of Grief! 💔",
        description: "How loss amplifies emotional patterns",
        buttonText: "Explore Grief Dynamics",
        spokenContent:
          "When a parent loses their spouse, grief can dramatically intensify existing emotional patterns and create new challenges. Understanding grief's impact is essential.",
        tools: [
          {
            icon: "🔄",
            title: "Grief Amplifiers",
            description: "How grief intensifies patterns",
            theme: "green",
            observations: [
              "Increased abandonment sensitivity",
              "Heightened need for control",
              "Greater emotional volatility",
              "Stronger criticism/comparison",
              "More rigid thinking patterns",
              "Intensified victim mentality",
            ],
          },
          {
            icon: "⏱️",
            title: "Grief Timeline",
            description: "Understanding the journey",
            theme: "blue",
            observations: [
              "Grief isn't linear or predictable",
              "Special dates trigger stronger reactions",
              "Grief can resurface unexpectedly",
              "Certain milestones may be particularly difficult",
              "Adaptations to loss take significant time",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Grief doesn't excuse harmful behavior but explains intensity",
          },
        ],
      },
    },
    // Victim Mentality
    {
      type: "intro",
      content: {
        title: "Understanding Victim Mentality! 🔍",
        description: "Why some parents get stuck in victimhood",
        buttonText: "Explore Victim Patterns",
        spokenContent:
          "When a parent consistently sees themselves as a victim, interactions become challenging. This perspective isn't chosen consciously but develops over time as a protection mechanism.",
        tools: [
          {
            icon: "🛡️",
            title: "Why Victimhood Develops",
            description: "The psychology behind it",
            theme: "blue",
            observations: [
              "Past experiences of genuine victimization",
              "Learned helplessness from trauma",
              "Protection from taking responsibility",
              "Way to receive attention and care",
              "Defense against feelings of shame",
            ],
          },
          {
            icon: "🔄",
            title: "Common Expressions",
            description: "How victim mentality surfaces",
            theme: "purple",
            observations: [
              "Frequent comparisons to others who 'have it better'",
              "Stories that emphasize mistreatment",
              "Dismissal of potential solutions",
              "Focusing on how others have failed them",
              "Resistance to taking personal responsibility",
              "Statements like 'No one helps me' or 'I always have to do everything'",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "This mindset feels very real to your parent",
          },
          {
            icon: "🌟",
            text: "You can't argue someone out of victimhood",
          },
        ],
      },
    },
    // Your Own Emotional Triggers
    {
      type: "intro",
      content: {
        title: "Your Emotional Triggers! ⚡",
        description: "Understanding your reactions",
        buttonText: "Explore Self-Awareness",
        spokenContent:
          "In challenging relationships, our own emotional triggers play a crucial role. Developing awareness of your triggers is essential for responding rather than reacting.",
        tools: [
          {
            icon: "🔍",
            title: "Common Adult Child Triggers",
            description: "What often activates strong emotions",
            theme: "blue",
            observations: [
              "Guilt-inducing comments",
              "Comparisons to others",
              "Criticism of major life decisions",
              "Statements that feel manipulative",
              "Dismissal of your feelings or experiences",
              "References to religious rules or obligations",
            ],
          },
          {
            icon: "⚡",
            title: "Recognizing Activation",
            description: "Signs you've been triggered",
            theme: "purple",
            observations: [
              "Sudden intensity of emotion",
              "Physical sensations (tight chest, racing heart)",
              "Defensive thoughts or urge to justify",
              "Desire to withdraw completely",
              "Black and white thinking",
              "Replay of conversation in your mind",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Awareness is the first step toward changing reactions",
          },
        ],
      },
    },
    // Trigger Mapping Exercise
    {
      type: "intro",
      content: {
        title: "Mapping Your Relationship Triggers! 🗺️",
        description: "A practical exercise",
        buttonText: "Start Exercise",
        spokenContent:
          "Let's put this knowledge into practice by mapping the specific triggers and patterns in your relationship. This exercise will help you anticipate and prepare for challenging interactions.",
        tools: [
          {
            icon: "📝",
            title: "Trigger Mapping Exercise",
            description: "Identifying your patterns",
            theme: "green",
            observations: [
              "1. Identify 3 situations that typically lead to conflict",
              "2. For each, note what might trigger your parent's fears",
              "3. Observe how their fears typically manifest",
              "4. Recognize what gets triggered in you",
              "5. Notice the pattern that usually unfolds",
            ],
          },
          {
            icon: "💡",
            title: "Pattern Interruption Planning",
            description: "Preparing for next time",
            theme: "blue",
            observations: [
              "Where in the cycle could you respond differently?",
              "What warning signs appear before escalation?",
              "What self-regulation tool could help in the moment?",
              "How might you acknowledge your parent's fear?",
              "What boundaries need to be established?",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Patterns become predictable once identified",
          },
          {
            icon: "🌟",
            text: "You only need to change your part in the pattern",
          },
        ],
      },
    },
    // Final Understanding Check
    {
      type: "quiz",
      content: {
        title: "Understanding Triggers Check! 🧠",
        description: "Test your knowledge of emotional patterns",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's check your understanding of the emotional patterns we've explored.",
        question:
          "When your parent becomes angry after you mention you can't visit this weekend, the underlying emotion is most likely:",
        options: [
          {
            icon: "😨",
            text: "Fear of abandonment or loss",
            correct: true,
            feedback:
              "Exactly! Anger is often a secondary emotion that covers deeper fears of abandonment or loss. Understanding this helps you respond to the underlying need rather than just the angry behavior.",
          },
          {
            icon: "😠",
            text: "Simple displeasure at not getting their way",
            correct: false,
            feedback:
              "While it may seem this way on the surface, intense reactions to unavailability usually stem from deeper fears of abandonment or loss, especially in parents with trauma histories.",
          },
          {
            icon: "😤",
            text: "Intentional manipulation to control you",
            correct: false,
            feedback:
              "Though it may feel manipulative, these reactions are usually driven by unconscious fears rather than conscious manipulation. Understanding the fear allows for more compassionate responses.",
          },
        ],
      },
    },
  ],
};
