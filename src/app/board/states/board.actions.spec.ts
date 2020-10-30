import * as fromBoard from './board.actions';

describe('loadBoards', () => {
  it('should return an action', () => {
    expect(fromBoard.loadBoards().type).toBe('[Board] Load Boards');
  });
});
