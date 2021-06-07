import Card from '../../layout/Card/Card';
import classes from './MeetUp.module.css';

const MeetUp = (props) => {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt="OI" />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <adress>{props.adress}</adress>
                    <p>{props.description}</p>
                </div>

                <div className={classes.actions}>
                    <button>FAVORITOS</button>
                </div> 
            </Card>
             
            
        </li>
    );
}

export default MeetUp;
