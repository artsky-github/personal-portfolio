"use client"
import {artskyFont} from "@/fonts/fonts.js"
import styles from "@/styles/navbar.module.css"
import MonoContainer from "./MonoContainer"
import {useEffect, useRef} from "react"

export function Navbar() {
  return (<>
    <MonoContainer className = "flex justify-between items-center overflow-clip p-5">
      <h1 className = {`${artskyFont.className} text-white text-5xl pe-2`}>artsky</h1>
      <ul className = {`${artskyFont.className} flex gap-8 text-3xl justify-end`}>
        <NavItem imgSrc = "/images/yellow-watercolor.jpg" imgTransScale = "3.2" linkName = "Home"/>
        <NavItem imgSrc = "/images/blue-watercolor.jpg" imgTransScale = "3" linkName = "Blog"/>
        <NavItem imgSrc = "/images/green-watercolor.jpg"  imgTransScale = "2" linkName = "Projects"/>
        <NavItem imgSrc = "/images/red-watercolor.jpg" imgTransScale="2.5" linkName = "Artwork"/>
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
      navLink.classList.replace("scale-100", "scale-110");
    }

    function handleMouseLeave() {
      navImg.style.transform = `scale(1.0)`;
      navImg.classList.replace("opacity-100", "opacity-0")
      navLink.classList.replace("scale-110", "scale-100");
    }

    navLink.addEventListener("mouseenter", handleMouseEnter);
    navLink.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navLink.removeEventListener("mouseenter", handleMouseEnter);
      navLink.removeEventListener("mouseleave", handleMouseLeave);
    };
  },[])

  return (
  <>
    <li className = {`relative`}>
      <img src={imgSrc} ref={linkImgRef} className="transition opacity-0 absolute select-none mix-blend-multiply"/>
      <a ref={linkRef} className ="relative inline-block transition scale-100" href={`/${linkName.toLowerCase()}`}>{linkName}</a></li>
  </>)
}