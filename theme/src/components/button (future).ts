import { darken, mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const baseStyle = {
  fontWeight: 'btn-font-weight',
  textTransform: 'uppercase',
  width: 'auto',
  borderRadius: 'btn-border-radius',
  fontFamily: 'btn-font-family',
  border: 'btn-border-width',
  borderStyle: 'solid'
}

const sizes = {
  xs: {
    paddingLeft: 'btn-xs-padding-left',
    paddingRight: 'btn-xs-padding-right',
    h: 'btn-xs-height',
    fontSize: 'btn-xs-text-size'
  },
  sm: {
    paddingLeft: 'btn-sm-padding-left',
    paddingRight: 'btn-sm-padding-right',
    height: 'btn-sm-height',
    fontSize: 'btn-sm-text-size'
  },
  md: {
    paddingLeft: 'btn-md-padding-left',
    paddingRight: 'btn-md-padding-right',
    height: 'btn-md-height',
    fontSize: 'btn-md-text-size'
  },
  lg: {
    paddingLeft: 'btn-lg-padding-left',
    paddingRight: 'btn-lg-padding-right',
    height: 'btn-lg-height',
    fontSize: 'btn-lg-text-size'
  }
}

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'gray',
    }),
  'primary-on-accent': () => ({
    bg: 'bg-accent',
    color: 'brand.600',
    _hover: { bg: 'brand.100' },
    _active: { bg: 'brand.100' },
  }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props,
      variant: 'outline',
      colorScheme: 'purple',
    }),
  'secondary-on-accent': {
    color: 'white',
    borderColor: 'brand.50',
    borderWidth: '1px',
    _hover: { bg: 'whiteAlpha.200' },
    _active: { bg: 'whiteAlpha.200' },
  },
  outline: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    // bg: mode('white', 'gray.800')(props),
    bg: mode('btn-bg', 'gray.800')(props),
    fg: mode('btn-fg', 'gray.800')(props),
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        transparentize('gray.700', 0.4)(props.theme),
      )(props),
    },
    _checked: {
      bg: mode('gray.100', 'gray.700')(props),
    },
    _active: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  ghost: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    _hover: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
    _active: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
    _activeLink: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  'ghost-on-accent': (props: StyleFunctionProps) => ({
    color: 'brand.50',
    _hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    _activeLink: {
      color: 'white',
      bg: 'bg-accent-subtle',
    },
  }),
  link: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        color: 'muted',
        _hover: {
          textDecoration: 'none',
          color: 'default',
        },
        _active: {
          color: 'default',
        },
      }
    }
    return {
      color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
      _hover: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
        textDecoration: 'none',
      },
      _active: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
      },
    }
  },
  'link-on-accent': () => {
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: 'brand.50',
      _hover: {
        color: 'white',
      },
      _active: {
        color: 'white',
      },
    }
  },
}

export default {
  baseStyle,
  variants,
  sizes,
}
