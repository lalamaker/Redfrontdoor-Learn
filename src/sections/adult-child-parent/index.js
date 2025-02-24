// src/sections/index.js
import Intro from "./0-Intro";
import UnderstandingTriggers from "./1-UnderstandingTriggers";
import CommunicationStrategies from "./2-CommunicationStrategies";
import SettingBoundaries from "./3-SettingBoundaries";
import SelfCare from "./4-SelfCare";
import { Heart } from "lucide-react";

// Game configuration
export const gameConfig = {
  title: "Adult Child-Parent Relations: Compassionate Boundaries",
  icon: Heart,
};

// Success section for course completion
const successSection = {
  key: "success",
  hideFromNavigation: true,
  title: "🌟 Relationship Master",
  maxStates: {
    intro: {
      state: "happy",
      message:
        "You've developed powerful skills for compassionate boundaries! 🌟",
      miniMessage: "Congratulations! 🤗",
      expandedMessage:
        "You now have practical tools to maintain healthy relationships while honoring both yourself and your parent.",
    },
  },
  steps: [
    {
      type: "success",
      content: {
        title: "You're a Compassionate Boundaries Expert! 🌟",
        buttonText: "Start Again",
        spokenContent:
          "Congratulations! You've completed the entire journey and learned transformative skills for navigating complex parent relationships with both compassion and healthy boundaries.",
        achievements: [
          {
            icon: "🧠",
            title: "Trauma Awareness",
            description: "You understand the roots of emotional patterns",
          },
          {
            icon: "💬",
            title: "Effective Communicator",
            description: "You can navigate difficult conversations with skill",
          },
          {
            icon: "🛡️",
            title: "Boundary Expert",
            description: "You can establish and maintain healthy boundaries",
          },
          {
            icon: "💖",
            title: "Self-Care Champion",
            description:
              "You prioritize your wellbeing while maintaining connection",
          },
        ],
      },
    },
  ],
};

// Create celebration sections for each main section
const triggersCelebration = {
  key: "triggers-celebration",
  hideFromNavigation: true,
  title: "🌟 Amazing Progress!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're developing deeper understanding! 🧠",
      miniMessage: "Great awareness skills! 💕",
      expandedMessage:
        "You've learned to recognize patterns and triggers. Now let's develop communication strategies!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Understanding Triggers Complete! 🌟",
        buttonText: "Start Communication Training",
        spokenContent:
          "Excellent progress! You now understand the underlying dynamics that drive difficult interactions with your parent. Ready to learn effective communication strategies?",
        achievements: UnderstandingTriggers.achievements,
      },
    },
  ],
};

const communicationCelebration = {
  key: "communication-celebration",
  hideFromNavigation: true,
  title: "🌈 Fantastic Growth!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're becoming a skilled communicator! 💬",
      miniMessage: "Amazing communication skills! 🤗",
      expandedMessage:
        "You've learned how to navigate difficult conversations. Now let's explore setting healthy boundaries!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Communication Skills Complete! 🌈",
        buttonText: "Start Boundary Setting",
        spokenContent:
          "You're making wonderful progress! Your communication skills are transforming your interactions. Ready to learn about setting compassionate boundaries?",
        achievements: CommunicationStrategies.achievements,
      },
    },
  ],
};

const boundariesCelebration = {
  key: "boundaries-celebration",
  hideFromNavigation: true,
  title: "✨ Remarkable Progress!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're becoming a boundary master! 🛡️",
      miniMessage: "Excellent boundary skills! 💪",
      expandedMessage:
        "You've learned how to set and maintain healthy boundaries. Now let's explore essential self-care practices!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Boundary Setting Complete! ✨",
        buttonText: "Start Self-Care Practices",
        spokenContent:
          "Fantastic work! Your ability to set boundaries while maintaining compassion is growing stronger. Now let's focus on taking care of yourself throughout this journey.",
        achievements: SettingBoundaries.achievements,
      },
    },
  ],
};

// Export sections array with celebrations and final success
export default [
  Intro,
  UnderstandingTriggers,
  triggersCelebration,
  CommunicationStrategies,
  communicationCelebration,
  SettingBoundaries,
  boundariesCelebration,
  SelfCare,
  successSection,
];
