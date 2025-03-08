import { useEffect } from "react";
import "./scss/App.scss";
import images from "./data";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contaier",
                start: "top top",
                end: "+=500%",
                scrub: 1,
                pin: true,
            },
        });
        tl.to(".imgMask1", {
            maskSize: "200%",
        });
        tl.to(".imgMask2", {
            maskSize: "200%",
        });

        tl.to(".imgMask3", {
            maskSize: "200%",
        });
    });

    return (
        <>
            <section>往下滑動</section>
            <div className="contaier">
                <img src={images[0]} alt="" className="imgMask1" />
                <img src={images[1]} alt="" className="imgMask2" />
                <img src={images[2]} alt="" className="imgMask3" />
            </div>
            <section>Mask</section>
        </>
    );
}
