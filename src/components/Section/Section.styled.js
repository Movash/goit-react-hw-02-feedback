import { styled } from 'styled-components';

export const SectionCont = styled('section')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    gap: '40px',
    '& h2': {
      fontWeight: 500,
      fontSize: 40,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#2E2F42',
    },
  };
});
