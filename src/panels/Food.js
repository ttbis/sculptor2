import React from 'react';
import PropTypes from 'prop-types';
import { platform, 
		 IOS,
		 Panel, 
	  	 PanelHeader, 
		 PanelHeaderButton,
		 Div } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import button from '../modules/button.css';

const osName = platform();

const Food = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Питание
		</PanelHeader>
		<Div>
			<button id="clc" onClick={props.go} data-to="calc">КАЛЬКУЛЯТОР ККАЛ</button>
		</Div>
		<Div>
			<button id="dt" onClick={props.go} data-to="diet">СОСТАВИТЬ РАЦИОН</button>
		</Div>
	</Panel>
);

Food.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Food;
