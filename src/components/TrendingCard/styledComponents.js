import Styled from 'styled-components'

export const TrendingCardCon = Styled.div`
background-color:${props => props.background};
padding:30px;
@media(min-width:769px){
    display:flex;
}
`
export const CardImage = Styled.img`
height:300px;
width:100%;
@media(min-width:769px){
    width:600px;
}

`
export const CardImageCon = Styled.div`
width:100%;
margin-right:10px;
@media(min-width:769px){
    width:600px;
    
}
`
export const Description = Styled.div`
display:flex;
`

export const Icon = Styled.img`
 height:70px;
 margin-right:20px;
 
`
export const BottomCon = Styled.div`
display:flex;
align-items:center;
text-align:center;

`
export const Details = Styled.div`
color:${props => props.color};`
export const Name = Styled.p`

`
export const Views = Styled.p`

`
export const PublishedAt = Styled.p`

`
export const CardName = Styled.p`
font-weight:bold;`
