import "./about.css"
import React from "react";

export default function Aboutpage() {
    return (
        <div className="about">
            <h5 className="purpose">เว็บไซต์นี้ใช้เพื่อการศึกษาในรายวิชา 240-311 Distributed Computing and Web Technologies เท่านั้น</h5>
            <h5 className="purpose">This website is for educational purposes of course 240-311 Distributed Computing and Web Technologies only.</h5>
            <h2 className="team">ผู้จัดทำ</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.6435-9/124929628_1711759355664150_7059085153224456011_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFM2J-4qMjHwoKOOrNgmyXm3kQLUPMEsTTeRAtQ8wSxNEtLNOqyESSSkKONezJP_AskJG_HbfRCpKzk7ePc08Mo&_nc_ohc=1v7jnBVYwgIAX-1y9Qj&_nc_ht=scontent.fbkk28-1.fna&oh=00_AT8NT_fG1il3V0wCgplO4oZ-ILU1Zthmpf8jXFSFWlYMtg&oe=62623876" className="aboutImg" />
                        <div className="container">
                            <h2 className="name">นายธีรยุทธ นุชผดุง</h2>
                            <p>รหัสนักศึกษา: 6210110149</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="https://scontent.fhdy1-1.fna.fbcdn.net/v/t1.6435-9/170798858_1353017558391878_3568255702215455582_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=K7f7K3pt3eQAX82OCW5&_nc_ht=scontent.fhdy1-1.fna&oh=00_AT9lUhBXfzNzHs5ahdnSlTxi7ChgolRTCFphCtrxvd-LgA&oe=62643A43" className="aboutImg" />
                        <div className="container">
                            <h2 className="name">นางสาวศิขรินทร์ สามงามทอง</h2>
                            <p>รหัสนักศึกษา: 6210110342</p>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="purpose">สาขาวิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์</h5>
            <h5 className="purpose">Department of Computer Engineering, Faculty of Engineering, Prince of Songkla University</h5>
        </div>

    )
}