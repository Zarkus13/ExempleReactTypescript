import React, { ChangeEventHandler, LegacyRef, RefObject } from 'react'
import { InputWrapper } from './styles'

interface Props {
  value: string,
  className?: string,
  onValueChange: ChangeEventHandler<HTMLInputElement>,
  inputRef: RefObject<HTMLInputElement>
}

const Input: React.FunctionComponent<Props> = ({ value, className, onValueChange, inputRef }) =>
  <InputWrapper
    type="text"
    className={className}
    value={value}
    onChange={onValueChange}
    ref={inputRef}
  />;

export default Input