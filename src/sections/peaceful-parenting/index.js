import Intro from "./0-Intro";
import UnderstandingConnection from "./1-UnderstandingConnection";
import DeescalationSkills from "./2-DeescalationSkills";
import CreativeProblemSolving from "./3-CreativeProblemSolving";
import { PeaceWind } from "lucide-react";

// Game configuration
export const gameConfig = {
  title: "Peaceful Parenting: Nonviolent Resistance Journey",
  icon: PeaceWind,
};

// Success section for course completion
const successSection = {
  key: "success",
  hideFromNavigation: true,
  title: "🌈 Peaceful Parenting Master",
  maxStates: {
    intro: {
      state: "happy",
      message: "You've transformed your approach to parenting! 🌟",
      miniMessage: "Congratulations! 🤗",
      expandedMessage:
        "You've learned powerful skills to connect with your child and create positive change without conflict.",
    },
  },
  steps: [
    {
      type: "success",
      content: {
        title: "You're a Peaceful Parenting Expert! 🌈",
        buttonText: "Start Again",
        spokenContent:
          "Congratulations! You've completed the entire journey and learned transformative skills for supporting your child.",
        achievements: [
          {
            icon: "🤝",
            title: "Connection Master",
            description: "You understand how to truly connect with your child",
          },
          {
            icon: "🧘",
            title: "Calm Communicator",
            description: "You can deescalate tense situations peacefully",
          },
          {
            icon: "💡",
            title: "Creative Problem Solver",
            description: "You can find innovative solutions to challenging behaviors",
          },
        ],
      },
    },
  ],
};

// Create celebration sections for each main section
const connectionCelebration = {
  key: "connection-celebration",
  hideFromNavigation: true,
  title: "🌟 Amazing Progress!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're developing a deeper understanding! 🤝",
      miniMessage: "Great connection skills! 💕",
      expandedMessage:
        "You've learned how to truly understand your child's perspective. Now let's develop deescalation skills!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Connection Skills Complete! 🌟",
        buttonText: "Start Deescalation Training",
        spokenContent:
          "Wow! You've made incredible progress in understanding your child's world. Ready to learn how to handle tough moments?",
        achievements: UnderstandingConnection.achievements,
      },
    },
  ],
};

const deescalationCelebration = {
  key: "deescalation-celebration",
  hideFromNavigation: true,
  title: "🌈 Fantastic Growth!",
  maxStates: {
    intro: {
      state: "happy",
      message: "You're becoming a calm, supportive parent! 🧘",
      miniMessage: "Amazing deescalation skills! 🤗",
      expandedMessage:
        "You've learned how to stay calm in challenging moments. Now let's explore creative problem-solving!",
    },
  },
  steps: [
    {
      type: "celebration",
      content: {
        title: "Deescalation Skills Complete! 🌈",
        buttonText: "Start Creative Problem Solving",
        spokenContent:
          "You're doing amazing! Your ability to stay calm is transforming your relationship. Ready to become a creative problem solver?",
        achievements: DeescalationSkills.achievements,
      },
    },
  ],
};

// Export sections array with celebrations and final success
export default [
  Intro,
  UnderstandingConnection,
  connectionCelebration,
  DeescalationSkills,
  deescalationCelebration,
  CreativeProblemSolving,
  successSection,
];
