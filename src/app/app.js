import React from 'react';

import { Clock, Settings } from '../';
import { Main } from './app.styled.js';
import settings from '../settings/fixture';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { settings };

        this.onSettingChange = this.onSettingChange.bind(this);
    }

    onSettingChange(setting, value) {
        const settings = { ...this.state.settings };

        settings[setting].value = value;
        this.setState({ settings });
    }

    render() {
        const { settings } = this.state;

        return (
            <Main>
                <Clock settings={settings} />
                <Settings onChange={this.onSettingChange} settings={settings} />
            </Main>
        );
    }
}
