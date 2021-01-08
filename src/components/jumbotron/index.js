import React from 'react'
import { Container, Inner, Pane, Title, SubTitle, Image } from "./styles/jumbotron";


export default function Jumbtron({ children, direction= 'row', ...restProps }){
    return (
        <Inner direction={ direction }>
            {children}
        </Inner>
    )
} 

Jumbtron.Container = function JumbotronContainer({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Jumbtron.Pane = function JumbotronPane({ children, ...restProps }){
    return <Pane {...restProps}>{children}</Pane>
}

Jumbtron.Title = function JumbotronTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Jumbtron.SubTitle = function JumbotronSubTitle({ children, ...restProps }){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbtron.Image = function JumbotronImage({ ...restProps }){
    return <Image {...restProps}/>
}