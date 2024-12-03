import {PandaComponents} from "../componentes";
import {ComponentMap, properties} from "../types.ts";
import {useState} from "react";


export const Viewer = () => {

    const components = PandaComponents();
    const [componentName, setComponentName ] = useState<keyof ComponentMap>(components[0].title);

    return <section className="grid grid-cols-12 p-7">
        <article className="flex flex-col col-span-2 p-7">
            { components.map( ({title}, index) => <button className="p-2" key={`button-${index}`} onClick={()  => setComponentName(title)}> {title}</button>)}
        </article>
        <article className="flex flex-col gap-y-2 col-span-10 p-7">
            { components.map( ({title, component}, index) => title === componentName && <div className="p-2" key={`component-${index}`}>{component(properties[componentName])}</div>)}
        </article>
    </section>
}


