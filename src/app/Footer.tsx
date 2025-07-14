import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

export default function Footer() {
    return (
        <Container>
            <Button
                variant="primary"
                href="tel:+1-217-429-2326">
                Call at (217) 429-2326
            </Button>
            <Button
                href="mailto:thomasthetuba@gmail.com"
                variant="primary"
            >
                Email at thomasthetuba@gmail.com
            </Button>
        </Container>
    )
}