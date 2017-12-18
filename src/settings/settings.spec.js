import React from 'react';

import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import Settings from './settings';
import { Main, Button } from './settings.styled';

import settings from './fixture';

describe('Settings', () => {
    describe('rendering', () => {
        it('should render', () => {
            // Arrange
            const wrapper = render(
                <Settings onChange={() => null} settings={settings} />
            );

            // Assert
            expect(wrapper.html()).to.not.be.null;
        });
        it('should render 1 Main styled component', () => {
            // Arrange
            const wrapper = shallow(
                <Settings onChange={() => null} settings={settings} />
            );

            // Assert
            expect(wrapper.find(Main).length).to.equal(1);
        });
        it('should render the same amount of Buttons as settings received', () => {
            // Arrange
            const wrapper = shallow(
                <Settings onChange={() => null} settings={settings} />
            );

            // Assert
            expect(wrapper.find(Button).length).to.equal(
                Object.keys(settings).length
            );
        });
    });
});
