declare module "*.module.css" {
  const styles: Record<string, string>;

  export const css: string;
  export default styles;
}
