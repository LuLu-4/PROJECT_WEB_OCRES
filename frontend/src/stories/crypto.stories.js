import Crypto from '../page/Crypto/Crypto.js';

export default {
    title: 'Widget/Crypto',
    component: Crypto,
}

const Template = (args) => {return(<Crypto/>)}

export const Default = Template.bind({});
Default.args = {
  };