// module, that enables importing css files in .tsx files as follows: import * as styles from ".css file"
declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}
