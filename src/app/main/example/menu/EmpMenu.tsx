import { width } from "@mui/system";
import titleIcon from "./titleIcon.png"

function EmpMenu() {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                paddingTop: '20px',
                paddingLeft: '15px'
            }}
        >
            <h1
                style={{
                    fontWeight: '900',
                    fontSize: '30px',
                    paddingBottom: '20px',
                }}
            >
                社員管理
            <br />
            </h1>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <h3
                        style={{
                            color: 'blue',
                            fontWeight: 'bold',
                            paddingBottom: '20px',
                        }}
                    >
                        役職
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>部長</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>次長</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>課長</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>社員</span>
                    </div>
                </div>
                <br />

                <div>
                    <h3
                        style={{
                            color: 'blue',
                            fontWeight: 'bold',
                            paddingBottom: '20px',
                        }}
                    >
                        状態
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>待機中</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>現場</span>
                    </div>
                </div>
                <br />
                <div>
                    <h3
                        style={{
                            color: 'blue',
                            fontWeight: 'bold',
                            paddingBottom: '20px',
                        }}
                    >
                        現場
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>アマゾン</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>みずほ銀行</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '20px',
                        }}
                    >
                        <img src={titleIcon}
                            style={{
                                width: '20px',
                                height: '20px',
                                marginRight: '10px',
                            }}
                        />
                        <span>マイクロソフト</span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EmpMenu;