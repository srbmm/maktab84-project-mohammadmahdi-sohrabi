import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    render() {
        if (this.state.hasError || this.props.isError) {
            return <h3 className="bg-red-100 text-red-600 rounded p-2">مشکلی پیش آمده است</h3>
        }
        return this.props.children
    }
}
export {ErrorBoundary}