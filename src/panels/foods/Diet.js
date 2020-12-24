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

const Diet = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="food">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Днейной рацион
		</PanelHeader>
	</Panel>
);

Diet.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Diet;
