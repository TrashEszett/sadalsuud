import React from 'react';
import MainLogo from "./MainLogo";
import renderer from 'react-test-renderer'

test('MainLogo create', ()=>{
   const component = renderer.create(<MainLogo userName="Tracy"/>);
   let tree = component.toJSON();
   expect(tree).toMatchSnapshot();
});
