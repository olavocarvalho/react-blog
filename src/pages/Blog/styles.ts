import { styled } from "../../../stitches.config";


export const PostsContainer = styled('section', {
  marginTop: '$3',
  display: 'flex',
  flexDirection: 'column',
})

export const PostsListHeader = styled('h3', {
  lineHeight: '1.75',
  fontSize: '1.25rem',
  fontWeight: '700',
  marginBottom: '$2',
  borderBottom: '1px solid $gray30'
})

export const PostListBody = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  overflowX: 'hidden',
  padding: '6px 0',

  '& > a': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1px 0',
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    padding: '1rem',
    borderRadius: '$2',
    transition: '$normal',
    '&:hover': {
      background: '$gray10'
    }
  }
})

export const PostTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
})

export const PostDate = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
  color: '$gray60'
})