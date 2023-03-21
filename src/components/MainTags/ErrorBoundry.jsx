import {Component} from 'react';
import {MainTheme} from "@/components";

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
        if (this.state.hasError) {
            return <MainTheme err={true}><h3 className="bg-red-100 text-red-600 rounded p-2">مشکلی پیش آمده است</h3></MainTheme>
        }
        return this.props.children
    }
}
export {ErrorBoundary}