import style from "./Container.module.css"

function Container(props) {
    return (
        <div id="container" className={`${style.Container} ${style[props.customClass]} ${style[props.classCustomCard]}`}>
            {props.children}
        </div>
    )
}

export default Container