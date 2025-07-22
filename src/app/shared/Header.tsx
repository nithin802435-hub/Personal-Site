
export default function Header(){
    const menuList= [{
        name:"Home",
        path:"#home"
    },{
        name:"Resume",
        path:"#resume"
    },{
        name:"About",
        path:"#about"
    },{
        name:"Contact",
        path:"#contact"
    }
    
]
    return(
        <div className="center">
        <div className="bg-black-800">
            <ul className="flex gap-[100px] justify-">
                {menuList.map((item,index)=>{

                return(<li key={index}><a href={item.path}>{item.name}</a></li>)
            })}
            </ul>
            </div>
        </div>
    )
}