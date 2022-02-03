import { makeStyles, withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

export const useStyles = makeStyles({
  price: {
    fontFamily: 'Basis Grotesque Pro Medium',
    marginLeft: '4px',
    marginBottom: '0px',
  },
  modalBody: {
    paddingRight: '20px !important',
  },
});

export const PrettoSlider = withStyles({
  root: {
    color: '#593cfb',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 8,
  },
  rail: {
    height: 8,
    borderRadius: 8,
    marginRight: '10px',
  },
})(Slider);
