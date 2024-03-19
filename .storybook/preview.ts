import type { Preview } from "@storybook/angular";

const customViewports = {
  large: {
     name: "Large screens (PCs)",
     styles: {
        width: "1920px",
        height: "1080px"
     }
  },
  medium: {
    name: "Medium screens (Tablets)",
    styles: {
       width: "1024px",
       height: "963px"
    }
 },
  small: {
     name: "Small screens (Mobile)",
     styles: {
        width: "577px",
        height: "500px"
     }
  }
};

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
    moduleMetadata: {},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered"
  },
};

export default preview;
