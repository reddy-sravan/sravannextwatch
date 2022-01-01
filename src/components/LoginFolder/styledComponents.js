import Styled from 'styled-components'

export const LoginContainer = Styled.div`
box-shadow:0px 4px 9px 0px black;
padding:10px;
display:flex;
flex-direction:column;
padding-bottom:40px;
padding-top:20px;
align-items:flex-start;
background-color:${props => props.background};
@media (min-width:768px){
box-shadow:0px 4px 9px 0px black;
padding:60px;
display:flex;
flex-direction:column;
padding-bottom:30px;
padding-top:30px;
align-items:flex-start;
}
`

export const LoginMainContainer = Styled.form`
background-color:${props => props.background};
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
padding:20px;
`

export const NxtWatchLogo = Styled.img`
height:40px;
width:190px;
align-self:center;
margin-bottom:20px;
@media (min-width:768px){
    height:80px;
    width:260px;
}
`

export const LoginInputsCon = Styled.div`
display:flex;
flex-direction:column;

`

export const PasswordCon = Styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
`

export const UserNameCon = Styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
`

export const UserNameInput = Styled.input`
height:30px;
border:1px solid  #616e7c;
margin:2px;
border-radius:3px;
outline:none;
width:300px;
color:${props => props.color};
background-color:transparent;
@media (min-width:768px){
    height:40px;
    border-radius:5px;
    width:400px;
}
`

export const UserNameLabel = Styled.label`
color:#7e858e;
font-size:20px;
color:${props => props.color};
`

export const PasswordLabel = Styled.label`
color:#7e858e;
font-size:20px;
color:${props => props.color};
`

export const PasswordInput = Styled.input`
height:40px;
border:1px solid  #616e7c;
margin:2px;
border-radius:3px;
outline:none;
width:300px;
background-color:transparent;
color:${props => props.color};
@media (min-width:768px){
    height:40px;
    border-radius:5px;
    width:400px;
}
`

export const LoginButton = Styled.button`
align-self:stretch;
background-color:#4f46e5;
color:#ffffff;
border:0px;
height:45px;
border-radius:5px;
@media (min-width:768px){
    height:50px;
    border-radius:10px;
}
`
export const ErrorPara = Styled.p`
color:red;
margin:0px;
font-weight:bold;
`
export const ShowPasswordCon = Styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;

`
export const Checkbox = Styled.input`
height:16px;
width:16px;
margin-left:10px;
border:1px solid ;
@media (min-width:768px){
    height:15px;
    width:15px;
}
`

export const CheckboxLabel = Styled.label`
font-size:10px;
font-weight:600;
color:${props => props.color};
@media (min-width:768px){
    font-size:16px;
    font-weight:600;
}
`
