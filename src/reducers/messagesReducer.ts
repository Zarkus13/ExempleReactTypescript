import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  list: string[]
}

const initialState: State = {
  // list: JSON.parse(localStorage.getItem('messages') || '[]')
  list: []
};

const messagesSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      console.log('Add Message :', action.payload);
      const messages = state.list.concat([ action.payload ]);

      // localStorage.setItem('messages', JSON.stringify(messages));

      return {
        list: messages
      }
    }
  }
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;