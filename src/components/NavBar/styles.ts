import { styled } from "../../../stitches.config";

export const NavBarContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '4.5rem',

  borderStyle: 'solid',
  borderWidth: '0 0 1px 0',
  borderColor: '$light',

  backgroundColor: 'rgb(255 255 255/0.95)',
  backdropFilter: 'blur(8px)',

  top: 0,
  zIndex: '$1',

})

export const NavBarContent = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: '$1',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  transition: 'height .2s ease-in-out'
})

export const NavBarTitleContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  padding: '$1',
  textDecoration: 'none',
  fontWeight: '500',
  color: '$gray80',
  gap: '$1',

  '& h1': {
    fontSize: '14px',
    margin: 0,
    lineHeight: '0.75',
    '& span': {
      color: '$gray40'
    }
  },
  '& h6': {
    fontSize: '12px',
    lineHeight: '0.75',
    fontWeight: '400',
    color: '$gray50',
    display: 'flex',
    alignItems: 'center',
    marginTop: '2px',
    marginBottom: '0',
    '& > span': {
      marginRight: '8px',
      alignItems: 'center',
      display: 'flex',
    }
  }
})



export const NavBarMenu = styled('nav', {
  justifyContent: 'flex-end',
  gap: '$1',
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  flexWrap: 'wrap',
  height: '100%'
})

export const MenuItem = styled('span', {
  textDecoration: 'none',
  color: '$gray50',
  lineHeight: '1.5rem',
  height: 'auto',
  padding: '6px 16px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontWeight: '400',
  transition: '$normal',
  borderRadius: '$pill',
  fontSize: '0.875rem',

  '&:hover': {
    background: '$gray10'
  },

  variants: {
    type: {
      highlight: {
        color: '$gray10',
        background: '$gray90',
        fontWeight: '500',
        marginRight: '8px',
        '&:hover': {
          background: '$gray70'
        }
      }
    }
  }
})