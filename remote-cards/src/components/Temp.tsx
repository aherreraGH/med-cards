import './card.css'

export const Temp = (props: any) => {

    // async function handleClick(e: any, id: string, isMic: boolean) {
    //     e.preventDefault();
    // }

    return <div className="card-layer" id={`card-layer`}>
        <div className='card-title'>Temp</div>
        <div className="card-temp">&deg;98.3</div>
    </div>
}

export default Temp;