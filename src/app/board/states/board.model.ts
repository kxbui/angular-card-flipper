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
}
