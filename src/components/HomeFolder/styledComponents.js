import Styled from 'styled-components'

export const HomeMainContainer = Styled.div`
display:flex;
 min-height:100vh;
    
box-sizing:border-box;


`
export const HomeContainer = Styled.div` 
    display:flex;
    flex-direction:column;
    min-height:100vh;
    width:70vw;
    
 @media(max-width:768px){
     width:100vw;
 }

`
export const CrossCon = Styled.button`
align-self:flex-end;
padding-left:40px;
`

export const Banner = Styled.div`
background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
background-size:cover;
padding:12px;
border:1px solid black;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
width:70vw;
@media (max-width:768px){
    width:100vw;
}

`

export const HomeCon = Styled.div`


`
export const BannerLogo = Styled.img`

@media(max-width:767px){
}
`
export const BannerPara = Styled.p`
font-size:20px;
font-weight:600;

`
export const GetNow = Styled.button`
background-color:transparent;
border:1px solid #000000;
height:40px;
color:#000000;
`
export const VideosUnorder = Styled.ul`
padding:10px;

display:flex;

flex-wrap:wrap;
@media(max-width:767px){

 
}
`
export const Input = Styled.input`
width:300px;
height:30px;
border:none;
outline:none;
background-color:transparent;
`
export const InputCon = Styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
background-color:#ffff;
height:32px;
width:360px;
border:1px solid #7e858e;
margin-top:10px;
margin-left:10px;
`
export const Loadercon = Styled.div`
width:100%;
display:flex;
min-height:60vh;
align-items:center;
justify-content:center;

`
export const FailureCon = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#000000;
text-align:center;
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
