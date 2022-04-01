import React from 'react';
import SchoolItem from './SchoolItem';

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
            schools: []
        }
    }

    componentDidMount() {
        this.callApi();
    }

    callApi() {
        this.setState({
            loading: true,
            items: [],
            error: null,
        });

        fetch("https://api.jai20enmaths.com/v1/organization/sso-portals")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loading: false,
                    items: result.entries
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    loading: false,
                    error
                });
            }
        )
    }

    render() {
        return (
            <ul>
                {this.state.schools.map((school) => (
                    <SchoolItem key={school.slug} school={school}/>
                ))}
            </ul>
        )
       
    }
}

export default SchoolList;