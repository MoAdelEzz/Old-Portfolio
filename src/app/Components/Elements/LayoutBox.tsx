import { Square } from "lucide-react";
import { FunctionComponent } from "react";

interface LayoutBoxProps {
    header: string;
    text: string;
}
 
const LayoutBox: FunctionComponent<LayoutBoxProps> = ({text, header}) => {
    return ( 
        <>
        <div className="flex items-center border-b-4 border-red-500 px-2">
            <span className="mr-2"><Square size={14} fill="red" color="red"></Square></span>
            {header}
        </div>
        {
            text.length > 0 &&
            <p className="bg-[#2c2d33] p-2">
                {text}
            </p>
        }
        </>
     );
}
 
export default LayoutBox;