import React, { Component } from 'react'
import {getDesigner} from '../utils/requests'

class DesignerShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designer: []
      // styles: [],
      // comments: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    getDesigner(id)
      .then(designer => this.setState({ designer: designer }))
    // getStyles()
    //   .then(styles => this.setState({ styles }))
    //   .catch(error => console.log({ error }))
    // getComments()
    //   .then(comments => this.setState({ comments }))
    //   .catch(error => console.log({ error }))
  }

  render() {
    let designer = this.state.designer
    return (
      <div className="designer-show">
        <h3>{ designer.company }</h3>
        {/* <DesignerStyles /> */}
        {/* <DesignerComments /> */}
      </div>
    )
  }
}

export default DesignerShow;