import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Input from 'components/Input'
import { SetState } from 'utils'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState, useAppDispatch, useAppSelector } from 'store'
import { addMessage } from 'reducers/messagesReducer'
import { FooterWrapper } from './styles'

interface Props {
  backgroundColor: 'red' | 'blue'
}

const Footer: React.FunctionComponent<Props> = ({ backgroundColor = 'red' }) => {
  const [message, setMessage] = useState(localStorage.getItem('message') || '');

  const messages = useAppSelector((state) => state.messages.list);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus()
  }, []);

  return (
    <FooterWrapper backgroundColor={backgroundColor}>
      <ul>
        {messages.map((message, id) =>
          <li key={id}>{message}</li>
        )}
      </ul>

      <Input
        value={message}
        className="footer-input"
        onValueChange={(event) => onMessageChange(event, setMessage)}
        inputRef={inputRef}
      />

      <Input
        value={message}
        className="footer-input"
        onValueChange={(event) => onMessageChange(event, setMessage)}
        inputRef={inputRef}
      />

      <input type="text" value="dernier input" />

      <button onClick={() => onAddMessage(message, dispatch)}>Add Message !</button>
    </FooterWrapper>
  )
};

const onMessageChange = (event: ChangeEvent<HTMLInputElement>, setMessage: SetState<string>) => {
  setMessage(event.target.value);

  localStorage.setItem('message', event.target.value);
};

const onAddMessage = (message: string, dispatch: AppDispatch) =>
  dispatch(addMessage(message));

Footer.defaultProps = {
  backgroundColor: 'red'
};

export default Footer