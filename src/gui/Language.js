import React from 'react';
import Style from '../resources/css/language.module.css';

export default
class Language extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    click = (lang) => {
        this.props.clickHandler(lang);
    };
    render() {
        return <div className={Style.languageFrame}>
        </div>;

    }
}