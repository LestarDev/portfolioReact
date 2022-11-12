import { useRef } from "react"
import "./workBenchSimply.css"

/* 
    isOnPhone - button [right]
    Slider - menu
    Slider - workBench
    Slider - footer
    Some kind of submit
*/

const WorkBenchSimply = () => {

    const sliderMenuRef = useRef<HTMLDivElement>(null);

    return (
        <div className="workBench">
            <div className="workBenchMenu">
                <div className="sliderMenuConteiner" ref={sliderMenuRef}>
                    <div>
                        Simply Menu
                    </div>
                    <div>
                        Roteted Menu
                    </div>
                </div>
                <div className="sliderMenuToClick">
                    <div onClick={(e: React.MouseEvent)=>{
                        if(sliderMenuRef.current!.scrollLeft!=0) sliderMenuRef.current!.scrollLeft-=160;
                        console.log(sliderMenuRef.current!.scrollLeft)
                    }}>
                        <span>&lt;</span>
                    </div>
                    <div onClick={(e: React.MouseEvent)=>{
                        sliderMenuRef.current!.scrollLeft+=160;
                    }}>
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkBenchSimply