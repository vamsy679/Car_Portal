export interface Data {
  questions: Question[];
  outcomes: Outcome[];
}

export interface Outcome {
  id: string;
  text: string;
  show_booking_button: boolean;
}

export interface Question {
  id: string;
  question_text: string;
  answers: Answer[];
  next: Next[];
}

export interface Answer {
  id: string;
  label: string;
  score: number;
}

export enum Label {
  No = "No",
  The03Days = "0-3 days",
  The47Days = "4-7 days",
  Yes = "Yes",
}

export interface Next {
  answered?: string;
  next_question?: string;
  max_score?: number;
  outcome?: string;
}
