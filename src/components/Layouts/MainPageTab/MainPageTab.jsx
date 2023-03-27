import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector.jsx";
import {PictureLink} from "@/components";
import manLebas from "@/assets/picture/tabs/man/lebas.jpg"
import manKafsh from "@/assets/picture/tabs/man/kafsh.jpg"
import manVarzeshi from "@/assets/picture/tabs/man/varzeshi.jpg"
import manEynak from "@/assets/picture/tabs/man/eynak.jpg"
import womanLebas from "@/assets/picture/tabs/woman/lebas.jpg"
import womankif from "@/assets/picture/tabs/woman/kif.jpg"
import womanVarzeshi from "@/assets/picture/tabs/woman/varzeshi.jpg"
import womanKafsh from "@/assets/picture/tabs/woman/kafsh.jpg"
import childBoy from "@/assets/picture/tabs/child/boy.jpg"
import childGirl from "@/assets/picture/tabs/child/girl.jpg"
import childNozad from "@/assets/picture/tabs/child/nozad.jpg"
import healthArayeshi from "@/assets/picture/tabs/health/arayeshi.jpg"
import healthAtr from "@/assets/picture/tabs/health/atr.jpg"
import healthBehdashti from "@/assets/picture/tabs/health/behdashti.jpg"
import healthSalamat from "@/assets/picture/tabs/health/salamat.jpg"
import healthShakhsi from "@/assets/picture/tabs/health/shakhsi.jpg"


export function MainPageTab() {
    const [selectedTab, setSelectedTab] = useTabs([
        "man",
        "woman",
        "child",
        "health",
    ]);

    return (
        <>
            <nav className="flex border-b border-gray-300">
                <TabSelector
                    isActive={selectedTab === "man"}
                    onClick={() => setSelectedTab("man")}
                >
                    مردانه
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === "woman"}
                    onClick={() => setSelectedTab("woman")}
                >
                    زنانه
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === "child"}
                    onClick={() => setSelectedTab("child")}
                >
                    بچگانه
                </TabSelector>
                <TabSelector
                    isActive={selectedTab === "health"}
                    onClick={() => setSelectedTab("health")}
                >
                    زیبایی و سلامت
                </TabSelector>
            </nav>
            <div className="p-4">
                <TabPanel hidden={selectedTab !== "man"}>
                    <div className="flex flex-col gap-5">
                        <PictureLink img={manLebas} text="لباس مردانه"/>
                        <div className="flex gap-5">
                            <PictureLink img={manKafsh} text="کفش مردانه"/>
                            <PictureLink img={manEynak} text="اکسسوری مردانه"/>
                            <PictureLink img={manVarzeshi} text="ورزشی مردانه"/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "woman"}>
                    <div className="flex flex-col gap-5">
                        <PictureLink img={womanLebas} text="لباس زنانه"/>
                        <div className="flex gap-5">
                            <PictureLink img={womanKafsh} text="کفش زنانه"/>
                            <PictureLink img={womankif} text="اکسسوری زنانه"/>
                            <PictureLink img={womanVarzeshi} text="ورزشی زنانه"/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "child"}>
                    <div className="flex flex-col gap-5">
                        <PictureLink img={childNozad} text="نوزاد"/>
                        <div className="flex gap-5">
                            <PictureLink img={childGirl} text="دخترانه"/>
                            <PictureLink img={childBoy} text="پسرانه"/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== "health"}>
                    <div className="flex flex-col gap-5">
                        <PictureLink img={healthArayeshi} text="لوازم آرایشی"/>
                        <div className="flex gap-5">
                            <PictureLink img={healthAtr} text="لوازم بهداشتی"/>
                            <PictureLink img={healthBehdashti} text="لوازم شخصی برقی"/>
                            <PictureLink img={healthSalamat} text="عطر و ادکلن"/>
                            <PictureLink img={healthShakhsi} text="ابزار سلامت"/>
                        </div>
                    </div>
                </TabPanel>
            </div>
        </>
    );
}
