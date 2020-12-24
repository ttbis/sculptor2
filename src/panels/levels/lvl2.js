import React from 'react';
import PropTypes from 'prop-types';
import { platform, 
		 IOS, 
		 Panel, 
	  	 PanelHeader, 
		 PanelHeaderButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Lvl2 = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="training">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Опытный
		</PanelHeader>
	</Panel>
);

Lvl2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Lvl2;
