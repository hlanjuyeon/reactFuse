import listImg from '../formImg/listImg.png';

function FieldTab({emp}) {
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
                <img src={listImg}
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
                    現場名
                </div>
                <div>No Data</div>
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
                <img src={listImg}
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
                    状態
                </div>
                <div>No Data</div>
            </div>
        </>
    )
}

export default FieldTab;