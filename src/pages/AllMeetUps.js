import MeetUps from '../components/MeetUps/MeetUps/MeetUps';

const meetUps = [
    {
        id: 1,
        title: 'MEET UP 01',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        adress: 'Meetupstreet 1, 12345 Meetup City',
        description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 2,
        title: 'MEET UP 02',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        adress: 'Meetupstreet 2, 12345 Meetup City',
        description:
        'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    },
    {
        id: 3,
        title: 'MEET UP 03',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        adress: 'Meetupstreet 3, 12345 Meetup City',
        description:
        'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!'
    }

];




const AllMeetUpsPage = () => {
    return (
        <section> 
            <h1>All MeetUps</h1>
            <MeetUps meetUps={meetUps}/>
        </section>
    )
}

export default AllMeetUpsPage;
