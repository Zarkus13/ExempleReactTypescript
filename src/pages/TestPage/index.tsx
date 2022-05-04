import React, { useContext, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchMessages } from 'reducers/messagesReducer'
import { ConfigurationContext } from 'contexts/configurationContext'

const TestPage: React.FunctionComponent = () => {
  const messages = useAppSelector((state) => state.messages.list);

  const configuration = useContext(ConfigurationContext);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessages(configuration.messagesAPIBaseURL));
  }, []);

  return (
    <div>
      <ConfigurationContext.Consumer>
        {(conf) =>
          "Base URL : " + conf.messagesAPIBaseURL
        }
      </ConfigurationContext.Consumer>

      <ul>
        {messages.map((message, id) =>
          <li key={id}>{message}</li>
        )}
      </ul>
    </div>
  )
};

export default TestPage;