import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('to be Function', () => {
    expect(MessageList).toBeInstanceOf(Function);
  });

  it('should render MessageList', () => {
    expect(MessageList).toMatchSnapshot();
  });
});
