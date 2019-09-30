import { StyledComponent } from "styled-components";

const memory = new Map();

export const declareRemplace = (styledcomponent: StyledComponent<any, any, any, any>, newName: string) => {
  memory.set(styledcomponent, { newName, component: styledcomponent });
}
