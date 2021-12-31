import Styled from 'styled-components'

export const HeaderMainContainer = Styled.div`
padding:30px;
background-color:${props => props.bgcolor};
color:${props => props.color};


`
export const HeaderCon = Styled.div`
display:flex;
flex-grow:1;
justify-content:space-between;
@media(min-width:768px){
    
    
}
`

export const HeaderLogo = Styled.img`
width:200px;

@media(min-width:768px){
  width:230px;
    
}  
`
export const HeaderHamburgerContainer = Styled.div`
width:140px;
display:flex;
align-items:center;
justify-content:space-between;

@media(min-width:768px){
    display:none;
}
`
export const MenuUnorder = Styled.ul`
padding-right:30px;
padding-left:30px;

`

export const List = Styled.li`
list-style-type:none;

`

export const MenuContainer = Styled.div``

export const Menuitem = Styled.p`
font-size:10px;
font-weight:bold;
`
export const Profile = Styled.img`
height:28px;
`
export const HeaderProfileContainer = Styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:150px;


@media (max-width:767px){
    display:none;
}
`
export const Logout = Styled.button`
background-color:transparent;
border:1px solid #4f46e5;
color:#4f46e5;

`
export const PopupContainer = Styled.div``
export const ConfirmCon = Styled.div`
background-color:#ffffff;
opacity:2;
border-radius:10px;
height:150px;
width:350px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`
export const Button = Styled.div`
width:200px;
display:flex;
justify-content:space-between;


`
export const Popupmenu = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-end;
background-color:#909090;
`
export const LogoutButton = Styled.button`
background-color:${props => props.background};
color:${props => props.color};
border:${props => {
  console.log(props.border)
  return props.border
}};
height:35px;
width:80px;
`
export const ConfirmPara = Styled.p`
margin:0px;
color:blue;
`
