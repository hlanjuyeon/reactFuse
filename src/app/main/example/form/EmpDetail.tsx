import '../style.css';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { Button } from "@mui/material";
import { useState } from 'react';
import BasicTab from './Tabs/basicTab';
import FieldTab from './Tabs/fieldTab';
import edit from './formImg/edit.png';
import { useLocation, useOutletContext, useParams } from 'react-router';
import React from 'react';
import { employees } from '../models/empModel';
import { useGetEmpsItemQuery } from '../EmpsApi';
import FuseLoading from '@fuse/core/FuseLoading';


function EmpDetail() {

    const [tabValue, setTabValue] = useState(0);

    const routeParams = useParams();
    const { id: empId } = routeParams as { id: string };

    const {
        data: emp,
        isLoading,
        isError
    } = useGetEmpsItemQuery(empId, {
        skip: !empId
    });

    console.log("emp", emp);

    function handleChangeTab(value: number) {
        setTabValue(value);
    }

    if (isLoading) {
        return <FuseLoading />;
    }

    if (isError || !emp) {
        return <div>Error occurred while loading emp data.</div>;
    }

    return (
        <>
            {/* header */}
            <div
                style={{
                    backgroundColor: '#334155',
                    width: '100%',
                    height: '16rem',
                }}
            />
            {/* detail */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                {/* content center */}
                <div
                    style={{
                        maxWidth: '76.8rem',
                        width: '100%',
                        height: '16rem',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '-6rem',
                    }}
                >

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            paddingLeft: '4.8rem',
                            paddingRight: '4.8rem',
                        }}
                    >
                        {/* img, edit sub-header */}

                        <div
                            style={{
                                maxWidth: '76.8rem',
                                width: '100%',
                                display: 'flex',
                            }}
                        >
                            <img
                                style={{
                                    borderWidth: 4,
                                    borderStyle: 'solid',
                                    borderRadius: '50%',
                                    width: '12.8rem',
                                    height: '12.8rem',
                                    borderColor: 'background.paper',
                                    backgroundColor: 'background.default',
                                    color: 'text.secondary'
                                }}

                                src={emp.img}
                            />
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                component={NavLinkAdapter}
                                to="edit"
                                sx={{
                                    border: '1px solid rgba(0, 0, 0, 0.1)',
                                    backgroundColor: 'background.default',
                                    width: '10rem',
                                }}
                            >
                                <img src={edit}
                                    style={{
                                        width: '25px',
                                        height: '25px',
                                        marginRight: '10px',
                                    }}
                                />
                                <span>編集</span>
                            </Button>
                        </div>
                    </div>
                    <div
                        style={{
                            fontWeight: '700',
                            fontSize: '3.2rem',
                            marginTop: '3rem',
                            paddingLeft: '4.8rem',
                            paddingRight: '4.8rem',
                        }}
                    >
                        {emp.name4} &nbsp; &#40;{emp.name2}&#41;
                    </div>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
                            marginTop: '1rem',
                            fontWeight: '700',
                        }}
                    >
                        <button
                            className="btn_ani"
                            onClick={() => handleChangeTab(0)}
                            style={{
                                width: '10rem',
                                padding: '1rem',
                            }}
                        >
                            基本情報
                        </button>
                        <button
                            className="btn_ani"
                            onClick={() => handleChangeTab(1)}
                            style={{
                                width: '10rem',
                                padding: '1rem',
                            }}
                        >
                            現場情報
                        </button>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1rem',
                            marginTop: '1rem',
                        }}
                    >

                        {tabValue === 0 && <BasicTab emp={emp} />}
                        {tabValue === 1 && <FieldTab emp={emp} />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpDetail;