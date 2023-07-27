import { Question } from "@shared/models/question";


export interface QuestionApiResponse {
  response_code: number;
  results: Question[];
}
