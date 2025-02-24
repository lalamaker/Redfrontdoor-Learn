// src/sections/adult-child-parent/2-CommunicationStrategies.js
export default {
  title: "💬 Communication Strategies",
  key: "communication-strategies",
  maxStates: {
    intro: {
      state: "wave",
      message: "Let's transform difficult conversations! 🗣️",
      miniMessage: "Effective communication! 💬",
      expandedMessage:
        "We'll explore powerful techniques for navigating emotionally charged interactions.",
    },
  },
  achievements: [
    {
      icon: "👂",
      title: "Validation Master",
      description: "You can acknowledge feelings without getting entangled",
    },
    {
      icon: "🛡️",
      title: "De-escalation Expert",
      description: "You can calm tense situations with effective techniques",
    },
    {
      icon: "🔄",
      title: "Pattern Interrupter",
      description: "You can shift conversations out of unhealthy cycles",
    },
  ],
  steps: [
    // Introduction to Communication
    {
      type: "intro",
      content: {
        title: "Communication Changes Everything! 💬",
        description: "The power of skillful interaction",
        buttonText: "Start Communication Training",
        spokenContent:
          "The way we communicate during difficult moments can either escalate tension or create space for understanding. Let's explore how to communicate effectively even when emotions are running high.",
        tools: [
          {
            icon: "🔑",
            title: "Communication Keys",
            description: "Core principles",
            theme: "blue",
            observations: [
              "Listen to understand, not to respond",
              "Acknowledge emotions before content",
              "Maintain calm, regulated presence",
              "Be clear and direct without harshness",
              "Focus on present issues, not past patterns",
            ],
          },
          {
            icon: "⚠️",
            title: "Communication Pitfalls",
            description: "What escalates tension",
            theme: "purple",
            observations: [
              "Defending or over-explaining",
              "Trying to 'fix' emotional issues",
              "Taking accusations personally",
              "Meeting intensity with intensity",
              "Bringing up past grievances",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Your communication can change the entire dynamic",
          },
        ],
      },
    },
    // Validation without Agreement
    {
      type: "intro",
      content: {
        title: "Validation Without Agreement! 👂",
        description: "The most powerful de-escalation tool",
        buttonText: "Learn Validation",
        spokenContent:
          "Validation is acknowledging someone's emotional experience without necessarily agreeing with their interpretation or demands. It's a powerful way to de-escalate tension while maintaining boundaries.",
        tools: [
          {
            icon: "🌈",
            title: "Validation Phrases",
            description: "Words that acknowledge feelings",
            theme: "blue",
            observations: [
              "'I can see this is really upsetting for you'",
              "'That sounds really frustrating'",
              "'I understand this feels important to you'",
              "'It makes sense you'd feel that way'",
              "'I can hear how difficult this has been'",
            ],
          },
          {
            icon: "⚠️",
            title: "Validation Mistakes",
            description: "Common pitfalls",
            theme: "purple",
            observations: [
              "Skipping straight to solutions",
              "Contradicting their feelings",
              "Minimizing their experience",
              "Making it about your feelings",
              "Validation that sounds condescending",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Validation doesn't mean you agree with everything",
          },
          {
            icon: "🌟",
            text: "People need to feel heard before they can listen",
          },
        ],
      },
    },
    // De-escalation Techniques
    {
      type: "intro",
      content: {
        title: "De-escalation Mastery! 🧘",
        description: "Calming emotionally charged situations",
        buttonText: "Learn De-escalation",
        spokenContent:
          "When emotions run high, these practical de-escalation techniques can help bring the conversation back to a productive place. These skills take practice but can transform difficult interactions.",
        tools: [
          {
            icon: "🛑",
            title: "Immediate De-escalation",
            description: "When tensions are rising",
            theme: "green",
            observations: [
              "Lower your voice and slow your speech",
              "Use brief, simple sentences",
              "Take slow, visible breaths",
              "Increase physical distance slightly",
              "Acknowledge the emotion directly",
              "Suggest a brief pause if needed",
            ],
          },
          {
            icon: "🔄",
            title: "Pattern Interruption",
            description: "Breaking unhealthy cycles",
            theme: "blue",
            observations: [
              "Change your typical response",
              "Ask an unexpected question",
              "Offer genuine appreciation",
              "Name the pattern respectfully",
              "Suggest a completely different activity",
              "Use appropriate, well-timed humor",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Your calm is contagious",
          },
          {
            icon: "🌟",
            text: "Small interruptions can break large patterns",
          },
        ],
      },
    },
    // "I" Statements
    {
      type: "intro",
      content: {
        title: "The Power of 'I' Statements! 💪",
        description: "Expressing needs without accusations",
        buttonText: "Learn 'I' Statements",
        spokenContent:
          "'I' statements allow you to express your feelings and needs without triggering defensiveness. They're especially valuable when setting boundaries or addressing difficult topics.",
        tools: [
          {
            icon: "✅",
            title: "'I' Statement Formula",
            description: "Creating effective statements",
            theme: "blue",
            observations: [
              "1. 'I feel...' (name emotion)",
              "2. 'When...' (specific situation)",
              "3. 'Because...' (impact on you)",
              "4. 'I need/would like...' (request)",
              "Example: 'I feel anxious when there are raised voices because it makes it hard for me to think clearly. I need us to take a break when conversations get heated.'",
            ],
          },
          {
            icon: "⚠️",
            title: "Common Mistakes",
            description: "False 'I' statements",
            theme: "purple",
            observations: [
              "'I feel that you are being unreasonable' (opinion, not feeling)",
              "'I feel like you never listen' (accusation in disguise)",
              "'I need you to change your behavior' (controlling)",
              "'I'm just saying this for your own good' (condescending)",
              "Making 'I' statements with aggressive tone or body language",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Practice 'I' statements before emotional conversations",
          },
        ],
      },
    },
    // Dealing with Religious/Moral Appeals
    {
      type: "intro",
      content: {
        title: "Navigating Religious/Moral Appeals! 🙏",
        description: "Responding to 'honoring thy parent' references",
        buttonText: "Explore Moral Appeals",
        spokenContent:
          "References to religious commandments or moral obligations like 'honor thy father and mother' can be particularly challenging. Let's explore how to respond with both respect and appropriate boundaries.",
        tools: [
          {
            icon: "💬",
            title: "Balanced Responses",
            description: "Honoring without compromising",
            theme: "green",
            observations: [
              "'I do honor you, which includes being honest about what I can and can't do'",
              "'I value our relationship deeply, which is why I need to be truthful'",
              "'I'm trying to honor you in a way that's sustainable for both of us'",
              "'I believe honoring includes taking care of myself so I can be present'",
              "'For me, honor means being authentic rather than resentful'",
            ],
          },
          {
            icon: "⚖️",
            title: "Finding Balance",
            description: "Perspective on honoring parents",
            theme: "blue",
            observations: [
              "Honor doesn't require agreement with all opinions",
              "Respect and self-sacrifice are different things",
              "Healthy boundaries can be part of honoring",
              "Honor includes authenticity, not just compliance",
              "Many faith traditions emphasize balance in relationships",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Prepare these responses in advance for difficult moments",
          },
        ],
      },
    },
    // Communication When Grief is Present
    {
      type: "intro",
      content: {
        title: "Communicating Through Grief! 💔",
        description: "Supporting a parent through loss",
        buttonText: "Learn Grief Communication",
        spokenContent:
          "When a parent is grieving the loss of a spouse, communication requires special care. These strategies can help you navigate conversations during this difficult time.",
        tools: [
          {
            icon: "🤲",
            title: "Grief-Sensitive Approaches",
            description: "Communication that helps",
            theme: "purple",
            observations: [
              "Acknowledge the loss without forcing discussion",
              "Allow silence and tears without rushing to fill space",
              "Avoid comparing grief experiences",
              "Use the deceased's name naturally",
              "Be patient with repeated stories and memories",
              "Accept that grief can intensify existing patterns",
            ],
          },
          {
            icon: "🔄",
            title: "Redirecting When Needed",
            description: "Finding balance",
            theme: "blue",
            observations: [
              "Balance listening with gentle refocusing",
              "Suggest small, manageable activities",
              "Create new traditions to acknowledge changed reality",
              "Offer specific help rather than open-ended questions",
              "Transition conversations toward present moments",
            ],
          },
        ],
        tips: [
          {
            icon: "💫",
            text: "Grief needs both acknowledgment and gentle forward movement",
          },
        ],
      },
    },
    // Practice Conversations
    {
      type: "intro",
      content: {
        title: "Let's Practice! 🎭",
        description: "Building your communication muscles",
        buttonText: "Start Practice",
        spokenContent:
          "Let's practice applying these communication strategies to common challenging scenarios. This will help you build confidence and skill for real-life interactions.",
        tools: [
          {
            icon: "🎬",
            title: "Practice Scenario 1",
            description: "Guilt trip about not visiting enough",
            theme: "blue",
            observations: [
              "Trigger: 'No one ever comes to see me. I guess I'm just not important.'",
              "Validation: 'I hear you're feeling lonely and want more connection.'",
              "'I' statement: 'I feel sad when I hear you're lonely because I care about you. I'd like to find ways we can connect that work for both of us.'",
              "Boundary: 'I can visit every other Sunday afternoon, and I'm happy to schedule regular phone calls.'",
              "Pattern interrupt: Suggest a specific activity for your next visit.",
            ],
          },
          {
            icon: "🎬",
            title: "Practice Scenario 2",
            description: "Anger about perceived abandonment",
            theme: "green",
            observations: [
              "Trigger: 'You're just like everyone else who abandoned me! After all I've done for you!'",
              "De-escalation: Lower voice, slow speech, acknowledge the emotion.",
              "Validation: 'I can see you're feeling really hurt right now.'",
              "'I' statement: 'I feel overwhelmed when there's yelling because it makes it hard for us to connect. I need us to take a break and continue when we're both calmer.'",
              "Action: Suggest a specific time to continue the conversation later.",
            ],
          },
        ],
        tips: [
          {
            icon: "🌟",
            text: "Mental rehearsal builds neural pathways for real-life responses",
          },
          {
            icon: "💫",
            text: "Practice these out loud when possible",
          },
        ],
      },
    },
    // Final Communication Check
    {
      type: "quiz",
      content: {
        title: "Communication Mastery Check! 🏆",
        description: "Test your communication skills",
        buttonText: "Take the Quiz",
        spokenContent:
          "Let's see how well you've learned to communicate effectively in challenging situations.",
        question:
          "Your parent says, 'No one helps me. I have to do everything myself while everyone else enjoys their lives.' The most effective first response would be:",
        options: [
          {
            icon: "👂",
            text: "I can hear how overwhelmed and unsupported you're feeling right now.",
            correct: true,
            feedback:
              "Perfect! This validation acknowledges their feelings without agreeing with their interpretation or becoming defensive. Starting with validation creates space for more productive conversation.",
          },
          {
            icon: "🛠️",
            text: "That's not true - I helped you last week with those errands.",
            correct: false,
            feedback:
              "Contradicting their perception might be factually accurate but will likely increase defensiveness. Start with validation before addressing factual discrepancies.",
          },
          {
            icon: "😔",
            text: "You always say that. Why do you have to be so negative?",
            correct: false,
            feedback:
              "This response escalates tension by criticizing and using 'always' statements. Remember to validate first and avoid characterizing the person negatively.",
          },
        ],
      },
    },
  ],
};
