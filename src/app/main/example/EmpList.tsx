import EmpListItem from "./EmpListItem";

function EmpList({ employees }) {

    return (
        <div className='flex-row'>
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
                <EmpListItem
                    key={emp.id}
                    emp={emp}
                />
            ))
            }
        </div>
    )
}

export default EmpList;