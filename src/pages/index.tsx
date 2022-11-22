import Menu from '../components/menu/Menu'
import MenuPhone from '../components/menuPhone/menuPhone';
import WorkBenchSimply from '../components/workBenchSimply/workBenchSimply';
import useConfig from '../hook/useConfig';
import useWindowDimensions from '../hook/useWindowDimensions';

const Index = () => {

     const { height, width } = useWindowDimensions();

    const config = useConfig();

     if(width>=768){
        switch(config.menu){
            case "Hamburger":
                return (
                    <>
                        <Menu />
                        <WorkBenchSimply />
                    </>
                )
            case "Circle":
                return  (
                    <>
                        
                    </>
                )
        }
        
     }

     return (
        <>
            <MenuPhone />
            <WorkBenchSimply />
        </>
     )
    
}

export default Index