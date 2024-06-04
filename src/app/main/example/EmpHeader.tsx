import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		[theme.breakpoints.up('sm')]: {
			'&:focus': {
				borderRadius: '30px',
				borderWidth: '3px',
				boxShadow: '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
			},
		},
	},
}));

function EmpHeader( { employees } ) {

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20px',
                    paddingBottom: '20px'
                }}
            >

                <div className="search"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        verticalAlign: 'middle',
                        alignItems: 'center',
                        width: '50%',
                        float: 'left',
                    }}
                >
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            verticalAlign: 'middle',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
						<Search
							style={{
								width: '60%',
							}}
						>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search by name or employee number"
								inputProps={{ 'aria-label': 'search' }}
								style={{
									border: '1px solid rgba(0,0,0,0.07)',
									borderRadius: '30px',
									borderWidth: '3px',
								}}
							/>
						</Search>
                        <div
                            style={{
                                fontWeight: 'bold',
                                width: '10%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {employees.length} / {employees.length} 名
                        </div>
                        <Button
                            variant="contained"
                            style={{
                                width: '20%',
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: '#4F46E5',
                                color: 'white',
                            }}
                        >
                            + Add
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmpHeader;