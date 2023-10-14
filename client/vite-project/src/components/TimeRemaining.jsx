import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class TimeRemaining extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        // Set the target date and time here
        const targetDate = new Date('2023-10-12T23:59:59').getTime();

        this.interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = targetDate - now;

            if (timeRemaining <= 0) {
                clearInterval(this.interval);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <div className="time-remaining">
                            {days === 0
                                ? `${hours.toString().padStart(2, '0')}hr:${minutes.toString().padStart(2, '0')}min:${seconds.toString().padStart(2, '0')}sec`
                                : `${days.toString().padStart(2, '0')}d:${hours.toString().padStart(2, '0')}hr:${minutes.toString().padStart(2, '0')}min`
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TimeRemaining;
