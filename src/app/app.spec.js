import React from 'react';

import { render, shallow } from 'enzyme';
import { expect } from 'chai';

import App from './app';
import { Main } from './app.styled';
import Clock from '../clock/clock';
import Settings from '../settings/settings';
import settings from '../settings/fixture';

describe('App', () => {
    describe('rendering', () => {
        it('should render', () => {
            // Arrange
            const wrapper = render(<App />);

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });
        it('should render 1 Main styled component', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });
        it('should render 1 Clock component', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.find(Clock).length).to.equal(1);
        });
        it('should render 1 Settings component', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.find(Settings).length).to.equal(1);
        });
    });
    describe('state', () => {
        it('should have a default state of the settings fixture', () => {
            // Arrange
            const wrapper = shallow(<App />);

            // Assert
            expect(wrapper.state()).to.deep.equal({ settings });
        });
    });
    describe('onSettingChange', () => {
        it('should be a function with arity of 2', () => {
            // Arrange
            const wrapper = shallow(<App />);
            const instance = wrapper.instance();

            // Assert
            expect(instance.onSettingChange).to.be.a('function');
            expect(instance.onSettingChange.length).to.equal(2);
        });
        it('should change the state of settings based on given values', () => {
            // Arrange
            const wrapper = shallow(<App />);
            const instance = wrapper.instance();
            const setting = 'longWeek';
            const initialSettingValue = settings[setting].value;

            // Act
            instance.onSettingChange(setting, !initialSettingValue);

            // Assert
            expect(wrapper.state().settings[setting].value).to.be[
                !initialSettingValue
            ];
        });
    });
});
