import { useDispatch, useSelector } from "react-redux";
import { menuType, setIsOnPhone, setMenu, setWorkBench, workBenchType } from "../config/currentSlice";

const useConfig = () => {

    const dispatch = useDispatch();
    const {menu, workBench} = (useSelector((state: any) => state) as any).currency;

    const setCurrentMenu = (thisMenu: menuType) => {
        dispatch(setMenu(thisMenu))
    }

    const setCurrentWorkBench = (thisWorkBench: workBenchType) => {
        dispatch(setWorkBench(thisWorkBench))
    }

    const setCurrentIsOnPhone = (v: boolean) => {
        dispatch(setIsOnPhone(v))
    }

    return ({
        menu, workBench,
        setCurrentMenu, setCurrentWorkBench, setCurrentIsOnPhone
    })

}

export default useConfig