import {ButtonProperties, properties} from "./properties.ts";

export const ButtonComponent = ({ variant }: ButtonProperties) => {
    return <button className={
        `${properties({variant})} p-2 rounded-sm`
    }> Test </button>
}



