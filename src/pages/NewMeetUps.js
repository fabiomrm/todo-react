import { useHistory } from 'react-router-dom';

import MeetUpsForm from '../components/MeetUps/MeetUps/MeetUpsForm';

const NewMeetUpsPage = () => {
    const history = useHistory();

    const submitForm = async (meetupData) => {
        console.log(meetupData)

        const URL = 'https://meetups-react-9da43-default-rtdb.firebaseio.com/meetups.json'
        const response = await fetch(URL, {   
            method:'POST',
            body: JSON.stringify(meetupData),
            headers: {'Content-Type': 'application/json'}
        })
        const result = await response.json();
        const redirect = history.replace('/');
        console.log('Adicionado!')
        
    };
    
    return (
        <section>
            <h1>Add New Meet Up</h1>
            <MeetUpsForm onAddMeetUp={submitForm}/>
        </section>
    )
}

export default NewMeetUpsPage;
