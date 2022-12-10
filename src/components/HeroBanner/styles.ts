import { styled } from "../../../stitches.config";

export const HeroContent = styled('section', {
  overflowX: 'hidden',
  flexGrow: '1',
  display: 'block',
  '& h1': {
    color: '$gray90',
    fontWeight: '600',
    fontSize: '4.25rem',
    lineHeight: '1',
    letterSpacing: '-0.05em',
    margin: '0 0 1.5rem',
    '& span': {
      color: '$gray60'
    },
  },

  '& p': {
    marginTop: '$2',
    fontWeight: '400',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap',
    padding: '0',
    marginBottom: '$3'
  }

})