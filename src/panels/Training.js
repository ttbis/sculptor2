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

const Training = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Тренировки
		</PanelHeader>
		<Div>
			<button id="nb" onClick={props.go} data-to="lvl1">Новичок</button>
		</Div>
		<Div>
			<button id="skll" onClick={props.go} data-to="lvl2">Опытный</button>
		</Div>
		<Div>
			<button id="mstr" onClick={props.go} data-to="lvl3">Мастер</button>
		</Div>
	</Panel>
);

Training.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Training;