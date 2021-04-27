import React from 'react';
import Navigation from '../../Components/Navbar';
import Course from '../../Components/Course';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../../config';
import Paginate from '../../Components/Pagination';

class Results extends React.Component {
    state = {
        value: '',
        courses: [],
        // isSubmitted: false,
        last: {

        },
        // next: {

        // }
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handlePaginate = this.handlePaginate.bind(this);
    }

    handleChange(event) {

        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    async handleSubmit(event) {

        this.setState({ courses: [] });

        event.preventDefault();

        // this.props.location.courses = [];

        event.preventDefault();

        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }

        const db = Firebase.firestore();

        const coursesRef = db.collection('courses');

        console.log(this.state.value);

        const first = coursesRef
            .where('primary_category', '==', this.state.value)
            .orderBy('avg_rating', 'desc')
            .limit(10);

        const snapshot = await first.get();

        // const last = snapshot.docs[snapshot.docs.length - 1];

        // this.setState({ next: ".where('primary_category', '==', this.state.value).orderBy('avg_rating', 'desc').startAfter(last.data().avg_rating).limit(10)"
        // });
        
        if (snapshot.empty) {
            console.log('no matching documents');
            return;
        }

        snapshot.forEach(doc => {
            this.state.courses.push(doc.data())
        });

        console.log(this.state.courses);
        // this.setState({ isSubmitted: true });
    
    }

    componentDidMount() {
        this.setState({ courses: this.props.location.courses, value: this.props.location.value, last: this.props.location.last });
    }


    async handlePaginate() {

        // this.setState({ isSubmitted: false });

        console.log(this.state.value);
        console.log(this.state.last);

        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);
        }

        const db = Firebase.firestore();

        const coursesRef = db.collection('courses');

        const snapshot = await coursesRef.where('primary_category', '==', this.state.value).orderBy('avg_rating', 'desc').startAfter(this.state.last.avg_rating).limit(10).get();

        const last = snapshot.docs[snapshot.docs.length - 1].data();

        if (snapshot.empty) {
            console.log('no matching documents');
            return;
        }

        snapshot.forEach(doc => {
            this.state.courses.push(doc.data())
        });

        // console.log(this.state.courses);

        // this.setState({ isSubmitted: true });
        this.setState({ last: last });
        
    }

    render = () => {
        return(
            <div>
                <Navigation
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Course
                    courses={this.state.courses}
                />
                <Paginate 
                    handlePaginate={this.handlePaginate}
                />
            </div>
        )
    }
}


export default Results;