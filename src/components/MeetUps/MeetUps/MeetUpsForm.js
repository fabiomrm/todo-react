import { useState, useRef } from 'react';
import Card from '../../layout/Card/Card';
import classes from './MeetUpsForm.module.css';

const MeetUpsForm = (props) => {

        const [title, setTitle] = useState('');
        const [image, setImage] = useState('');
        const [adress, setAdress] = useState('');
        const [description, setDescription] = useState('');
        const form = useRef(null)

        const submitHandler = () => {
            let data = new FormData(form.current)
            data = Object.fromEntries(data)

            
            props.onAddMeetUp(data)
        }

       


    return (
        <Card>
            <form ref={form} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={title} 
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Imagem</label>
                    <input type="url" id="image" name="image" value={image}
                        onChange={(e) => {setImage(e.target.value)}}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor="adress">Endereço</label>
                    <input type="text" id="adress" name="adress" value={adress}
                        onChange={(e) => {setAdress(e.target.value)}}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" name="description" value={description}
                        onChange={(e) => {setDescription(e.target.value)}}
                    ></textarea>
                </div>

                <div className={classes.actions}>
                    <button type="button" onClick={submitHandler}>ADICIONAR</button>
                </div>
            </form>  
        </Card>
    )
}

export default MeetUpsForm;
