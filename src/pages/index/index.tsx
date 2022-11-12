import Menu from '../../components/menu/Menu'
import MenuPhone from '../../components/menuPhone/menuPhone';
import useWindowDimensions from '../../hook/useWindowDimensions';
import './index.css'

const Index = () => {

     const { height, width } = useWindowDimensions();

     if(width>=768){
        return (
            <>
                <Menu />
            </>
        )
     }

     return (
        <>
            <MenuPhone />
        </>
     )
    
}

export default Index