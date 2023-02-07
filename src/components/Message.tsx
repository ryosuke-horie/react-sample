// 無名関数でコンポーネントを定義し、Textという変数に代入する。
// Textコンポーネントは親から`content`というデータを受けとる。
const Text = (props: {content: string}) => {
    // propsからcontentという値を受け取る。
    const { content } = props
    // propsで渡されたデータを表示する。
    return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
    const content1 = 'This is parent content'
    const content2 = 'Message uses Test component'

    return (
        <div>
            {/* contentというキーでコンポーネントに値を渡す。 */}
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message