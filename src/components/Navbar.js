"use client"
import {artskyFont} from "@/fonts/fonts.js"
import styles from "@/styles/navbar.module.css"
import MonoContainer from "./MonoContainer"
import {useEffect, useRef} from "react"

export function Navbar() {
  return (<>
    <MonoContainer className = "flex justify-between items-center overflow-clip p-5">
      <h1 className = {`${artskyFont.className} text-white text-5xl ps-5 pe-10`}>artsky</h1>
      <ul className = {`${artskyFont.className} flex gap-8 text-3xl justify-end ${styles.hideNavs}`}>
        <NavItem imgSrc = "/images/blue-watercolor-brush-stroke-1.png" imgTransScale = "1.7" linkName = "Home"/>
        <NavItem imgSrc = "/images/blue-watercolor-brush-stroke-2.png" imgTransScale = "2.2" linkName = "Blog"/>
        <NavItem imgSrc = "/images/blue-watercolor-brush-stroke-3.png"  imgTransScale = "1.4" linkName = "Projects"/>
        <NavItem imgSrc = "/images/blue-watercolor-brush-stroke-4.png" imgTransScale="1.4" linkName = "Artwork"/>
      </ul>
    </MonoContainer>
  </>)

}

function NavItem({linkName, imgSrc, imgTransScale}) {
  const linkImgRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const navLink = linkRef.current;
    const navImg = linkImgRef.current;
    if (!navLink || !navImg) return; 

    function handleMouseEnter() {
      navImg.classList.replace("opacity-0", "opacity-100");
      navImg.style.transform = `scale(${imgTransScale})`;
      navLink.classList.replace("scale-100", "scale-115");
    }

    function handleMouseLeave() {
      navImg.style.transform = `scale(1.0)`;
      navImg.classList.replace("opacity-100", "opacity-0")
      navLink.classList.replace("scale-115", "scale-100");
    }

    function handleResize() {
      const xElementPos = navLink.getBoundingClientRect().x;
      console.log(xElementPos);

      if (xElementPos <= 740) {
        navLink.classList.add("text-white");
      } else {
        navLink.classList.remove("text-white");
      }

      if (xElementPos <= 800) {
        navImg.classList.add("hue-rotate-145");
        navImg.classList.replace("mix-blend-multiply", "mix-blend-hue")
      } else {
        navImg.classList.remove("hue-rotate-145");
        navImg.classList.replace("mix-blend-hue", "mix-blend-multiply")
      }
    }

    handleResize();
    navLink.addEventListener("mouseenter", handleMouseEnter);
    navLink.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      navLink.removeEventListener("mouseenter", handleMouseEnter);
      navLink.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize")
    };
  },[])

  return (
  <>
    <li className = {`relative`}>
      <img src={imgSrc} ref={linkImgRef} className={`${styles.hideImgs} top-2 transition opacity-0 absolute select-none mix-blend-multiply`}/>
      <a ref={linkRef} className ="relative inline-block transition scale-100" href={`/${linkName.toLowerCase()}`}>{linkName}</a></li>
  </>)
}