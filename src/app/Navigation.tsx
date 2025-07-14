import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Component } from "preact";

export default class Navigation extends Component {
  state = { time: Date.now() };
  timer = setInterval(() => { }, 100000);

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 500);
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }
  render() {
    let timeDate = new Date(this.state.time);
    let time = `${(timeDate.getHours() % 12).toString()}:
    ${String(timeDate
      .getMinutes()).
        padStart(2, "0")
      }:
      ${String(
        timeDate.getSeconds())
        .padStart(2, "0")}`
        .replace(/\s+/g, "")
        ;
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Troop 6134</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Text><a
            className="icon-link"
            href="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FChicago&mode=AGENDA&title=Troop%206134%20Calendar&showCalendars=0&showTz=0&showTitle=0&src=NTdhMzFiNWZiZjBhOWM3ODVmMDExZjliNDA2Y2E1YzRkNTJjY2MxMzY2NTRiNGE2ODUyMzkzZWEwYmU5MmU2YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33"
            target="_blank"
            rel="noopener noreferrer"
            >
            Calendar
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
            </svg>
          </a></Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>{time}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
