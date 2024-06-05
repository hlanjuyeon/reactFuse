import empCard from '../formImg/empCard.png';
import employmentDtate from '../formImg/employmentDate.png';
import empPosition from '../formImg/empPosition.png';

function BasicTab({ emp }) {

    return (
        <>
            <div
                style={{
                    maxWidth: '76.8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    alignItems: 'center',
                }}
            >
                <img src={empCard}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                    }}
                />
                <div
                    style={{
                        marginRight: '60px',
                        width: '60px',
                    }}
                >
                    社員番号
                </div>
                <div>{emp.id}</div>
            </div>
            <div
                style={{
                    maxWidth: '76.8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    alignItems: 'center',
                }}
            >
                <img src={empCard}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                    }}
                />
                <div
                    style={{
                        marginRight: '60px',
                        width: '60px',
                    }}
                >
                    E-Mail
                </div>
                <div>{emp.email}</div>
            </div>
            <div
                style={{
                    maxWidth: '76.8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    alignItems: 'center',
                }}
            >
                <img src={empCard}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                    }}
                />
                <div
                    style={{
                        marginRight: '60px',
                        width: '60px',
                    }}
                >
                    名前
                </div>
                <div>{emp.name3} &nbsp; &#40;&nbsp;{emp.name4}&nbsp;&#41;</div>
            </div>
            <div
                style={{
                    maxWidth: '76.8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    alignItems: 'center',
                }}
            >
                <img src={empPosition}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                    }}
                />
                <div
                    style={{
                        marginRight: '60px',
                        width: '60px',
                    }}
                >
                    役職
                </div>
                <div>{emp.position}</div>
            </div>
            <div
                style={{
                    maxWidth: '76.8rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '1rem',
                    alignItems: 'center',
                }}
            >
                <img src={employmentDtate}
                    style={{
                        width: '30px',
                        height: '30px',
                        marginRight: '20px',
                    }}
                />
                <div
                    style={{
                        marginRight: '60px',
                        width: '60px',
                    }}
                >
                    入社日
                </div>
                <div>{emp.employmentDate} &nbsp;
                    &#40;&nbsp; 勤続年数 : {emp.workingYear}&nbsp;&#41;
                </div>
            </div>
        </>
    )
}

export default BasicTab;