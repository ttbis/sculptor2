import React from 'react';
import PropTypes from 'prop-types';
import { platform, 
		 IOS, 
		 Panel, 
	  	 PanelHeader, 
		 PanelHeaderButton,
		 Div,
		 Group,
		 Cell,
		 Avatar,
		 Alert } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import button from '../modules/button.css';

const osName = platform();

const Profile = props => (
	
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Профиль
		</PanelHeader>
		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={props.fetchedUser.photo_200 ? <Avatar mode="app" size={72} src={props.fetchedUser.photo_200}/> : null}
				description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</Cell>
			</Group>}
	</Panel>
);

Profile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		//bdate: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Profile;
