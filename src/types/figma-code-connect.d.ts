declare module "@figma/code-connect" {
  interface PropsType {
    [key: string]: any;
  }

  const figma: {
    connect: (
      Component: React.ComponentType<any>,
      url: string,
      options: {
        props: { [key: string]: any };
        example: (props: PropsType) => JSX.Element;
      }
    ) => void;
    string: (name: string) => any;
    boolean: (name: string) => any;
    enum: (name: string, values: Record<string, string>) => any;
  };

  export default figma;
}
