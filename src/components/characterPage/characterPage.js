import React, {Component} from 'react';
import { Col,Row,Container} from 'reactstrap';
import ItemList from '../itemList';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import CharDetails from '../charDetails';


export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
           <Row>
                <Col md='6'>
                    <ItemList
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}/>
                </Col>
                <Col md='6'>
                    <CharDetails charId={this.state.selectedChar}/>
                </Col>
            </Row>
        );
    }
}
