import React from 'react';

export interface Question {
  id: number;
  title: string;
  question: string;
  options?: string[]; // For multiple choice
  type?: 'mc' | 'rf' | 'select'; // Multiple Choice, Richtig/Falsch, or Select (matching)
  correct: number | string; // Index for MC or 'richtig'/'falsch' for RF
  explanation: string;
}

export interface ListeningPart {
  id: number;
  title: string;
  description: string;
  audioSrc: string;
  transcript: string;
  questions: Question[];
  statements?: { id: string; text: string }[];
}

export interface ReadingPart {
  id: number;
  title: string;
  description: string;
  text?: string; // Main text for the part
  items?: { id: string; text: string }[]; // For matching tasks (e.g., ads)
  questions: Question[];
}

export interface WritingTask {
  id: string;
  title: string;
  scenario: string;
  bulletPoints: string[];
  keywords: string[];
  sampleSolution: string;
}

export interface SpeakingPart {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;
  examinerQuestions?: string[];
  redemittel?: { category: string; phrases: string[] }[];
  sampleSolution?: string;
}
