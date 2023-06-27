const staffDetails=[
    {
        name:"VISU P",
        discription:"HOD",

    },
    {
        name:"KAVITHA",
        discription:"class advisor",
    },
    {
        name:"RAJASUGANYA",
        discription:"HOD",

    },
    {
        name:"SARANYA",
        discription:"class advisor",
    },
    {
        name:"PREMA",
        discription:"HOD",

    },
    {
        name:"VINISHA",
        discription:"class advisor",
    },
    {
        name:"VIDHIYA",
        discription:"HOD",

    },
    {
        name:"HANNA",
        discription:"class advisor",
    },
    {
        name:"THAMARAI SELVAN",
        discription:"class advisor",
    },
]

function StaffName(){
    const nameList = staffDetails.map(staff=>{
        const sname = `${staff.name}`
        return(
            <div>
                <li>{sname}</li>
                <br></br>
            </div>
        )
        
    })
    return(
        <div className="soutercon">
            <div className="sinnercon" id="sinnercon1">
                <ol>
                    {nameList}
                </ol>
            </div>
        </div>
    )
}
export default StaffName;