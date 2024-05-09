import React, { Component } from "react";
import Error404 from "../error/Error404";

interface Props {
    dirname: string;
    filename: string;
}

interface State {
    Component?: React.ComponentType<any>;
}

class LoadComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Component: Error404,
        };
        this._load();
    }

    async _load() {
        const { dirname, filename } = this.props;
        const module = await import(`../learn/${dirname}/${ (filename.charAt(0).toUpperCase() + filename.slice(1)) }`);
        
        if(module && module.default) this.setState({ Component: module.default });
    }

    render(): React.ReactNode {
        const { Component } = this.state;
        return Component ? React.createElement(Component) : null;
    }
}



export default LoadComponent;