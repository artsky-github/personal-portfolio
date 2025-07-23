import styles from "@/styles/mono-container.module.css"

export function MonoContainer({children, className = ""}) {
  return (<>
    <div className = {`${styles.drawnBorder} ${styles.paperBackground} ${className} shadow-lg min-w-max`}>
      {children}
    </div>
  </>)
} 