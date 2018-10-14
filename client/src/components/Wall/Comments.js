import React from 'react';
import { Header, Container } from 'semantic-ui-react';

class Comments extends React.Component {
    render() {
        return (
            <Container className='comments-container'>
                <div></div> {/* spacer */}
                <Header className='comments-header' textAlign='left'> COMMENTS</Header>
            </Container>
        )
    }
}

export default Comments;