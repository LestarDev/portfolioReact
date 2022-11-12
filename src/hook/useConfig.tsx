import { useDispatch, useSelector } from "react-redux";
import { menuType, setMenu, setWorkBench, workBenchType } from "../config/currentSlice";

const useConfig = () => {

    const dispatch = useDispatch();
    const {menu, workBench} = (useSelector((state: any) => state) as any).currency;

    const setCurrentMenu = (thisMenu: menuType) => {
        dispatch(setMenu(thisMenu))
    }

    const setCurrentWorkBench = (thisWorkBench: workBenchType) => {
        dispatch(setWorkBench(thisWorkBench))
    }

    return ({
        menu, workBench,
        setCurrentMenu, setCurrentWorkBench
    })

}

export default useConfig