import screenshot1 from "../../assets/screenshot_1.png"
import screenshot2 from "../../assets/screenshot_2.png"
import screenshot3 from "../../assets/screenshot_3.png"
import screenshot4 from "../../assets/screenshot_4.png"
import screenshot5 from "../../assets/screenshot_5.png"
import screenshot6 from "../../assets/screenshot_6.png"
import Carousel from "../Carousel/Carousel"

const images = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6]

export default function SneakPeek() {
    return (
        <div
            id="features"
            className="flex flex-col items-center gap-8 lg:gap-10 pt-8 px-4 lg:px-0 bg-accent pb-10"
        >
            <h2 className="text-center">
                Our Solution At A Glance
            </h2>

            <Carousel images={images} />
        </div>
    )
}