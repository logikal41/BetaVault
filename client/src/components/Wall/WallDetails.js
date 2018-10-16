import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Header, Button, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { deleteWall } from '../../actions/walls';
import MesaArch from '../../images/mesa arch.jpg';

class WallDetails extends Component {

      renderNavLinks = () => {
          const { activeSelection: {area_id}, area_name, vault_id, vault_name } = this.props;

          return (
            <Container>
                <Link className='nav-text-color' to={`/vault/${vault_id}`}>
                    {vault_name} >  </Link>
                <Link className='nav-text-color-selected' to={`/area/${area_id}`}>
                    {area_name} </Link>
            </Container>
          )
      }

      render() {
        const { dispatch, history, activeSelection } = this.props;

        if ( !activeSelection ) {
            return (
                <Container className='comments-container'>
                    <Segment basic> 
                        <Dimmer active inverted>
                            <Loader>loading wall details...</Loader>
                        </Dimmer>
                    </Segment>
                </Container>
            )
        }

        return (
            <Container className='comments-container'>

                <Header className='details-header'> {activeSelection.name} 
                    <Button floated='right' negative 
                        onClick={() => dispatch(deleteWall(activeSelection.id, () => history.push(`/area/${activeSelection.area_id}`)))}> 
                        Delete 
                    </Button>
                    <Button floated='right' basic={true} color='black' 
                        onClick={() => history.push(`/wall/update/${activeSelection.id}`)}>
                        Update
                    </Button>
                </Header>
                
                <Container className='black-container'>
                    {this.renderNavLinks()}
                </Container>

                <div>
                    <Image centered={true} src={MesaArch} />
                </div>
                
                <Header className='description-header'>DESCRIPTION</Header>
                <Header className='description-body'>{activeSelection.description} </Header>
            </Container>
            
        )
    }
}

const mapStateToProps = ({ activeSelection }) => {
    return { activeSelection }
}

export default withRouter(connect(mapStateToProps)(WallDetails));