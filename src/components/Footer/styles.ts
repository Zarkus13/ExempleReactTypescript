import styled from 'styled-components'
import { InputWrapper } from 'components/Input/styles'

interface FooterWrapperProps {
  backgroundColor: string
}

export const FooterWrapper = styled.footer<FooterWrapperProps>`
  background-color: ${(props) => props.backgroundColor};
  
  & ${InputWrapper} {
    color: green;
  }
`;