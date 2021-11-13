const Typography = {
  h1: {
    fontWeight: 600,
    fontSize: '2.375rem', // 38px
    letterSpacing: 'normal',
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.9375rem', //31px
    letterSpacing: 'normal',
    lineHeight: 1.04, // 1.04 * 16 = 16.64
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.875rem', //30px Primary header
    letterSpacing: 'normal',
    lineHeight: 0.68, // 0.68 * 16 = 10.88
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.6875rem', //27px
    letterSpacing: 'normal',
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.4375rem', // 23px secondary header
    letterSpacing: 'normal',
    lineHeight: 0.86, // 0.86 * 16 = 13.76
  },
  h6: {
    fontWeight: 600,
    fontSize: '1.1875rem', // 19px
    letterSpacing: 'normal',
    lineHeight: 0.75,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1.1875rem', // 19px
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: '0.9375rem', //15px
    lineHeight: 1.57,
    letterSpacing: '0.00714em',
  },
  body1: {
    fontWeight: 400,
    fontSize: '0.9375rem', //15px primary font size
    lineHeight: 1.5, // 1.5 * 16 = 24
    letterSpacing: '0.00938em',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.8125rem', //13px secondary font size
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.6875rem', // 11px usefull for options
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
  button: {
    fontWeight: 400,
    fontSize: '1.125rem', // 18px
    letterSpacing: 'normal',
    lineHeight: 1.33,
    textTransform: 'none' as any, // texttransform property can't be imported here and as type
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.625rem', // 10px errors or focused text
    lineHeight: 1.1,
    letterSpacing: 'normal',
    textTransform: 'none' as any, // texttransform property can't be imported here and as type
  },
};

export default Typography;
