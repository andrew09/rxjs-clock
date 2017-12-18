import React from 'react';
import PropTypes from 'prop-types';

import { Observable } from 'rxjs';
import moment from 'moment';

import {
    Main,
    DateWrapper,
    DayOfWeek,
    Month,
    DayOfMonth,
    TimeWrapper,
    Time,
    AmPm,
} from './clock.styled';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { date: '' };
    }

    static propTypes = {
        settings: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.timer$ = Observable.timer(0, 1000).map(() => moment().local());
        this.startTime();
    }

    startTime() {
        this.timer$.subscribe(date =>
            this.setState({
                date,
            })
        );
    }

    formatDate() {
        const { date } = this.state;
        const { longWeek, longMonth, showSeconds } = this.props.settings;

        return {
            dayOfWeek: date.format(`ddd${longWeek.value ? 'd' : ''}`),
            month: date.format(`MMM${longMonth.value ? 'M' : ''}`),
            dayOfMonth: date.format(`Do`),
            time: date.format(`h:mm${showSeconds.value ? ':ss' : ''}`),
            apPm: date.format(`a`),
        };
    }

    render() {
        if (!this.state.date) return null;

        const { dayOfWeek, month, dayOfMonth, time, apPm } = this.formatDate();

        return (
            <Main>
                <DateWrapper>
                    <DayOfWeek>{`${dayOfWeek},`}</DayOfWeek>
                    <Month>{`${month} `}</Month>
                    <DayOfMonth>{dayOfMonth}</DayOfMonth>
                </DateWrapper>
                <TimeWrapper>
                    <Time>{time}</Time>
                    <AmPm>{apPm}</AmPm>
                </TimeWrapper>
            </Main>
        );
    }
}
