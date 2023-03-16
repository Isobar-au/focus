import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Core/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
  colorScheme: "blue",
  size: "md",
  children: "Get in touch",
  variant: "solid",
};

/* theme = {
  colors: [
    primary : {

    }
  ],
  components: {
    testimonialsCard: {
      bg: '#000',
      heading: {

      }
    },
    testimonialsCardHeading: {
      fontSize: 24,

    }
  }
}

styleProvider = theme.compoenents.testimonialCard

 */
