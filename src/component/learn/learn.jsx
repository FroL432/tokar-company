//  свойство props
`const A = (props) => {
    return <span> {props.label} </span>;
};    1й вариант написания``--------------------` //
`const A = ({label, important= false}) => {

    const style = important ? red : black

    return <span style={style}> {label} </span>;
};` //
`----------------------------------------------------``
<A label="learn react"
    important={true}/>;`;
// на экран выводится "learn react" красного цвета
//
`---------------------------------------------------` // спред оператор
` { ... item } - передает каждое свойство объекта item  `;
