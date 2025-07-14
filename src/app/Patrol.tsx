import Card from "react-bootstrap/Card";

type patrolProps = {
    name: string;
    description: string;
}

export default function Patrol(props: patrolProps) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Title>{props.name}</Card.Title>
        <Card.Body>{props.description}</Card.Body>
    </Card>
    )
}