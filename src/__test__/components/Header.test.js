import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header/>', ()=> {
    test('Render del componente Header', ()=>{
    const header = shallow(
        <ProviderMock>
            <Header/>
        </ProviderMock>
    );
    expect(header.length).toEqual(1);        
});

})

describe('Header Snapshot', ()=>{
    test('Comprobar el snapshot del componente Footer', ()=> {
        const header = create(
        <ProviderMock>
            <Header/>
        </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    })
})