const parts = ["container", "label", "closeButton"];
// The styles all tag have in common

const baseStyle = {
  container: {
    background: "btn-primary-default-background-color",
    bgColor: "btn-primary-default-background-color",
  },
};
// Four sizes: sm,md and lg
const sizes = {
  sm: {
    container: {
      minH: "tag-sm-height",
      fontSize: "btn-xs-text-size",
    },
  },
  md: {
    container: {
      minH: "tag-md-height",
      fontSize: "btn-sm-text-size",
    },
  },
  lg: {
    container: {
      minH: "tag-lg-height",
      fontSize: "btn-md-text-size",
    },
  },
};
// Two variants: outline and solid
// The default size and variant values
const defaultProps = {
  size: "md",
};

export default {
  baseStyle,
  sizes,
  // variants,
  defaultProps,
};
