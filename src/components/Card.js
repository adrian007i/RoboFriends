const Card = ({id, name, email}) =>{

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot_img' src={`https://robohash.org/${id}?size=200x200`}alt=''/>
            <h5>{name}</h5>
            <p>{email}</p>
        </div>
    )
};

export default Card;