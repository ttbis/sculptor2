import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

import Training from './panels/Training';
import Lvl1 from './panels/levels/lvl1';
import Lvl2 from './panels/levels/lvl2';
import Lvl3 from './panels/levels/lvl3';

import Food from './panels/Food';
import Calc from './panels/foods/Calc';
import Diet from './panels/foods/Diet';

import Music from './panels/Music';

import Sportsfood from './panels/Sportsfood';
import Profile from './panels/Profile';

const App = () => {
 const [activePanel, setActivePanel] = useState('home');
 const [fetchedUser, setUser] = useState(null);
 const [popout, setPopout] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Profile id='profile' fetchedUser={fetchedUser} go={go} />
			<Training id='training' go={go} />
			<Food id='food' go={go} />
			<Music id='music' go={go} />
			<Sportsfood id='sportsfood' go={go} />
			<Lvl1 id='lvl1' go={go} />
			<Lvl2 id='lvl2' go={go} />
			<Lvl3 id='lvl3' go={go} />
			<Calc id='calc' go={go} />
			<Diet id='diet' go={go} />
		</View>
	);
}

export default App;

