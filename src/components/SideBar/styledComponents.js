import Styled from 'styled-components'

export const MainContainer = Styled.div`
width:30vw;
background-color:${props => props.bgcolor};
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
@media(max-width:767px){
  display:none;
  
}
`
export const SideBarUnorder = Styled.ul`
padding-left:0px;
box-sizing:border-box;

`
export const List = Styled.li`
list-style-type:none;
display:flex;
align-items:center;
color:black;
padding-left:20px;
`
export const MenuItem = Styled.p`
color:black!important;
`

export const SideBottomCon = Styled.div`
padding:14px;
`
export const BottomHead = Styled.p`
font-size:15px;

`
export const BottomIconCon = Styled.div`
width:200px;
display:flex;
justify-content:space-between;
`
export const Facebook = Styled.img`
height:60px;
`
export const Twitter = Styled.img`
height:60px;
`
export const BottomPara = Styled.p``
export const Linked = Styled.img`
height:60px;
`
