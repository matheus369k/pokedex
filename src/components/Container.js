import style from "./Container.module.css"

function Container(props) {
    return (
        <div id="container" className={`${style.Container} ${style[props.customClass]} ${style.dark}`}>
            {props.children}
        </div>
    )
}

export default Container