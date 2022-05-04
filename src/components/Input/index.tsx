import React, { ChangeEventHandler, LegacyRef } from 'react'

interface Props {
  value: string,
  onValueChange: ChangeEventHandler<HTMLInputElement>,
  inputRef: LegacyRef<HTMLInputElement>
}

const Input: React.FunctionComponent<Props> = ({ value, onValueChange, inputRef }) =>
  <input
    type="text"
    data-testid="Input"
    value={value}
    onChange={onValueChange}
    ref={inputRef}
  />;

export default Input