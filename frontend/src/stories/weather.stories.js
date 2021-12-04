import Weather from '../page/Weather/Weather.js';

export default {
    title: 'Widget/Weather',
    component: Weather,
}

const Template = (args) => {return(<Weather/>)}

export const Default = Template.bind({});
Default.args = {
  };