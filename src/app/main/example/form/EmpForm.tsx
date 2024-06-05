import '../style.css';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { Button, FormLabel, InputAdornment, InputLabel, Select, TextField } from "@mui/material";
import { useState } from 'react';
import BasicTab from './Tabs/basicTab';
import FieldTab from './Tabs/fieldTab';
import edit from './formImg/edit.png';
import { useLocation, useOutletContext, useParams } from 'react-router';
import React from 'react';
import { employees } from '../models/empModel';
import { Emp, useGetEmpsItemQuery } from '../EmpsApi';
import FuseLoading from '@fuse/core/FuseLoading';
import { Controller, useForm } from 'react-hook-form';
import { FormEncType } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import empName from './formImg/empName.png';
import empEmail from './formImg/empEmail.png';
import empField from './formImg/empField.png';
import positionImg from './formImg/positionImg.png';
import employmentDate from './formImg/employmentDate.png';

type FormType = Emp;

const schema = z.object({
    img: z.string().optional(),
    name1: z.string().min(1, { message: 'Name is required' }),
    name2: z.string().min(1, { message: 'Name is required' }),
    name3: z.string().min(1, { message: 'Name is required' }),
    name4: z.string().min(1, { message: 'Name is required' }),
    position: z.string().optional(),
    employmentDate: z.string().optional(),
    workingYear: z.string().optional(),
    email: z.string().optional(),
    isField: z.string().optional(),
    fieldName: z.string().optional(),
});

function EmpForm() {

    const { control, watch, reset, handleSubmit, formState } = useForm<FormType>({
        mode: 'all',
        resolver: zodResolver(schema)
    });

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
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
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

                            />
                        </div>
                    </div>
                    <div
                        style={{
                            maxWidth: '76.8rem',
                            width: '100%',
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: 'center',
                            paddingLeft: '4.8rem',
                            paddingRight: '4.8rem',
                        }}
                    >
                        <div
                            style={{
                                marginTop: '3rem',
                                marginBottom: '3rem',
                            }}
                        >
                            <Controller
                                control={control}
                                name="name1"
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Name(漢字)"
                                        placeholder="永野　芽郁"
                                        id="name1"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <img
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        marginRight: '1rem',
                                                    }}
                                                    src={empName}
                                                />
                                            )
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <Controller
                                control={control}
                                name="name2"
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Name(カタカナ)"
                                        placeholder="ナガイ　メイ"
                                        id="name2"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <img
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        marginRight: '1rem',
                                                    }}
                                                    src={empName}
                                                />)
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <Controller
                                control={control}
                                name="name3"
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Name(English)"
                                        placeholder="Nagano Mei"
                                        id="name3"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <img
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        marginRight: '1rem',
                                                    }}
                                                    src={empName}
                                                />)
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div
                            style={{

                                marginBottom: '3rem',
                            }}
                        >
                            <Controller
                                control={control}
                                name="name4"
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Name(한글)"
                                        placeholder="나가노 메이"
                                        id="name4"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <img
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        marginRight: '1rem',
                                                    }}
                                                    src={empName}
                                                />)
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-label" >
                                    Position
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="position"
                                    startAdornment={(
                                        <InputAdornment position="start">
                                            <img
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                    marginRight: '1rem',
                                                }}
                                                src={positionImg}
                                            />
                                        </InputAdornment>
                                    )}
                                >
                                    <MenuItem value="President">社長</MenuItem>
                                    <MenuItem value="Director">取締役</MenuItem>
                                    <MenuItem value="DevisionDirector">本部長</MenuItem>
                                    <MenuItem value="GeneralDirector">部長</MenuItem>
                                    <MenuItem value="DeputyGeneralDirector">次長</MenuItem>
                                    <MenuItem value="Manager">課長</MenuItem>
                                    <MenuItem value="AssistantManager">主任</MenuItem>
                                    <MenuItem value="Staff">社員</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <DatePicker
                                label="EmploymentDate"
                            />
                        </div>
                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <Controller
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="email"
                                        placeholder="Email"
                                        id="email"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <img
                                                    style={{
                                                        width: '25px',
                                                        height: '25px',
                                                        marginRight: '1rem',
                                                    }}
                                                    src={empEmail}
                                                />)
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <div
                            style={{
                                marginBottom: '3rem',
                            }}
                        >
                            <FormControl
                                fullWidth
                                variant="outlined"
                            >
                                <FormLabel
                                    component="legend"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '25px',
                                            height: '25px',
                                            marginRight: '1rem',
                                        }}
                                        src={empField}
                                    />
                                    Place of Work
                                </FormLabel>
                                <FormGroup>
                                    <div
                                        style={{
                                            width: '20%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox name="headquarters" defaultChecked />
                                            }
                                            label="本社"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            width: '70%',
                                            display: 'flex',
                                            flexDirection: 'row'

                                        }}
                                    >
                                        <FormControlLabel
                                            control={
                                                <>
                                                    <Checkbox
                                                        name="field "
                                                    />

                                                </>
                                            }
                                            label="現場"
                                            sx={{
                                                width: '30%',
                                            }}
                                        />

                                        <Controller
                                            control={control}
                                            name="fieldName"
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="FieldName"
                                                    placeholder="FieldName"
                                                    id="fieldName"
                                                    variant="outlined"
                                                    fullWidth
                                                />
                                            )}
                                        />
                                    </div>
                                </FormGroup>

                            </FormControl>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EmpForm;