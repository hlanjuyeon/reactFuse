function EmpList( { employees } ) {

    return (
        <>
            <div className='list'>
                <div className="header"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        verticalAlign: 'middle',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: '0 -2px 0 rgba(0, 0, 0, 0.1), 0 2px 0 rgba(0, 0, 0, 0.1)',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundColor: '#FAFAFA',
                        fontWeight: 'bold',
                        color: '#848484',
                    }}

                >
                    <div
                        style={{
                            width: '5%',
                        }}
                    >
                    </div>

                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        社員番号
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        名前&#40;ja&#41;
                    </div>
                    <div
                        style={{
                            width: '15%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        名前&#40;en&#41;
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        名前&#40;ko&#41;
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        役職
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        入社日
                    </div>
                    <div
                        style={{
                            width: '10%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        勤続年数
                    </div>
                </div>
                {employees.map((emp) => (
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
                            {emp.empNum}
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
                ))}
            </div>
        </>
    )
}

export default EmpList;