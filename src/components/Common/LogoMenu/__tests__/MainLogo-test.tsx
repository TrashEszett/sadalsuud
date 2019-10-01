import React from 'react';
import {cleanup, render} from '@testing-library/react';
import MainLogo from "../MainLogo";

//자동으로 테스트 후 DomElement를 지워줌.
afterEach(cleanup);

it('when create', () => {
    const {queryByText} = render(
        <MainLogo userName={"Tracy"} />,
    );
    expect(queryByText(/Tracy/i)).toBeTruthy();
});
