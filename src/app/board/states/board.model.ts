export enum CardState {
  Default = 'default',
  Flipped = 'flipped',
  Matched = 'matched'
}

export interface Card {
  state: string;
  imageId: string;
}

export interface BoardState {
  cards: Card[];
  pair: { idx; imageId }[];
  scores: number;
}

export const MATCHED_SCORE = 10;

export const UNMATCHED_SCORE = -2;
