import Styled from 'styled-components'

export const CardContainer = Styled.div`
color:${props => props.color} ;
margin-right:10px;
 
margin-bottom:20px;

width:335px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:576px){
    width:100%;
}
`
export const ThumbnailImage = Styled.img`
height:180px; 
width:335px;
flex-grow:1;
@media(max-width:576px){
    width:100%;
    height:230px;
}
`
export const CardDetailsCon = Styled.div`
display:flex;
margin-top:10px;
width:100%;
align-items:flex-start;
`
export const Profile = Styled.img`
width:20%;
margin-right:10px;

height:40px;

`
export const CardTitle = Styled.p`
margin:0px;
width:200px;
`
export const Description = Styled.div`
height:200px;

`
export const CardName = Styled.p`
margin:0px;
margin-top:7px;`
export const Views = Styled.p`
margin:0px;
margin-right:4px;`
export const Published = Styled.p`
margin:0px;
 
`
