import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchMessages } from 'reducers/messagesReducer'

const TestPage: React.FunctionComponent = () => {
  const messages = useAppSelector((state) => state.messages.list);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>
      Test page !

      <ul>
        {messages.map((message, id) =>
          <li key={id}>{message}</li>
        )}
      </ul>
    </div>
  )
};

export default TestPage;