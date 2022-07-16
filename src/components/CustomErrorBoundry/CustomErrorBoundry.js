import React from 'react';

class CustomErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error) {
        console.log('Error from ComponentDidCatch: ', error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center">
                        <p className="fs-3">
                            <span className="text-danger">Opps!</span> something
                            went wrong.
                        </p>
                        <p className="lead">Try to reload page.</p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default CustomErrorBoundry;
