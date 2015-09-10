import React, { Component, PropTypes } from 'react';
import shallowEqual from 'react/lib/shallowEqual';

export default class Region extends Component {

    static propTypes = {
        region: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.array]).isRequired,
        types: PropTypes.object.isRequired,
        children: PropTypes.func,
        className: PropTypes.string
    }

    static defaultProps = {
        className: ''
    }

    constructor(...args) {
        super(...args);

        this.renderItem = ::this.renderItem;
    }

    shouldComponentUpdate(nextProps) {
        return !shallowEqual(this.props.children, nextProps.children) || !shallowEqual(this.props.region, nextProps.region);
    }

    renderItem(item, i = 0) {
        if (typeof item === 'object' && item.type) {
            let children;
            const RegisteredComponent = this.props.types[item.type] ? this.props.types[item.type] : item.type;

            if (item.props && item.props.children) {
                children = Array.isArray(item.props.children) ? item.props.children.map(this.renderItem) : this.renderItem(item.props.children);
            }

            return <RegisteredComponent key={ i } { ...(item.props || {}) } children={ children }/>;
        }
        else {
            return item;
        }
    }

    render() {
        let content;

        if (typeof this.props.children === 'function') {
            content = this.props.children(this.props.region);
        }
        else if (Array.isArray(this.props.region)) {
            content = this.props.region.map(this.renderItem);
        }
        else if (this.props.region) {
            content = this.renderItem(this.props.region);
        }

        return (
            <div className={ this.props.className }>
                { content }
            </div>
        );
    }

}
