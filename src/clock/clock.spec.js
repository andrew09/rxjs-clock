import React from 'react';

import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import moment from 'moment';
import { Observable } from 'rxjs';

import Clock from './clock';
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

import settings from '../settings/fixture';
import settingsReversed from '../settings/fixture-reversed';

describe('Clock', () => {
    describe('rendering', () => {
        const date = moment().local();

        it('should render null if the date has not been set in state yet', () => {
            // Arrange
            const wrapper = render(<Clock settings={settings} />);

            // Assert
            expect(wrapper.html()).to.be.null;
        });
        it('should render once the date has been added to state', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Act
            wrapper.setState({ date });

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });
        it('should render 1 Main styled component', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Act
            wrapper.setState({ date });

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });
        describe('DateWrapper', () => {
            it('should render', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(DateWrapper).length).to.equal(1);
            });
            it('should render 1 DayOfWeek styled component', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(DayOfWeek).length).to.equal(1);
            });
            it('should render 1 Month styled component', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(Month).length).to.equal(1);
            });
            it('should render 1 DayOfMonth styled component', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(DayOfMonth).length).to.equal(1);
            });
        });
        describe('TimeWrapper', () => {
            it('should render', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(TimeWrapper).length).to.equal(1);
            });
            it('should render 1 Time styled component', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(Time).length).to.equal(1);
            });
            it('should render 1 AmPm styled component', () => {
                // Arrange
                const wrapper = shallow(<Clock settings={settings} />);

                // Act
                wrapper.setState({ date });

                // Assert
                expect(wrapper.find(AmPm).length).to.equal(1);
            });
        });
    });
    describe('lifecycle', () => {
        it('should subscribe to observable timer on mount', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);
            const timer$ = wrapper.instance().timer$;

            // Assert
            expect(timer$).to.be.an.instanceof(Observable);
        });
        it('should call startTime on mount', () => {
            // Arrange
            const startTime = spy(Clock.prototype, 'startTime');

            // Act
            shallow(<Clock settings={settings} />);

            // Assert
            expect(startTime.calledOnce).to.be.true;
        });
    });
    describe('startTime', () => {
        it('should be a function', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Assert
            expect(wrapper.instance().startTime).to.be.a('function');
        });
    });
    describe('formatDate', () => {
        const date = moment().local();

        it('should be a function', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Assert
            expect(wrapper.instance().formatDate).to.be.a('function');
        });
        it('with default settings, should return an object with the correct format', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Act
            wrapper.setState({ date });
            const response = wrapper.instance().formatDate();

            // Assert
            expect(response).to.be.an('object');
            expect(response.dayOfWeek).to.equal(date.format(`dddd`));
            expect(response.month).to.equal(date.format(`MMMM`));
            expect(response.dayOfMonth).to.equal(date.format(`Do`));
            expect(response.time).to.equal(date.format(`h:mm`));
            expect(response.apPm).to.equal(date.format(`a`));
        });
        it('with settings reversed, should return an object with the correct format', () => {
            // Arrange
            const wrapper = shallow(<Clock settings={settings} />);

            // Act
            wrapper.setState({ date });
            wrapper.setProps({ settings: settingsReversed });
            const response = wrapper.instance().formatDate();

            // Assert
            expect(response).to.be.an('object');
            expect(response.dayOfWeek).to.equal(date.format(`ddd`));
            expect(response.month).to.equal(date.format(`MMM`));
            expect(response.dayOfMonth).to.equal(date.format(`Do`));
            expect(response.time).to.equal(date.format(`h:mm:ss`));
            expect(response.apPm).to.equal(date.format(`a`));
        });
    });
});
