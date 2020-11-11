import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import button from '../modules/button.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Sculptor</PanelHeader>
		<Group title="Navigation">
			<Div>
				<button id="prfl" onClick={go} data-to="profile">ПРОФИЛЬ</button>
			</Div>
			<Div>
				<button id="trnng" onClick={go} data-to="training">ТРЕНИРОВКИ</button>
			</Div>
			<Div>
				<button id="fd" onClick={go} data-to="food">ПИТАНИЕ</button>
			</Div>
			<Div>
				<button id="msc" onClick={go} data-to="music">МУЗЫКА</button>
			</Div>
			<Div>
				<button id="sprtfd" onClick={go} data-to="sportsfood">СПОРТПИТАНИЕ</button>
			</Div>
			
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
