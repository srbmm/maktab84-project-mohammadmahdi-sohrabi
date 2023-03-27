import {Footer, Header, OutOfFrame, Slider, MainPageTab, ErrorBoundary} from "@/components";
import img1 from "@/assets/picture/slides/img_1.png"
import img2 from "@/assets/picture/slides/img_2.png"
import {Link} from "react-router-dom";
import {useState,useEffect} from "react";
import kifLink from "@/assets/picture/directLinkImg/kif.jpg"
import eynakLink from "@/assets/picture/directLinkImg/eynak.png"
import {getProduct} from "@/api";

const prGroupId1 = ['1', '2', '3', '4']
const prGroupId2 = ['5', '6', '7', '8', '9']
const SlidesData = [
    {img: img1},
    {img: img2}
]

export const MainPage = () => {
    const [prGroup1, setPrGroup1] = useState([]);
    const [prGroup2, setPrGroup2] = useState([]);
    let isSend = false
    useEffect(() => {
        prGroupId1.forEach(item => {
            if(!isSend)  getProduct(item).then(response => {
                prGroup1.push(response.data)
                setPrGroup1([...prGroup1])
            })
        })

        setPrGroup2([])
        prGroupId2.forEach(item => {
            if(!isSend) getProduct(item).then(response => {
                prGroup2.push(response.data)
                setPrGroup2([...prGroup2])
            })
        })
        isSend = true

    }, []);

    useEffect(() => {
    }, []);
    useEffect(() => {
    }, [prGroup1]);

    return (
        <>
            <Slider data={SlidesData}>
                <Header/>
            </Slider>
            <div className="mt-10 mb-20">
                <ErrorBoundary>
                    <OutOfFrame products={prGroup1} to="#" text="استایل هفته"/>
                </ErrorBoundary>
                <MainPageTab/>
                <div className="flex flex-wrap md:flex-nowrap gap-6 pr-20 pl-20 mt-10 mb-10">
                    <Link to="#"><img src={kifLink}/></Link>
                    <Link to="#"><img src={eynakLink}/></Link>
                </div>
                <ErrorBoundary>
                    <OutOfFrame products={prGroup2} to="#" text="پر بازدید ترین اخیر"/>
                </ErrorBoundary>
            </div>
            <Footer/>
        </>
    )
}