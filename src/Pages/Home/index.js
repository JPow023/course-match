import React from 'react';
import Header from '../../Components/Jumbotron';
import SearchBar from '../../Components/SearchBar';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../../config';

class Home extends React.Component {  
    state = {
        value: '',
        courses: [],

        isSubmitted: false,
        last: '',
        // next: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        // console.log(this.state.value);
    }

    async handleSubmit(event) {

        this.state.courses = [];

        event.preventDefault();

        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }

        const db = Firebase.firestore();

        const coursesRef = db.collection('courses');

        // console.log(this.state.value);

        const first = coursesRef
            .where('primary_category', '==', this.state.value)
            .orderBy('avg_rating', 'desc')
            .limit(10);

        const snapshot = await first.get();
    
        const last = snapshot.docs[snapshot.docs.length - 1].data();
        // const next = coursesRef.where('primary_category', '==', this.state.value).orderBy('avg_rating', 'desc').startAfter(last.data().avg_rating).limit(10)


        this.setState({ last: last });
        // this.setState({ next: next });
        
        // console.log('next:', this.state.next);

        if (snapshot.empty) {
            console.log('no matching documents');
            return;
        }

        snapshot.forEach(doc => {
            this.state.courses.push(doc.data())
        });

        // console.log(this.state.courses);

        this.props.history.push({
            pathname: '/results',
            value: this.state.value,
            courses: this.state.courses,
            last: this.state.last,
            // next: this.state.next
        });

        this.state.isSubmitted = true;

        // console.log(this.state.isSubmitted);
    }


    render = () => {

        return(
            <div>
                <Header />
                <SearchBar 
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    courses={this.state.courses}
                />
            </div>
        )
    }
}


export default Home;