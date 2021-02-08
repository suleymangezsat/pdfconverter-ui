/** Global definitions for development **/

// for style loader
declare module "*.css" {
  const styles: any;
  export = styles;
}

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type DictionaryOf<T> = {
  [key: string]: T;
};
