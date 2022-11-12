import Menu from '../components/menu/Menu'
import MenuPhone from '../components/menuPhone/menuPhone';
import WorkBenchSimply from '../components/workBenchSimply/workBenchSimply';
import useWindowDimensions from '../hook/useWindowDimensions';

const Index = () => {

     const { height, width } = useWindowDimensions();

     if(width>=768){

        return (
            <>
                <Menu />
                <WorkBenchSimply />
            </>
        )
     }

     return (
        <>
            <MenuPhone />
            <WorkBenchSimply />
        </>
     )
    
}

export default Index