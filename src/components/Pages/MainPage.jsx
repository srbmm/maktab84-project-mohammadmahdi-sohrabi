import {Footer, Header, Slider} from "@/components";
import img1 from "@/assets/picture/slides/img_1.png"
import img2 from "@/assets/picture/slides/img_2.png"
const SlidesData = [
    {img: img1, link: "auth"},
    {img: img2, link: "auth"}
]
export const MainPage = () => {
    return (
        <>
            <Slider data={SlidesData}>
                <Header/>
            </Slider>
            <div>
                body
            </div>
            <Footer/>
        </>
    )
}