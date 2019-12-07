
export interface ITab {
  active: boolean;
  text: string;
  onClick?(): void;
}

export interface TabsProps {
  tabs: ITab[];
}
