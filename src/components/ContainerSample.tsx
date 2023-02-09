import React from "react";

// Containerのpropを定義する
type ContainerProps = {
    title: string
    children: React.ReactNode
}

// Containerは赤背景のボックスの中にタイトルと子要素を表示する。
const Container = (props: ContainerProps): JSX.Element => {
    const { title,children } = props

    return (
        <div style={{ background: 'red' }} >
            <span>{title}</span>
            {/* propsのchildrenを埋め込むとこのコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
            <div>{children}</div>
        </div>
    )
}

// JSX.Element型の値を返すという意味
const Parent = ():JSX.Element => {
    return (
        <Container title="Hello">
            <p>この部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent