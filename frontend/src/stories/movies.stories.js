import Movies from '../page/Movies/Movies.js';

export default {
    title: 'Widget/Movies',
    component: Movies,
}

const Template = (args) => {return(<Movies/>)}

export const Default = Template.bind({});
Default.args = {
  };