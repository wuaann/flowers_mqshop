import React, {useEffect, useState} from 'react';
import {MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBRadio} from 'mdb-react-ui-kit';
import FlowerApi from "../../api/flowerApi";
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
} from 'mdb-react-ui-kit';

export default function  ProductAdmin() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const [product,setProduct] = useState([]);
    useEffect(() => {
        setProduct([]);
        const fetchFlowers = async () => {
            try {
                const response = await FlowerApi.getAll();
                response.data.forEach((flower) => {
                        setProduct(prevState => [...prevState, flower]);
                })
            } catch (error) {
                console.log('Failed to fetch flower list: ', error);
            }
        }
        fetchFlowers();
    }, []);
    return (
<>
    <MDBBtn onClick={toggleShow}  color={'success'}>create new product</MDBBtn>

        <MDBTable align='middle'>

            <MDBTableHead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Des</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                    product.map((item) => (
                        <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <img
                                        src={item.img}
                                        alt=''
                                        style={{ width: '45px', height: '45px' }}
                                        className='rounded-circle'
                                    />
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>{item.name}</p>
                                        <p className='text-muted mb-0'>{item.price}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='fw-normal mb-1'>{item.des}</p>
                            </td>
                            <td>
                                {
                                    item.category ? <MDBBadge color='success' pill>
                                        Hot
                                    </MDBBadge> : <MDBBadge color='primary' pill>
                                        Normal
                                    </MDBBadge>
                                }
                            </td>

                            <td>
                                <MDBBtn color='link' rounded size='sm'>
                                    Edit
                                </MDBBtn>
                                <MDBBtn color='link' rounded size='sm'>
                                    delete
                                </MDBBtn>
                            </td>
                        </tr>
                    ))
                }
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Modal title</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <form>
                                    <MDBInput className='mb-4'  id='input1' label='name' />
                                    <MDBInput className='mb-4' type={'text'}  id='input2' label='des' />

                                    <MDBInput className='mb-4' type={'number'}  id='input4' label='price' />
                                    <MDBInput className='mb-4' type={'number'}  id='input4' label='img' />
                                    <MDBInput className='mb-4'  id='input5' label='category' />
                                </form>

                            </MDBModalBody>

                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleShow}>
                                    Close
                                </MDBBtn>
                                <MDBBtn>Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>

            </MDBTableBody>
        </MDBTable>
    </>
    );
}