import MeetUp from '../MeetUp/MeetUp';
import classes from './MeetUps.module.css';


const MeetUps = ({ meetUps }) => {
    return (
        <ul className={classes.list}>
            {meetUps.map((meetup) => (
                <MeetUp 
                    key={meetup.id}
                    title={meetup.title}
                    image = {meetup.image}
                    adress = {meetup.adress}
                    description = {meetup.description}
                />
            ))}
        </ul>
    )
}

export default MeetUps;
