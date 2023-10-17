export const MESSAGE_STORE = "ai_assistant_message";
export const SESSION_STORE = "ai_assistant_session";
export const ASSISTANT_STORE = "ai_assistant_assistant";

export const MAX_TOKEN = 1000;
export const TEAMPERATURE = 0.8;

export const ASSISTANT_INIT = [
  {
    name: "AI Assistant",
    prompt: "You are a smart English-teaching AI assistant, whose task is to answer every question from the user in detail.",
    temperature: 0.7,
    max_log: 8,
    max_tokens: 800,
  },
];

export const OPENAI_END_POINT = "https://api.openai.com";

export const USERMAP = {
  user: "👨‍💻‍",
  assistant: "🤖",
  system: "🕸",
};
