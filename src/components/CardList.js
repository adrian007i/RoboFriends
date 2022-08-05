import Card from './Card';
/**
 * 
 * @param {array} robots 
 * @returns JSX of a list of cards
 */
const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((robot, i) => {
                return <Card id={robot.id} name={robot.name} email={robot.email} key={i} />
            })}
        </div>
    );
}

export default CardList;