import Styled from 'styled-components'

export const GamingMainContainer = Styled.div`


display:flex;
flex-direction:column;
justify-content:flex-start;
margin-left:20px;
flex-grow:1;
margin-bottom:10px;
@media(min-width:576px){
    
}
`
export const GameImage = Styled.img`
width:300px;
border-radius:10px;

@media(max-width:576px){
    
    
}
`
export const GameName = Styled.p`
font-weight:bold;

`
export const GamePara = Styled.p`
margin:0px;

`
