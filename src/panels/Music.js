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

const Music = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Музыка
		</PanelHeader>
		<Div>
			<form action="https://vk.com/music/playlist/226797314_22">
			    <button id="smth" type="submit">Плавная</button>
			</form>
		</Div>
		<Div>
			<form action="https://vk.com/music/playlist/226797314_23">
			    <button id="enrgtc" type="submit">Энергичная</button>
			</form>
		</Div>
		<Div>
			<form action="https://vk.com/music/playlist/226797314_24">
			    <button id="angr" type="submit">Агрессивная</button>
			</form>
		</Div>
	</Panel>
);

Music.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Music;
