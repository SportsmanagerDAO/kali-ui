import { styled } from '../stitches.config'

const Menu = styled('div', {
  display: 'grid',
  gap: '5px',

  '@media (min-width: 340px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto',
  },

  '@media (min-width: 540px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'auto',
  },
})

const Item = styled('div', {
  background: '$gray2',
  border: '1px solid $gray5',
  color: '$mauve12',
  bordeRadius: '10px',
  padding: '1rem',
  overflow: 'hidden',
  boxShadow: '2px 1px 10px 3px $gray7',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  fontFamily: 'Regular',
  fontWeight: '600',

  '@media (min-width: 340px)': {
    width: '5rem',
    height: '5rem',
    fontSize: '12px',
  },
  '@media (min-width: 640px)': {
    width: '9rem',
    height: '3rem',
    fontSize: '21px',

    '&:hover': {
      background: '$gray4',
      border: '1px solid $gray8',
    },
  },

  '& svg': {
    display: 'inline-block',
    width: '15%',
    height: 'auto',
    color: '$gray9',

    '&:hover': {
      color: '$gray10',
    },
  },
})

const MenuNamespace = Object.assign(Menu, { Item: Item })

export { MenuNamespace as Menu }
