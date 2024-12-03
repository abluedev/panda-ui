import {ButtonComponent} from "./Button";
import {AnchorComponent} from "./Anchor";
import {AnchorProperties} from "./Anchor/properties.ts";
import {PandaComponent} from "../types.ts";
import {ButtonProperties} from "./Button/properties.ts";

// TODO: Estaría bien buscar una solución mejor al problema de tipos

export const PandaComponents = (): PandaComponent[] => [
    // @ts-ignore
    { title: 'ButtonComponent', component: (props: ButtonProperties) => <ButtonComponent {...props } /> },
    // @ts-ignore
    { title: 'AnchorComponent', component: (props: AnchorProperties) => <AnchorComponent {...props } /> },
]
