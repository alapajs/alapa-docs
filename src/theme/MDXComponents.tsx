// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import CodeScreen from "@site/src/components/alapa/code-screen";
import BrowserWindow from "../components/alapa/browser-window";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  CodeScreen,
  BrowserWindow,
};
