import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { ListItemButton, ListItemText } from '@mui/material';

function EmpListItem(props) {

    const { emp } = props;


    // NavLinkAdapter 흐름 확인
    return (
        <>
            <ListItemButton
                className="flex-row"
                sx={{
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    verticalAlign: 'middle',
                    alignItems: 'center',
                    width: '100%',
                    boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                }}
                component={NavLinkAdapter}
                to={`/emp/${emp.id}`} // 이제 'to' 속성을 사용할 수 있습니다.
            >
                <div className="contet"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        verticalAlign: 'middle',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: '0 2px 0 rgba(0, 0, 0, 0.1)',
                        paddingTop: '6px',
                        paddingBottom: '6px',
                    }}
                >
                    <div
                        style={{
                            width: '5%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={emp.img}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.id}
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 'bold',
                            }}
                        >
                            {emp.name1}
                        </div>
                        <div>{emp.name2}</div>
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.name3}
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.name4}
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.position}
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.employmentDate}
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        {emp.workingYear}
                    </div>
                </div>
            </ListItemButton>
        </>
    )
}

export default EmpListItem;