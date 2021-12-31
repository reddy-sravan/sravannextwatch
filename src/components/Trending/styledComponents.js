import Styled from 'styled-components'

export const TrendingMainContainer = Styled.div`
background-color:${props => props.bgcolor};

`
export const TrendingHomeContainer = Styled.div`
display:flex;

`
export const TrendingIcon = Styled.div`
background-color:#909090;
padding:10px;
padding-right:20px;
padding-left:20px;
display:flex;
align-items:center;

background-color:${props => props.bgcolor};
`
export const TrendHome = Styled.div`
width:70vw;
margin-bottom:10px;

@media(max-width:769px){
    width:100vw;
}

`
export const TrendName = Styled.h1``

export const TrendingVideos = Styled.ul`
padding-left:0px;
display:flex;
flex-wrap:wrap;
text-align:left;


`

export const FailureCon = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#000000S;
text-align:center;
width:100%;
color:${props => props.color};

`
export const FailureHead = Styled.h1``
export const FailurePara = Styled.p``
export const FailureImage = Styled.img`
height:260px;
`
export const FailureButton = Styled.button`
background-color:blue;
border-radius:10px;
border:0px;
height:30px;
width:100px;
color:white;
`
export const Loadercon = Styled.div`
width:100%;
display:flex;
min-height:60vh;
align-items:center;
justify-content:center;

`
