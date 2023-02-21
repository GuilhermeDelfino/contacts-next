import React from 'react';
import {render, screen} from '@testing-library/react'
it(`should be render `, ()=>{
    render(<div>test</div>);

    expect(screen.getByText('test')).toBeInTheDocument()
})