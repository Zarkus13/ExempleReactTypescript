import React from 'react';
import { useAppSelector } from 'store'

const TestPage: React.FunctionComponent = () => {
  const messages = useAppSelector((state) => state.messages.list);

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