import { styled } from 'styled-components';

export const Buttons = styled('div')(() => {
  return {
    display: 'flex',
    gap: '20px',
    '& button': {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#2E2F42',
      border: '1px solid #4d6dfa',
      backgroundColor: '#99acff',
      borderRadius: '5px',
      padding: '5px 15px',
      boxShadow:
        'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
    },
  };
});
