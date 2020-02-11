import React, { Component } from 'react';

import RowItem from './RowItem';


class Row extends Component {
  constructor(props){
      super(props);
      this.state = {
          error : null,
          isLoaded : false,
          active: false
      };
  }

  componentDidMount(){

    this.setState({
        isLoaded : true,

    });
  }
  render() {
      const {error, isLoaded} = this.state;
      let items = this.props.vars;
      
      if(error){
          return <div>Error in loading</div>
      }else if (!isLoaded) {
          return <div>Loading ...</div>
      }else{

          return(
            <div className="row">
                <h1 className="row__heading">{this.props.rowTitle}</h1>
                <div className="row__container">
                {items.map(item => (
                    <RowItem key={item} data={item}></RowItem>
                    
                ))
                }
                </div>

                {/* {projectItems.map(projectItem => (
                    <ProjectItem key={projectItem} data={projectItem}></ProjectItem>
                ))} */}
              
            </div>
          );



      }

  }
}

export default Row;