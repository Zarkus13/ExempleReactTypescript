import messagesReducer, { addMessage, removeMessage } from 'reducers/messagesReducer'

describe('messagesReducer', () => {

  it ('addMessage action should add a message to the state', () => {

    const newState = messagesReducer({ list: [] }, addMessage('Test message'));

    expect(newState).toEqual({
      list: [
        'Test message'
      ]
    });
  });

  it ('removeMessage action should remove a message from the state given its id', () => {
    const initialState = {
      list: [
        'Message 1',
        'Message 2',
        'Message 3'
      ]
    };

    const newState = messagesReducer(initialState, removeMessage(1));

    expect(newState).toEqual({
      list: [
        'Message 1',
        'Message 3'
      ]
    });
  });

});