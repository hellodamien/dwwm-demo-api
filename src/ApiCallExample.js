import React from 'react';

class ApiCallExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: [],
            error: null,
        };
    }

    componentDidMount() {
        console.log('ApiDemo: componentDidMount');
        this.callApi();
    }

    callApi() {
        this.setState({
            loading: true,
            items: [],
            error: null,
        });

        fetch("https://api.publicapis.org/entries")
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

    render() {
        return (
            <div>
                <h3>Api Demo</h3>
                <button onClick={this.callApi.bind(this)}>🔁</button>
                {this.state.error && <p>Une erreur s'est produite.</p>}
                {this.state.loading && <p>Chargement ...</p>}
                {this.state.items.length > 0 && (
                    <ul>
                        {this.state.items.map((item) => (
                            <li>
                                {item.API}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    } 
}

export default ApiCallExample;