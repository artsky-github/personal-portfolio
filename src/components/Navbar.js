import {artskyFont} from "@/fonts/fonts.js"
import styles from "@/styles/navbar.module.css"
import { MonoContainer } from "./MonoContainer"

export function Navbar() {
  return (<>
    <MonoContainer className = "flex justify-between">
      <h1 className = {`${artskyFont.className} text-white text-5xl p-5 pe-2`}>artsky</h1>
      <ul className = {`${artskyFont.className} flex gap-8 text-3xl align-middle items-center p-5 justify-end`}>
        <NavItem>Home</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Artwork</NavItem>
      </ul>
    </MonoContainer>
  </>)

}

function NavItem({children}) {
  return (
  <>
    <li className = {`${styles.navTransition} hover:scale-115 hover:cursor-pointer`}>{children}</li>
  </>)
}