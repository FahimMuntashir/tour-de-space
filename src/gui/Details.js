import React from 'react';
import Style from '../resources/css/detail.module.css';
import Button from './Button';

export default
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }  
    
    render() {
        

      
        let planetText = this.props.planetText;
        let commonText = this.props.commonText;

        let detailsClass = Style.detailsFrame;
        if(this.props.selectedDetail !== null){
            detailsClass += ' ' + Style.detailsFrameVisible;
        }

        let planetIcon = [Style.iconGradient, Style.detailSymbol, Style["icon-" + this.props.selectedDetail]].join(' ');

        let distanceItem = null;
        if(planetText.distance){
            distanceItem = <li><span>{commonText.distance}</span>: <span dangerouslySetInnerHTML={{__html: planetText.distance}}></span></li>;
        }
        let satelitesItem = null;
        if(planetText.satelites){
            satelitesItem = <li><span>{commonText.satelites}</span>: <span dangerouslySetInnerHTML={{__html: planetText.satelites}}></span></li>;
        }

        return <div className={detailsClass}>
            <span>
            <div className={Style.detailsTitle}>
            <span className={Style.titleGradient}>{planetText.title}</span>

            <span className={Style.titleGradient}>.......</span>
            
            </div></span><br/><br/>
            
            <div className={Style.detailsDescription}><span dangerouslySetInnerHTML={{__html: planetText.description}}></span></div>
            <ul className={[Style.detailsList, Style.detailsListLeft].join(' ')}>
                {distanceItem}
                <li><span>{commonText.radius}</span>: <span dangerouslySetInnerHTML={{__html: planetText.radius}}></span></li>
                <li><span>{commonText.mass}</span>: <span dangerouslySetInnerHTML={{__html: planetText.mass}}></span></li>  
                <li><span>{commonText.density}</span>: <span dangerouslySetInnerHTML={{__html: planetText.density}}></span></li>  
                <li><Button
          name="all"
          title="Try the Game"
          selectedDetail={this.state.selectedDetail}
          clickHandler={this.handleButtonClick}
        /></li>
            </ul>
            <ul className={[Style.detailsList, Style.detailsListRight].join(' ')}>
                <li><span>{commonText.period}</span>: <span dangerouslySetInnerHTML={{__html: planetText.period}}></span></li>
                {satelitesItem}      
                <li><span>{commonText.rings}</span>: <span dangerouslySetInnerHTML={{__html: planetText.rings}}></span></li>  
               
            </ul>            
        </div>;
    }
}