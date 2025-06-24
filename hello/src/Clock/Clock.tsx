import styles from "./Clock.module.css"

export default function Clock(){
    return(<>
     {/* <div>Hour:${}Minute:():Second:()</div> */}
     <div className={styles.clock}>
        <h1>clock</h1>
     </div>
    </>)
}