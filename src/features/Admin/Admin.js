import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
} from 'mdb-react-ui-kit';
import ProductAdmin from "./ProductAdmin";

export default function App() {
    const [basicActive, setBasicActive] = useState('product');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <MDBTabs className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('product')} active={basicActive === 'product'}>
                        Product
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('order')} active={basicActive === 'order'}>
                        Order
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('user')} active={basicActive === 'user'}>
                       User
                    </MDBTabsLink>
                </MDBTabsItem>

            </MDBTabs>


            <MDBTabsContent>
                <MDBTabsPane show={basicActive === 'product'}><ProductAdmin/></MDBTabsPane>
                <MDBTabsPane show={basicActive === 'order'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane show={basicActive === 'user'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>

        </>
    );
}