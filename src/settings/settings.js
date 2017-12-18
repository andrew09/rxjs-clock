import React from 'react';
import PropTypes from 'prop-types';

import { Main, Button } from './settings.styled';

const Settings = ({ onChange, settings }) => {
    const settingNames = Object.keys(settings);
    const settingObjs = Object.values(settings);

    return (
        <Main>
            {settingNames.map((setting, index) => {
                const { value, label } = settingObjs[index];

                return (
                    <Button
                        onClick={() => onChange(setting, !value)}
                        key={setting}
                    >
                        {label[value]}
                    </Button>
                );
            })}
        </Main>
    );
};

Settings.propTypes = {
    onChange: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
};

export default Settings;
