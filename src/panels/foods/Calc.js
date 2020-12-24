import React from 'react';
import PropTypes from 'prop-types';
import { platform, 
		 IOS, 
		 Panel, 
	  	 PanelHeader, 
		 PanelHeaderButton,  
		 Div,
		 FormLayout,
		 Select,
		 Input,
		 FormLayoutGroup } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Calc = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="food">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Калькулятор
		</PanelHeader>
		<FormLayout>
	      <Select top="Пол" placeholder="Выберите пол">
	        <option value="male">Мужской</option>
	        <option value="female">Женский</option>
	      </Select>
	      <Select top="Уровень активности" placeholder="Выберите уровень активности">
	        <option value="0">Сидячий</option>
	        <option value="1">Низкий</option>
	        <option value="2">Средний</option>
	        <option value="3">Высокий</option>
	      </Select>
	      <Select top="Желаемый результат" placeholder="Выберите желаемый результат">
	        <option value="pohudenie">Похудение</option>
	        <option value="podderjka">Поддержка формы</option>
	        <option value="nabor">Набор мышечной массы</option>
	      </Select>
	      <FormLayoutGroup top="Возраст">
	    	<Input type="number" min="10" step="1" placeholder="Введите возраст"/>
	      </FormLayoutGroup>
	      <FormLayoutGroup top="Вес">
	    	<Input type="number" min="25" step="1" placeholder="Введите вес"/>
	      </FormLayoutGroup>
	      <FormLayoutGroup top="Рост">
	    	<Input type="number" min="50" step="1" placeholder="Введите рост"/>
	      </FormLayoutGroup>
	    </FormLayout>
	</Panel>
);

Calc.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Calc;
