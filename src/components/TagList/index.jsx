import { tagBackground, tagColor } from "./colors";


export const TagList = ({ tags }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center my-2">
        {tags?.map((tag, index) =>{
            const name = tag.type.name;
            const color = tagColor[name];
            const background = tagBackground[name];
            return <div className={`${background} ${color} rounded-md px-4 py-1 capitalize`} key={`tag-${index}`}>{name}</div>
        })}
       </div>
    )
}