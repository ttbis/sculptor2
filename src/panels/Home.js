import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Panel, 
	  	 PanelHeader, 
		 Div,
		 Group } from '@vkontakte/vkui';
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
