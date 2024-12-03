import {ButtonProperties, buttonProperties} from "./properties.ts";

export const ButtonComponent = ({ variant }: ButtonProperties) => {
    return <button className={
        `${buttonProperties({variant})} p-2 rounded-sm`
    }> Test </button>
}



