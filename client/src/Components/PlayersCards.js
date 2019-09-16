import React from 'react';
import { Card } from 'semantic-ui-react';


const PlayersCards = (props) => (

<Card>
    <Card.Content>
        <Card.Header> Name: {props.players.name} </Card.Header>
        <Card.Meta> Searches: {props.players.searches} </Card.Meta>
        <Card.Description> Country: {props.players.country} </Card.Description>
    </Card.Content>
</Card>
)

export default PlayersCards