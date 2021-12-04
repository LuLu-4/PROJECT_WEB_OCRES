import Nasa from '../page/Nasa/Nasa.js';

export default {
    title: 'Widget/Nasa',
    component: Nasa,
}

const Template = (args) => {return(<Nasa/>)}

export const Default = Template.bind({});
Default.args = {
  };