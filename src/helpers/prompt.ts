import { OpenAIChatMessage } from '@/types/openai';
import {
  AIMessagePromptTemplate,
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from '@langchain/core/prompts';

export const getChatPromptTemplate = (chatMessages: OpenAIChatMessage[]) =>
  ChatPromptTemplate.fromPromptMessages(
    chatMessages.map((m) => {
      switch (m.role) {
        default:
        case 'user':
          return HumanMessagePromptTemplate.fromTemplate(m.content);

        case 'system':
          return SystemMessagePromptTemplate.fromTemplate(m.content);

        case 'assistant':
          return AIMessagePromptTemplate.fromTemplate(m.content);
      }
    }),
  );
export const getInputVariablesFromMessages = (chatMessages: OpenAIChatMessage[]) => {
  let inputVariables: string[] = [];
  try {
    const chatPrompt = getChatPromptTemplate(chatMessages);
    inputVariables = chatPrompt.inputVariables;
  } catch {}

  return inputVariables;
};
