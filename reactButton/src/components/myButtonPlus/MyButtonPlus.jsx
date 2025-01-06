function MyButtonPlus() {
    return (
        <button onClick = {() => SetCount((count) => count +1)}>Count is {count}</button>
    )
}

export default MyButtonPlus