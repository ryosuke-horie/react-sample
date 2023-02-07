// Containerは赤背景のボックスの中にタイトルと子要素を表示する。
const Container = (props: {title: string; children: React.ReactElement}) => {
    const { title,children } = props

    return (
        <div style={{ background: 'red' }} >
            <span>{title}</span>
            {/* propsのchildrenを埋め込むとこのコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>この部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent