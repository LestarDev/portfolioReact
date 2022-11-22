import { useRef } from "react"
import useConfig from "../../hook/useConfig";
import "./workBenchSimply.css"

/* 
    isOnPhone - button [right]
    Slider - menu
    Slider - workBench
    Slider - footer
    Some kind of submit
*/

const WorkBenchSimply = () => {

    const config = useConfig();

    const sliderMenuRef = useRef<HTMLDivElement>(null);

    const menuWhichOneRef = useRef<HTMLDivElement>(null);

    if(menuWhichOneRef.current){
        menuWhichOneRef.current.children[sliderMenuRef.current!.scrollLeft/320].className="blueBall";
    }

    return (
        <div className="workBench">
            <div className="workBenchMenu">
                <div className="sliderMenuConteiner" ref={sliderMenuRef}>
                    <div className="menuNormal">
                        <div><p>Index</p></div>
                        <div><p>WorkBench</p></div>
                        <div><p>Github</p></div>
                        <div><p>Me</p></div>
                        <span>Simple Menu</span>
                    </div>
                    <div>
                        Roteted Menu
                    </div>
                </div>
                <div className="sliderMenuToClick">
                    <div onClick={(e: React.MouseEvent)=>{
                        sliderMenuRef.current!.scrollLeft-=320;
                        if(sliderMenuRef.current!.scrollLeft==0){
                            config.setCurrentMenu("Hamburger");
                        }
                    }}>
                        <span>&lt;</span>
                    </div>
                    <div onClick={(e: React.MouseEvent)=>{
                        sliderMenuRef.current!.scrollLeft+=320;
                        
                    }}>
                        <span>&gt;</span>
                    </div>
                </div>
                <div className="workBenchMenuWhichOne" ref={menuWhichOneRef}>
                    <div className="blueBall"></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default WorkBenchSimply