

function ButtonCustom(props) {
    return (
        <button onClick={props.onClick}
            style={{
                backgroundColor: (props.type === 'red' ? 'var(--danger-color)' : props.type === 'black' ? 'var(--secondary-color)' : '#ffffff'),
                color: (props.type !== 'White' ? '#fff' : 'var(--secondary-color)'),
            }}>
            {props.title}
        </button>
    )
}

export { ButtonCustom }